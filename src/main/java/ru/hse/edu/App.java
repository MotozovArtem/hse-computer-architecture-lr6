package ru.hse.edu;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ExecutorService;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.Provider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App extends Application {

	private static final Logger log = LoggerFactory.getLogger(App.class);

	private static final Map<String, Parent> NODES_CACHE = new HashMap<>();

	public static final String PROPERTIES_FILE = "app.properties";

	public static final Injector injector = Guice.createInjector(new DefaultModule());

	public static final ExecutorService guiExecutor = new GuiExecutor();

	private static Scene MAIN_SCENE;

	@Override
	public void start(Stage primaryStage) throws Exception {
		log.info("Application started");

		MAIN_SCENE = new Scene(
				App.load("fxml/app.fxml"),
				1024, 768);

		primaryStage.setScene(MAIN_SCENE);
		primaryStage.setTitle("Лабораторная работа 6. Алгоритмы замещения");
		primaryStage.setResizable(true);

		Platform.setImplicitExit(false);
		primaryStage.setOnCloseRequest((event) -> {
			shutdown();
		});

		navigate("fxml/MainView.fxml");
		primaryStage.show();
	}

	private void shutdown() {
		log.info("Application shutdown");
		Platform.exit();
	}

	public static Parent load(String resourcePath) {
		return load(resourcePath, null);
	}

	public static Parent load(String resourcePath, Object controller) {
		Objects.requireNonNull(resourcePath);

		Parent node = null;
		if (controller == null)
			node = NODES_CACHE.get(resourcePath);
		if (node == null) {
			ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
			URL url = classLoader.getResource(resourcePath);
			if (url == null)
				throw new RuntimeException("Resource not found: " + resourcePath);

			FXMLLoader loader = injector.getInstance(FXMLLoader.class);
			// location
			loader.setLocation(url);
			// controller
			if (controller != null)
				loader.setController(controller);

			try (InputStream in = url.openStream()) {
				node = loader.load(in);
			} catch (IOException e) {
				throw new RuntimeException("Cannot load resource", e);
			}
			// cache nodes with implicit controllers
			if (controller == null)
				NODES_CACHE.put(resourcePath, node);
		}
		return node;
	}

	public static URL getLayoutResource(String resourcePath) {
		Objects.requireNonNull(resourcePath);
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		return classLoader.getResource(resourcePath);
	}

	public static void navigate(Node next) {
		Objects.requireNonNull(next);
		if (MAIN_SCENE == null)
			return;
		Node node = MAIN_SCENE.lookup("#container");
		HBox.setHgrow(next, Priority.ALWAYS);
		if (node instanceof HBox) {
			HBox parent = (HBox)node;
			parent.getChildren().setAll(next);
		}
	}

	public static void navigate(String resourcePath) {
		navigate(load(resourcePath));
	}

	static class DefaultModule extends AbstractModule {

		@Override
		protected void configure() {
			bind(FXMLLoader.class).toProvider(FXMLLoaderProvider.class);
		}
	}

	static class FXMLLoaderProvider implements Provider<FXMLLoader> {

		private final Injector injector;

		@Inject
		public FXMLLoaderProvider(Injector injector) {
			Objects.requireNonNull(injector);
			this.injector = injector;
		}

		@Override
		public FXMLLoader get() {
			FXMLLoader loader = new FXMLLoader();
			loader.setControllerFactory(injector::getInstance);
			return loader;
		}
	}
}
