(() => {
  const form = document.getElementById('budget-calculator');
  if (!form) return;
  const total = document.getElementById('budget-total');
  const area = document.getElementById('budget-area');
  const result = document.getElementById('budget-result');
  const format = new Intl.NumberFormat('el-GR', {style:'currency',currency:'EUR',maximumFractionDigits:2});
  const initial = 'Συμπλήρωσε τα δύο πεδία για να δεις το αποτέλεσμα.';
  form.addEventListener('input', () => {result.textContent = initial;});
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const amount = total.valueAsNumber, sqm = area.valueAsNumber;
    if (!Number.isFinite(amount) || !Number.isFinite(sqm) || amount <= 0 || sqm <= 0) return;
    result.textContent = `${format.format(amount / sqm)} / τ.μ. — με βάση τα δικά σου ποσά. Η ένδειξη δεν αξιολογεί αν η προσφορά είναι πλήρης ή εύλογη.`;
  });
})();
