package com.metier.service;

import java.util.ArrayList;
import java.util.List;

import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebService;

import com.metier.dao.PersonneDoa;
import com.metier.model.Personne;

@WebService(name="personneSoap")
public class PersoneServiceImp  {
	PersonneDoa pdo = new PersonneDoa();

	 
	@WebMethod(operationName = "ajouterPersonne")
	public void addPerson(
			@WebParam(name = "nom")
			String nom,
			@WebParam(name = "prenom")
			String prenom,
			@WebParam(name = "age")        
			int age) {
		// TODO Auto-generated method stub
		pdo.savePersonne(nom, age, prenom);
	}

	 
	@WebMethod
	public Personne getPerson(int var1) {
		Personne personne = pdo.getPers(var1);
		return personne;
	}
 
	@WebMethod
	public List<Personne> getAllPersons() {
		List<Personne> list = new ArrayList<Personne>();
		list = pdo.getPersonne();
		return list;
	}
 
	@WebMethod
	public void updatePerson(Personne var1) {
		Personne per = new Personne();
		per.setAge(var1.getAge());
		per.setNom(var1.getNom());
		per.setPreNom(var1.getPreNom());
		pdo.updatePersonne(var1.getId(), per);
	}
 
	@WebMethod
	public void deletePerson(int var1) {
		pdo.deletePersonne(var1);
	}

}
