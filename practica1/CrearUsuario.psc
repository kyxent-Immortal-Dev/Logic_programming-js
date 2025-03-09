Algoritmo CrearUsuario
	Definir nombreCompleto , correo , password Como Cadena
	Definir arrobaValidator , inicial , error Como Entero
	
	error <- 0 
	
	Escribir "Por favor ingrese su nombre completo"
	Leer nombreCompleto
	
	Si Longitud(nombreCompleto) < 3 Entonces
		
		Escribir "El nombre debe tener almenos 3 caracteres"
		error <- 1
	FinSi
	

	Escribir "Porfavor ingrese su correo"
	Leer correo
	// humberto@gmail.com
	Para inicial <- 1 Hasta Longitud(correo) Hacer
		
		Si Subcadena(correo , inicial , inicial) = "@" Entonces
			arrobaValidator <- 1
		FinSi
		
	FinPara
	
	Si arrobaValidator = 0 Entonces
		
		Escribir "Porfavor ingrese un correo valido"
		error <- 1
	FinSi
	
	Escribir "Porfavor ingrese su contraseña"
	Leer password
	
	Si Longitud(password) < 8 Entonces
		Escribir "La contraseña debe ser mayor a 8 caracteres"
		error <- 1
	FinSi
	
	Si error > 0 Entonces
		Escribir "Debe cumplir con todos las validaciones para poder registrarse"
	FinSi
	
	Si error = 0 Entonces
		Escribir "registro exitoso"
		Escribir nombreCompleto
		Escribir correo
		Escribir password
	FinSi
	
	
FinAlgoritmo
	