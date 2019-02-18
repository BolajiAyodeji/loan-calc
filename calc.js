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
