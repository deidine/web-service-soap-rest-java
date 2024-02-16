<?php

// Define the WSDL URL
$wsdl = "http://localhost:8080/c16627Service?wsdl";

try {
    // Create a new SOAP client
    $client = new SoapClient($wsdl);

    // Example: Add a person
    $client->addPerson("John", "Doe", 30);

    // Example: Get all persons
    $allPersons = $client->getAllPersons();
    var_dump($allPersons);

    // Example: Get a specific person
    $person = $client->getPerson(1);
    var_dump($person);

    // Example: Update a person
    $client->updatePerson(["id" => 1, "nom" => "Updated Name", "prenom" => "Updated Last Name", "age" => 40]);

    // Example: Delete a person
    $client->deletePerson(1);
} catch (SoapFault $e) {
    // Handle SOAP faults
    echo "SOAP Fault: {$e->getMessage()}";
}

?>
