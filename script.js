const openFormBtn = document.getElementById('openFormBtn');
const formModal = document.getElementById('formModal');
const closeForm = document.getElementById('closeForm');
 
 
openFormBtn.addEventListener('click', () => {
  formModal.style.display = 'block';
});
 
 
closeForm.addEventListener('click', () => {
  formModal.style.display = 'none';
});
 
 
window.addEventListener('click', (e) => {
  if (e.target === formModal) {
    formModal.style.display = 'none';
  }
});
 
