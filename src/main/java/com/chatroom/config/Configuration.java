package com.chatroom.config;

import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@org.springframework.context.annotation.Configuration
@EnableWebSocketMessageBroker
public class Configuration implements WebSocketMessageBrokerConfigurer{

	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
	
		registry.enableSimpleBroker("/topic");
		registry.setApplicationDestinationPrefixes("/app");	
	}
	
	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
	
		registry.addEndpoint("/server1").withSockJS();
		
	}
	
}
