package ru.hse.edu;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public final class ThreadPools {
	private static final ExecutorService DEFAULT_POOL = Executors.newCachedThreadPool();

	private ThreadPools() {

	}

	public static ExecutorService defaultPool() {
		return DEFAULT_POOL;
	}
}
