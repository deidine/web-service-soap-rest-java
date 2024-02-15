package com.metier.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/******
 * JAXB
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "PersonneTest")
public class Personne {
	// Donnees
    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
    @JsonProperty("age")
    private int age;
	private String nom, prenom;

	// Constructeurs

	public void setNom(String nom) {
		this.nom = nom;
	}

	public void setPreNom(String prenom) {
		this.prenom = prenom;
	}

	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		 this.id=id;
	}

	public int getAge() {
		return this.age;
	}

	public String getNom() {
		return this.nom;
	}

	public String getPreNom() {
		return this.prenom;
	}

	public void setAge(int age2) {

		this.age = age2;

	}

}
