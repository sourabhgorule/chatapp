package com.chatroom.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chatroom.models.Message;

@RestController	
public class MSG_Controller {

	@MessageMapping("/message")
	@SendTo("/topic/return-to")
	public Message name(@RequestBody Message msg){
		
		return msg;
	}
	
}
