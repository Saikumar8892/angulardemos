package com.example.backendapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.onlineshop.bean")
@EnableJpaRepositories(basePackages = "com.onlineshop.repository")
public class BackendAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendAppApplication.class, args);
		System.out.println("Server up...");
	}

}
