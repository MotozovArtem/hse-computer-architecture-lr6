package ru.hse.edu.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Properties;
import javax.inject.Singleton;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ru.hse.edu.App;

@Singleton
public class AppConfig {

	private static final Logger log = LoggerFactory.getLogger(AppConfig.class);

	private static final Path CONFIG_FILE = Paths.get(App.PROPERTIES_FILE);

	private String appBuildVersion;

	public AppConfig() throws IOException {
		InputStream in = null;
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
		if (classLoader != null) {
			in = classLoader.getResourceAsStream(CONFIG_FILE.toString());
		}
		if (in == null) {
			in = new FileInputStream(CONFIG_FILE.toString());
		}
		Properties readedProperties = new Properties();
		readedProperties.load(in);

		appBuildVersion = System.getProperty("app.buildVersion");

		Path propertiesPath = Paths.get(App.PROPERTIES_FILE);
		if (Files.exists(propertiesPath)) {
			readedProperties.load(Files.newInputStream(propertiesPath));

		} else {
			log.error("File " + App.PROPERTIES_FILE + " does not exists");
			throw new RuntimeException("File " + App.PROPERTIES_FILE + " does not exists");
		}
	}

	public String getAppBuildVersion() {
		return appBuildVersion;
	}

}