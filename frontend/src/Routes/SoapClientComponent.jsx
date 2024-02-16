import React, { useEffect } from 'react';
import soap from 'soap';
function SoapClientComponent() {
    useEffect(() => {
      const url = 'http://localhost:6089/c16627Service?wsdl';
  
      const callSoapService = async () => {
        try {
          const client = await soap.createClientAsync(url);
          // Call SOAP operations here using the 'client' object
          // Example:
          const response = await client.ajouterPersonneAsync({  name: 'John Doe',
          age: 30,
          email: 'john@example.com'/* arguments */ });
          console.log('Response:', response);
        } catch (error) {
          console.error('SOAP Error:', error);
        }
      };
  
      callSoapService();
    }, []); // Call the SOAP service when the component mounts
  
    return (
      <div>
        <h1>SOAP Client Component</h1>
        {/* You can add UI elements here to display SOAP responses */}
      </div>
    );
  }
  
  export default SoapClientComponent;
  
// const url = 'http://localhost:6089/c16627Service?wsdl';

// const soapHeaders = {
//   'Content-Type': 'text/xml;charset=UTF-8',
//   'SOAPAction': ''
// };

// // Function to create a SOAP client and call the ajouterPersonne operation
// const callAjouterPersonne = async () => {
//   try {
//     const client = await soap.createClientAsync(url);
//     const args = {
//       // Add arguments for ajouterPersonne operation if required
//     };
//     const response = await client.ajouterPersonneAsync(args);
//     console.log('Response from ajouterPersonne:', response);
//   } catch (error) {
//     console.error('Error calling ajouterPersonne:', error);
//   }
// };

// // Function to create a SOAP client and call the getAllPersons operation
// const callGetAllPersons = async () => {
//   try {
//     const client = await soap.createClientAsync(url);
//     const args = {
//       // Add arguments for getAllPersons operation if required
//     };
//     const response = await client.getAllPersonsAsync(args);
//     console.log('Response from getAllPersons:', response);
//   } catch (error) {
//     console.error('Error calling getAllPersons:', error);
//   }
// };

// // Function to create a SOAP client and call the getPerson operation
// const callGetPerson = async () => {
//   try {
//     const client = await soap.createClientAsync(url);
//     const args = {
//       // Add arguments for getPerson operation if required
//     };
//     const response = await client.getPersonAsync(args);
//     console.log('Response from getPerson:', response);
//   } catch (error) {
//     console.error('Error calling getPerson:', error);
//   }
// };

// // Function to create a SOAP client and call the updatePerson operation
// const callUpdatePerson = async () => {
//   try {
//     const client = await soap.createClientAsync(url);
//     const args = {
//       // Add arguments for updatePerson operation if required
//     };
//     const response = await client.updatePersonAsync(args);
//     console.log('Response from updatePerson:', response);
//   } catch (error) {
//     console.error('Error calling updatePerson:', error);
//   }
// };

// // Function to create a SOAP client and call the deletePerson operation
// const callDeletePerson = async () => {
//   try {
//     const client = await soap.createClientAsync(url);
//     const args = {
//       // Add arguments for deletePerson operation if required
//     };
//     const response = await client.deletePersonAsync(args);
//     console.log('Response from deletePerson:', response);
//   } catch (error) {
//     console.error('Error calling deletePerson:', error);
//   }
// };

// // Call the SOAP operations
// callAjouterPersonne();
// callGetAllPersons();
// callGetPerson();
// callUpdatePerson();
// callDeletePerson();
