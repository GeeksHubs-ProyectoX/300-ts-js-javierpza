<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

	Dada una secuencia de caráctes formados por tres elementos se pide la reducción de los mismos 
	hasta llegar a la última secuencia.
	La reducción de la fila se hace a través del empareamiento de dos de ellos en cada fila.
	Si el emparejamiento contiene los mismos elementos, el resultado es el mismo elemento en la siguiente fila.
	Si los elementos son diferentes, el resultado es el elemento que falta en la siguiente fila.
	El algortimo finaliza cuando la reducción llega a un solo elemento.

	Elementos: X Y Z

	Ejemplo:

		Z X X 
		 Y X
		  Z
		
    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    

    [Suite Tests]
    
 	 PASS  test/suite.test.js
		√ SCART: X (4ms)
		√ SCART: Y (1ms)
		√ SCART: Z
		√ SCART: X X
		√ SCART: Z X (1ms)
		√ SCART: X Z
		√ SCART: Z Y
		√ SCART: Y Z (1ms)
		√ SCART: X Y
		√ SCART: Y X (1ms)
		√ SCART: Y Y
		√ SCART: Z X X (1ms)
		√ SCART: Y Y N X Y Y
		√ SCART: Y Y Y X Z Y
		√ SCART: X X Y Z X Y Z Z (1ms)
		√ SCART: X Y Y Z Y Y Z Z
		√ SCART: X Y Y Z Y Y Z Z Y
		√ SCART: X Y Z Z Y Y Z Z Y (1ms)
		√ SCART: Y X X Z Y Z Y X X Y
		√ SCART: Z Y X X Y Y Y X X Y Z X Y X
		√ SCART: Y Y Z X Y Y X Y Z X X Y X X Z Z X Y (1ms)
		√ SCART: Y Y X X Y Y X Y Z X Y Y X X Y Z X Y
		√ SCART: Z X Y Y X Z Z X Y X X Y Y Z X Z X Y Z Y X Y
		√ SCART: Z X X Y X X Z X Y Y X Z Y Y X Y Y Y Z X X Z Y
		√ SCART: Y Y X X Y Y X Y Z X Y Y X X Y Z X Y (1ms)

		Test Suites: 1 passed, 1 total
		Tests:       25 passed, 25 total
		Snapshots:   0 total
		Time:        4.763s		

## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
