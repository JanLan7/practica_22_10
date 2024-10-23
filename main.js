alert("Este es el contenido teorico de Javascript clase 2 😎");
    alert("¿Qué ítem querés estudiar 🤓?");
    let continuar = true;

    while (continuar) {
        let mensaje = Number(prompt("Fundamentos de Javascript\n1. Condicionales y Operadores\n2.Operadores en Detalle"));

        switch (mensaje) {
            case 1:
                alert("Condicionales y Operadores\nFundamento de Condicionales\nIntroducción\nLos condicionales en JavaScript son estructuras fundamentales que permiten tomar decisiones en un programa basándose en si una o más condiciones se cumplen. Al igual que en la vida real, donde tomamos decisiones basadas en diferentes situaciones, los condicionales nos permiten ejecutar distintas partes de código dependiendo de ciertas condiciones lógicas.");
                alert("Estructura Básica del if\nLa estructura básica del if en JavaScript se utiliza para ejecutar un bloque de código solo si una condición específica es verdadera. Por ejemplo:\nif (condición) {Código a ejecutar si la condición es verdadera}");
                alert("Si la condición evaluada dentro del if resulta en true, el bloque de código asociado se ejecutará. De lo contrario, se omitirá.")
                alert("Uso de else y else if\nPara manejar múltiples condiciones, podemos extender el uso del if con else y else if. El else permite ejecutar un bloque de código cuando la condición del if es falsa. Por ejemplo:\nif (condición) {// Código si la condición es verdadera} else {// Código si la condición es falsa}")
                alert("Cuando hay múltiples posibles condiciones que queremos evaluar, podemos usar else if para definir condiciones adicionales:\nif (condición1) {// Código si condición1 es verdadera} else if (condición2) {// Código si condición2 es verdadera} else {// Código si ninguna de las condiciones anteriores es verdadera}")
                alert("Ejemplos Prácticos\nConsideremos un ejemplo simple para determinar si un estudiante aprueba o no un examen:")
                alert("let calificacion = 75;\nif (calificacion >= 90) {console.log('Excelente');} else if (calificacion >= 70) {console.log('Bueno');} else {console.log('Necesitas estudiar más');}")
                alert("Conclusión\nLos condicionales son herramientas poderosas en JavaScript que ayudan a dirigir el flujo de un programa. Aprendiendo a utilizar adecuadamente if, else, y else if, se puede controlar cómo se ejecuta el código en diferentes circunstancias, haciendo posible la creación de programas más dinámicos y reactivos a las condiciones de entrada.")
                break;
            case 2:
               alert("Operadores Lógicos y de Comparación en JavaScript\nIntroducción\nEn JavaScript, los operadores lógicos y de comparación son herramientas esenciales que permiten evaluar condiciones y comparar valores. Estos operadores son fundamentales para controlar el flujo de ejecución en programas a través de estructuras condicionales como if, else, y bucles como while y for.");
               alert("Operadores de Comparación\nLos operadores de comparación evalúan dos valores y retornan un valor booleano (true o false) dependiendo de si la comparación es verdadera.");
               alert("== (Igual): Compara si dos valores son iguales, ignorando el tipo de dato.\njsx console.log(2 == '2'); // true\n=== (Estrictamente igual): Compara si dos valores son iguales y del mismo tipo.\njsx console.log(2 === '2'); // false\n!= (No igual): Compara si dos valores no son iguales, ignorando el tipo de dato.\njsx console.log(2 != '3'); // true\n!== (Estrictamente no igual): Compara si dos valores no son iguales o no son del mismo tipo.\njsx console.log(2 !== '2'); // true\n<, <=, >, >= (Menor que, Menor o igual que, Mayor que, Mayor o igual que): Utilizados para comparaciones numéricas.\njsx console.log(3 < 4); // true console.log(5 >= 5); // true")
               alert("Operadores Lógicos\nLos operadores lógicos se usan para combinar múltiples condiciones booleanas.\n&& (AND): Retorna true si ambos operandos son verdaderos.\njsx console.log(true && false); // false\n|| (OR): Retorna true si al menos uno de los operandos es verdadero.\njsx console.log(true || false); // true! (NOT): Invierte el valor booleano del operando.\njsx console.log(!true); // false")
               alert("Ejemplos Prácticos\nVeamos cómo estos operadores pueden ser usados en situaciones comunes:")
               alert("let edad = 20;\nlet acceso = (edad >= 18) && (edad <= 30);\nconsole.log(acceso); // true si la edad está entre 18 y 30")
               alert("En el ejemplo anterior, el operador && se utiliza para asegurar que ambas condiciones sobre la variable edad sean verdaderas para permitir el acceso.")
               alert("let temperatura = 35;\nlet advertencia = (temperatura < 0) || (temperatura > 32);\nconsole.log(advertencia); // true si la temperatura es menor que 0 o mayor que 32")
               alert("Aquí, el operador || permite generar una advertencia si alguna de las condiciones climáticas es extrema.Conclusión\nEntender los operadores lógicos y de comparación en JavaScript es crucial para manipular el flujo de decisiones en un programa, permitiendo a los desarrolladores escribir código más flexible y robusto. Estos operadores, combinados con estructuras de control, ofrecen una poderosa herramienta para manejar la lógica de las aplicaciones.")

                break;
            case 3:
               alert("")
                break;
                
            case 4:
                alert("")
                break;
           
            default:
                alert("Opción no válida 😅. probá un número del 1 al 4.");
                break;
        }

        continuar = confirm("¿Queres estudiar otro ítem? 👨‍🏫");
    }

    alert("No te desanimes😁! Fuerza 💪");