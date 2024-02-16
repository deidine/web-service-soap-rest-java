package com.metier.service;

import jakarta.xml.ws.Endpoint;

public class SoapImp {

 
	public static void main(String [] args) {
//		System.setProperty("javax.xml.bind.JAXBContextFactory", "com.sun.xml.bind.v2.ContextFactory");
		String url = "http://localhost:6089/c16627Service";
	 
	            Endpoint.publish(url, new PersoneServiceImp());
	            System.out.println("Service web CRUD publié avec succès à l'adresse : " + url);
	         
 }
}
