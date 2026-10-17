document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('order-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pickupDate = document.getElementById('pickup-date').value;
    const requestType = document.getElementById('request-type').value;
    const itemDetails = document.getElementById('item-details').value.trim();
    const allergyNotes = document.getElementById('allergy-notes').value.trim();

    const message = `Thanks, ${name}! We’ve received your ${requestType.replace('-', ' ')} request for ${pickupDate}. We’ll reply at ${email} with next steps.\n\nItem details: ${itemDetails}\nAllergy notes: ${allergyNotes || 'None provided'}`;

    alert(message);
    form.reset();
  });
});
