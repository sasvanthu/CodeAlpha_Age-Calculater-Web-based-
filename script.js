document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const dobInput = document.getElementById('dob').value;
  if (!dobInput) return;

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    document.getElementById('result').textContent = "Date of Birth can't be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // If days are negative, borrow days from previous month
  if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate(); // gets days in the previous month
  }

  // If months are negative, borrow a year
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('result').textContent =
    `You are ${years} years, ${months} months, and ${days} days old.`;
});
