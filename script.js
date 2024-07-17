const lengthConversions = {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    micrometer: 1e6,
    nanometer: 1e9,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
    lightyear: 1.057e-16
};

function convertLength() {
    const input = parseFloat(document.getElementById('length-input').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;

    const result = input * (lengthConversions[toUnit] / lengthConversions[fromUnit]);
    document.getElementById('length-result').innerText = `Result: ${result}`;
}
function convertTemperature() {
    const input = parseFloat(document.getElementById('temp-input').value);
    const fromUnit = document.getElementById('temp-from').value;
    const toUnit = document.getElementById('temp-to').value;

    let result;

    // Celsius to Fahrenheit
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (input * 9/5) + 32;
    }
    // Fahrenheit to Celsius
    else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (input - 32) * 5/9;
    }
    // Celsius to Kelvin
    else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = input + 273.15;
    }
    // Kelvin to Celsius
    else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = input - 273.15;
    }
    // Fahrenheit to Kelvin
    else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (input - 32) * 5/9 + 273.15;
    }
    // Kelvin to Fahrenheit
    else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (input - 273.15) * 9/5 + 32;
    }

    document.getElementById('temp-result').innerText = `Result: ${result}`;
}
