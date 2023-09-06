
function KelvinCelsius(temperatuara){
    const resultado = temperatuara - 273.15;
    return resultado;
}
function FahrenheitCelsius(temperatuara){
    const resultado = (temperatuara - 32) / 1.8;
    return resultado;
}

function CelsiusKelvin(temperatuara){
    const resultado = temperatuara + 273.15;
    return resultado;
}

function kelvinFahrenheit(temperatuara){
    const resultado = (temperatuara- 273.15) * 1.8 + 32;
    return resultado;
}
function FahrenheitKelvin(temperatuara){
    const resultado = (temperatuara - 32) / 1.8 + 273.15;
    return resultado;
}
function CelsiusFahrenheit(temperatuara){
    const resultado = (temperatuara * 1.8) + 32;
    return resultado;
}


function Conversor() {
    let operacion;
    while (operacion != "x" && operacion != "salir") {
        operacion = prompt("¿Qué operación querés hacer?\n1: Kelvin a Celsius\n2: Fahrenheit a Celsius\n3: Celcius a Kelvin\n4: Kelvin a Fahrenheit\n5: Fahrenheit a Kelvin\n6: Celsius a Fahrenheit\nx: Salir");
    
    operacion = operacion.toLocaleLowerCase();
    switch (operacion) {
        case "1":
            temperatuara = parseInt(prompt("Ingrese la temperatura: "));
            alert("La conversión de Kelvin a Celsius es: " + KelvinCelsius(temperatuara) + "°C")
            break;

        case "2":
            temperatuara = parseInt(prompt("Ingrese la temperatura: "));
            alert("La conversión de Fahrenheit a Celsius es: " + FahrenheitCelsius(temperatuara) + "°C")
            break;

        case "3":
            temperatuara = parseInt(prompt("Ingrese la temperatura: "));
            alert("La conversión de Celsius a kelvin es: " + CelsiusKelvin(temperatuara) + "K")
            break;

        case "4":
            temperatuara = parseInt(prompt("Ingrese la temperatura: "));
            alert("La conversión de Kelvin a Fahrenheits es " + kelvinFahrenheit(temperatuara) + "°F")
            break;

        case "5":
            temperatuara = parseInt(prompt("Ingrese la temperatura: "));
            alert("La conversión de Fahrenheit a kelvin " + FahrenheitKelvin(temperatuara) + "K")
            break;

        case "6":
            temperatuara = parseInt(prompt("Ingrese la temperatura: "));
            alert("La conversión de Celsius a Fahrenheit es " + CelsiusFahrenheit(temperatuara) + "°F")
            break;
        
        case "x":
            break;

        case "salir":
            break;
        default:
            alert("La operación ingresada es inválida.");
        }   
    }
}

