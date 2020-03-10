package ru.hse.edu;

import org.junit.Assert;
import org.junit.Test;

public class AppTest {

	@Test
	public void testHelloWorld() {
		String hello = "Hell";
		Assert.assertEquals("Hello", hello.concat("o"));
	}
}
