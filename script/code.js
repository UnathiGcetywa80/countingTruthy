let Count = 0;
function calculateTruthy() {
  const inputValue = document.getElementById('input').value;
  const isTruthy = Boolean(inputValue);
  if (isTruthy) {
    truthyCount++;
  }
  updateCountDisplay();
}
function updateCountDisplay() {
  const countElement = document.getElementById('calculate');
  countElement.textContent = `Results: ${truthyCount}`;
}
