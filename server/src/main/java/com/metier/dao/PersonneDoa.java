package com.metier.dao;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.metier.model.Personne;

import org.hibernate.Query;
import java.sql.Connection;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
 
public class PersonneDoa {

	Connection connection;

	

	public void savePersonne(String nom, int age,String prenom) {
		Session session = HibernateUtil.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			Personne per = new Personne();
			per.setNom(nom);
			per.setPreNom(prenom);
			per.setAge(age);
			session.save(per);
			transaction.commit();
			System.out.println("Records inserted sucessessfully");
		} catch (HibernateException e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}


	public void savePersonne2(Personne prs) {
		Session session = HibernateUtil.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			 
			session.save(prs);
			transaction.commit();
			System.out.println("Records inserted sucessessfully");
		} catch (HibernateException e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}

	public List<Personne> getPersonne() {
		Session session = HibernateUtil.getSession();
		Query query = session.createQuery("from Personne");
		List<Personne> per = query.list();
		 

		session.close();
		return per.stream() 
                .collect(Collectors.toList());
	}

	public Personne getPers(int id) {
		Session session = HibernateUtil.getSession();
		Personne personne = session.get(Personne.class, id);
		return personne;
	}

	public void updatePersonne(int id, Personne per) {

		Session session = HibernateUtil.getSession();
		 Transaction tx = session.beginTransaction();
		Personne personne = session.load(Personne.class, id);
//		personne.set(id);
		personne.setPreNom(per.getPreNom());
		personne.setNom(per.getNom());
		personne.setAge(per.getAge());
//		session.update(personne);
		tx.commit();
		session.close();
 

	}

	public int deletePersonne(int id) {
		Session session = HibernateUtil.getSession();
		Transaction tx = session.beginTransaction();
		String hql = "delete from Personne where id = :id";
		Query query = session.createQuery(hql);
		query.setInteger("id", id);
		int rowCount = query.executeUpdate();
		System.out.println("Rows affected: " + rowCount);
		tx.commit();
		session.close();
		return rowCount;
	}

}
