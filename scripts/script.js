// Get the modal and the button that opens it
const modal = document.getElementById("myModal");
const ctaButton = document.getElementById("ctaButton");

// Function to open the modal
function openModal() {
	modal.classList.remove('hidden');
	modal.classList.add('flex'); // to center the content
}

// Function to close the modal
function closeModal() {
	modal.classList.add('hidden');
	modal.classList.remove('flex');
}

ctaButton.addEventListener('click', openModal);

window.addEventListener('click', function(event) {
	if (event.target == modal) {
		closeModal();
	}
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behaviour: 'smooth'
		});
	});
});
