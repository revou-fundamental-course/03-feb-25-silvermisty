function convertToFahrenheit() {
    let celsius = document.getElementById('celsius').value;
    if (celsius === '') {
      alert('Please enter a value in Celsius');
      return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').innerText = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
  }
  
  function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').innerText = '';
  }
  
  function reverseConversion() {
    let fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === '') {
      alert('Please enter a value in Fahrenheit');
      return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').innerText = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
  }
  