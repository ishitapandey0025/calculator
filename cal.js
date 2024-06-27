// Function to append numbers and operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to calculate the expression in the display
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  