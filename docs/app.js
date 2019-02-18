// Listen or submit
const submitForm = document.getElementById('loan-form')
submitForm.addEventListener('submit', calcResult);

// Calculate results
function calcResult(e) {
  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPay = document.getElementById('monthly-payment');
  const totalPay = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principle = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value / 100 / 12);
  const calcPay = parseFloat(years.value * 12);

  // Compute monthly payments
  const x = Math.pow(1 + calcInterest, calcPay);
  const monthly = (principle * x * calcInterest) / (x - 1);

  if(isFinite(monthly)) {
    monthlyPay.value = monthly.toFixed(2);
    totalPay.value = (monthly * calcPay).toFixed(2);
    totalInterest.value = ((monthly * calcPay) - principle).toFixed(2);
  }
  else {
    showError('Please check your numbers');
  }
  e.preventDefault();
}

// Show error
function showError(error) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  const errorText = document.createTextNode(error);
  errorDiv.appendChild(errorText);

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

    // Clear error after 2 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2500);
}
