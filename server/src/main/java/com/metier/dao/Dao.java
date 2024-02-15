package com.metier.dao;

import java.util.List;

import com.metier.model.Personne;

public interface Dao  {

	List<Personne> allPersonne();

	Personne getById(int id);

	void sauvgarde(String nom,String prenom,int age );

	void modifier(Personne pers );

	void suprimer(int t);
}