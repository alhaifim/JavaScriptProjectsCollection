//Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  //Hide results
  document.getElementById('results').style.display = 'none';

  //Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// UI VARs
const amountUI = document.getElementById('amount');
const interestUI = document.getElementById('interest');
const yearsUI = document.getElementById('years');
const monthlyPaymentUI = document.getElementById('monthly-payment');
const totalPaymentUI = document.getElementById('total-payment');
const totalInterestUI = document.getElementById('total-interest');

// Calculate Results
function calculateResults() {
  console.log('Calculating.... ');

  // calculations variables.  changing values to flaot
  const principal = parseFloat(amountUI.value);
  const calculatedInterest = parseFloat(interestUI.value) / 100 / 12;
  const calculatedPayments = parseFloat(yearsUI.value) * 12;

  //compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPaymentUI.value = monthly.toFixed(2);
    totalPaymentUI.value = (monthly * calculatedPayments).toFixed(2);
    totalInterestUI.value = (monthly * calculatedPayments - principal).toFixed(
      2
    );
    //show results
    document.getElementById('results').style.display = 'block';
    // Hide Loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please Check your numbers');
  }
}
//Show Error
function showError(error) {
  // Hide Loader
  document.getElementById('loading').style.display = 'none';
  // Hide Result
  document.getElementById('results').style.display = 'none';
  //create div
  const errorDiv = document.createElement('div');
  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //Add class from bootstrap
  errorDiv.className = 'alert alert-danger';
  // Create textnode and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // Clear Error after 3 seconds
  setTimeout(clearError, 3000);
}
//Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}

//Clear event
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

function clear() {
  document.getElementById('loan-form').reset();
  monthlyPaymentUI.value = '';
  totalPaymentUI.value = '';
  totalInterestUI.value = '';
  // Hide Loader
  document.getElementById('loading').style.display = 'none';
  // Hide Result
  document.getElementById('results').style.display = 'none';
}
