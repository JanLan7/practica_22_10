alert("Este es el contenido teorico de Javascript clase 2 😎");
    alert("¿Qué ítem querés estudiar 🤓?");
    let continuar = true;

    while (continuar) {
        let mensaje = Number(prompt("Fundamentos de Javascript\n1. Condicionales y Operadores"));

        switch (mensaje) {
            case 1:
                alert("Condicionales y Operadores\nFundamento de Condicionales\nIntroducción\nLos condicionales en JavaScript son estructuras fundamentales que permiten tomar decisiones en un programa basándose en si una o más condiciones se cumplen. Al igual que en la vida real, donde tomamos decisiones basadas en diferentes situaciones, los condicionales nos permiten ejecutar distintas partes de código dependiendo de ciertas condiciones lógicas.");
                alert("Estructura Básica del if\nLa estructura básica del if en JavaScript se utiliza para ejecutar un bloque de código solo si una condición específica es verdadera. Por ejemplo:\nif (condición) {Código a ejecutar si la condición es verdadera}");
                alert("Si la condición evaluada dentro del if resulta en true, el bloque de código asociado se ejecutará. De lo contrario, se omitirá.")
                alert("Uso de else y else if\nPara manejar múltiples condiciones, podemos extender el uso del if con else y else if. El else permite ejecutar un bloque de código cuando la condición del if es falsa. Por ejemplo:\nif (condición) {// Código si la condición es verdadera} else {// Código si la condición es falsa}")
                alert("Cuando hay múltiples posibles condiciones que queremos evaluar, podemos usar else if para definir condiciones adicionales:\nif (condición1) {// Código si condición1 es verdadera} else if (condición2) {// Código si condición2 es verdadera} else {// Código si ninguna de las condiciones anteriores es verdadera}")
                alert("Ejemplos Prácticos\nConsideremos un ejemplo simple para determinar si un estudiante aprueba o no un examen:")

                break;
            case 2:
               alert("")
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