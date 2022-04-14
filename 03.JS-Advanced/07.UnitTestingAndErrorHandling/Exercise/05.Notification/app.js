function notify(message) {
  let notificationField = document.getElementById('notification');
  notificationField.style.display = 'block';
  notificationField.textContent = message;
  notificationField.addEventListener('click', () => { notificationField.style.display = 'none'; })
}