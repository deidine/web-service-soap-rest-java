package com.metier.service;

import com.metier.model.Personne;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.metier.dao.PersonneDoa;

//@ApplicationPath(value = "personnes")
@Path("/add")

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class RestPost extends Metadata {
	PersonneDoa pdo = new PersonneDoa();
 
	@POST
	@Path("/add")
 
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean addPerson(Personne var1) throws IOException {
		System.out.println(var1.toString() + "gttgtgggggggggtgt");
	   
//	    ObjectMapper mapper = new ObjectMapper();
//	    Personne per = mapper.reader()
//	    	      .forType(Personne.class)
//	    	      .readTree(var1); 
	    
		pdo.savePersonne2(var1);
		return true;
	}


}
