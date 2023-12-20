function convertTemperature() {
  // Get the input values
  const temperatureInput = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("unit").value;
  const toUnit = document.getElementById("convertTo").value;

  // Conversion logic
  let convertedTemperature;
  let unit;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      convertedTemperature = (temperatureInput * 9/5) + 32;
      unit = "°F";
    } else if (toUnit === "kelvin") {
      convertedTemperature = temperatureInput + 273.15;
      unit = "K";
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      convertedTemperature = (temperatureInput - 32) * 5/9;
      unit = "°C";
    } else if (toUnit === "kelvin") {
      convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
      unit = "K";
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      convertedTemperature = temperatureInput - 273.15;
      unit = "°C";
    } else if (toUnit === "fahrenheit") {
      convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
      unit = "°F";
    }
  }

  // Display the converted temperature
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}