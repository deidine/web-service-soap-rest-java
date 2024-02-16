import React, { useState } from 'react';
import axios from 'axios';

function SoapServiceComponent() {
  const [response, setResponse] = useState(null);
  const url = "http://localhost:6089/c16627Service?wsdl";

  const soapHeaders = {
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': ''
    }
  };
  let reqInstance = axios.create({
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': ''
    }
  });
  const fetchAllPersons = () => {
    const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
       xmlns:tns="http://service.metier.com/">
        <soapenv:Header/>
        <soapenv:Body>
          <tns:getAllPersons/>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    axios.post(url, soapEnvelope, soapHeaders)
      .then((response) => {
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const soapRequestGetPerson = () => {
    const soapRequest = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
      xmlns:ser="http://service.metier.com/">
          <soapenv:Header/>
          <soapenv:Body>
              <ser:getPerson>
                  <!-- Add the ID of the person to get -->
                  <parameters> 
                      <id>1</id>
                  </parameters>
              </ser:getPerson>
          </soapenv:Body>
      </soapenv:Envelope>
    `;

    reqInstance.post(url, soapRequest)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const soapRequestDeletePerson = () => {
    const soapRequest = `
    
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.metier.com/">
        <soapenv:Header/>
        <soapenv:Body>
            <ser:deletePerson>
                <parameters> <!-- Add the ID of the person to delete -->
                    <id>1</id>
                </parameters>
            </ser:deletePerson>
        </soapenv:Body>
    </soapenv:Envelope>
`;

    axios.post('http://localhost:3322/c16627Service', soapRequest, {
      soapHeaders
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const soapRequestUpdatePerson = () => {

    const soapRequestUpdatePerson = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.metier.com/">
        <soapenv:Header/>
        <soapenv:Body>
            <ser:updatePerson>
                <parameters> <!-- Add the updated person data -->
                    <id>1</id> <!-- ID of the person to update -->
                    <nom>New Name</nom> <!-- New name -->
                    <prenom>New Last Name</prenom> <!-- New last name -->
                    <age>30</age> <!-- New age -->
                </parameters>
            </ser:updatePerson>
        </soapenv:Body>
    </soapenv:Envelope>
`;

    axios.post('http://localhost:3322/c16627Service', soapRequestUpdatePerson, {
      soapHeaders
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Similar functions for other SOAP requests

  return (
    <div>
      <h2>SOAP Service Consumer</h2>
      <button onClick={fetchAllPersons}>Fetch All Persons</button>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      <button onClick={soapRequestGetPerson}>Get Person</button>
      {/* Render other buttons for other SOAP requests */}
    </div>
  );
}

export default SoapServiceComponent;
