package ru.hse.edu;

import java.util.List;
import java.util.concurrent.AbstractExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

import javafx.application.Platform;

public class GuiExecutor extends AbstractExecutorService {

	private final AtomicBoolean isShutdown = new AtomicBoolean(false);

	@Override
	public void shutdown() {
		isShutdown.set(true);
	}

	@Override
	public List<Runnable> shutdownNow() {
		throw new UnsupportedOperationException();
	}

	@Override
	public boolean isShutdown() {
		return isShutdown.get();
	}

	@Override
	public boolean isTerminated() {
		/* Currently no support for synchronization. */
		return isShutdown.get();
	}

	@Override
	public boolean awaitTermination(long timeout, TimeUnit unit)
			throws InterruptedException {
		/* Currently not implemented. */
		return true;
	}

	@Override
	public void execute(Runnable command) {
		if (isShutdown.get()) {
			return;
		}
		Platform.runLater(command);
	}

}