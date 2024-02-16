package com.metier.service;

import java.util.ArrayList;
import java.util.List;

import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebService;

import com.metier.dao.PersonneDoa;
import com.metier.model.Personne;

@WebService(name="personneSoap")
public class TestSoap  {
//	PersonneDoa pdo = new PersonneDoa();

private final PersonneDoa doa=null;
      private List<Personne> dataList;

    public TestSoap( ) {
    	this.dataList = new ArrayList<>();
    }
  
    @WebMethod public String hello() {
    	return "hello word";
    }
	@WebMethod(operationName = "ajouterPersonne")
	public void addPerson(
			Personne data) {
		// TODO Auto-generated method stub
		 dataList.add(data);
	}

	 
	@WebMethod
	public Personne getPerson(int index) {
		 if (index >= 0 && index < dataList.size()) {
	            return dataList.get(index);
	        }
	        return null;
	}
 
	@WebMethod
	public List<Personne> getAllPersons() {
		List<Personne> list = new ArrayList<Personne>();
		list = this.doa.getPersonne();
		return list;
	}
 
	@WebMethod
	public void updatePerson(int index,Personne var1) {
		 if (index >= 0 && index < dataList.size()) {
	            dataList.set(index, var1);
	        }
	}
 
	@WebMethod
	public void deletePerson(int index) {
		if (index >= 0 && index < dataList.size()) {
            dataList.remove(index);
        }
	}

}
