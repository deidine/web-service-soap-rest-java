<%@ page import="javax.xml.namespace.QName" %>
<%@ page import="jakarta.xml.ws.Service" %>
<%@ page import="com.metier.service.PersoneServiceImp"%>
<%@ page import="com.metier.model.Personne"%>
<html>
<body>
	<h2>Jersey RESTful Web Application!</h2>

	<p>
		<a href="webapi/personnes/">personnes Rest</a>
	</p>
	<p>
		<a href="http://localhost:8086/c16627Service"> personne Soap</a>
	</p>
	<a href="Service">gestion personne</a>

	
	// Create a QName object for the service
	 QName serviceName = new QName("http://localhost:8086/c16627Service", "personneSoap");

	// Create a Service object
	 Service service = Service.create(serviceName);

	// Get the port from the service
	 PersoneServiceImp port = service.getPort(PersoneServiceImp.class);

	// Call the web service method
	 Personne result = port.getPerson(1);

	// Display the result
	  
<%	%>
	<% //result %>
</body>
</html>
