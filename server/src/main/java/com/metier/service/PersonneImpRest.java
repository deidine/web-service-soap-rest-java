package com.metier.service;

import com.metier.model.Personne;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.metier.dao.PersonneDoa;

//@ApplicationPath(value = "personnes")
@Path("/personnes")

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PersonneImpRest extends Metadata {
	PersonneDoa pdo = new PersonneDoa();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Personne> getIt() {

		List<Personne> personnes = pdo.getPersonne();
		return personnes;
	}

	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean updatePerson(@PathParam("id") int id, Personne var1) {
		Personne existingPersonne = pdo.getPers(id); // Implement this method
		if (existingPersonne != null) {

			Personne per = new Personne();
			per.setAge(var1.getAge());
			per.setNom(var1.getNom());
			per.setPreNom(var1.getPreNom());
			pdo.updatePersonne(var1.getId(), per);

			return true;
		} else {
			return false;
		}

	}

	@DELETE
	@Path("/{id}")
	public boolean deletePerson(@PathParam("id") int var1) {
		Personne existingPersonne = pdo.getPers(var1); // Implement this method
		if (existingPersonne != null) {
			pdo.deletePersonne(var1);
			return true;
		} else {
			return false;
		}

	}
//
//	@POST
//	@Path("/add")
//	@Consumes(MediaType.APPLICATION_JSON)
//	public boolean addPerson(String nom, String prenom, int age) {
//		pdo.savePersonne(nom, age, prenom);
//		return true;
//	}
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
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Personne getPerson(@PathParam("id") int var1) {
		Personne personne = pdo.getPers(var1);
		return personne;
	}

}
