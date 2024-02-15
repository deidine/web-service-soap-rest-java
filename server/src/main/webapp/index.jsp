 
<%@ page import="com.metier.service.PersoneServiceImp" %>
<%@ page import="com.metier.model.Personne" %>
<html>
<body>
	<h2>Jersey RESTful Web Application!</h2>
	<p>
		<a href="webapi/myresource">Jersey resource</a>
	<p>
		Visit <a href="http://jersey.java.net">Project Jersey website</a>
	<p>
		<a href="webapi/personnes/">personnes</a>
	</p>
	for more information on Jersey!

	<a href="Service">ajouter un personne</a>

	<%
	// Create a QName object for the service
	//QName serviceName = new QName("http://localhost:8088/c16627Service/", "PersoneServiceImp");

	// Create a Service object
	//Service service = Service.create(serviceName);

	// Get the port from the service
	//PersoneServiceImp port = service.getPort(PersoneServiceImp.class);

	// Call the web service method
	//Personne result = port.getPerson(1);

	// Display the result
//	out.println("Result from web service: " + result);
	%>
</body>
</html>
