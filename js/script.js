// Login Modal //
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// sign Up Modal //
var signmodal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signmodal) {
    signmodal.style.display = "none";
  }
};
// birthday modal //
// Get the modal
var bmodal = document.getElementById("bModal");

// Get the button that opens the modal
var btn = document.getElementById("birthdayBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  bmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  bmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == bmodal) {
    bmodal.style.display = "none";
  }
};
// Wedding modal //
// Get the modal
var wmodal = document.getElementById("wModal");

// Get the button that opens the modal
var btn = document.getElementById("weddingBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("wclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  wmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  wmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == wmodal) {
    wmodal.style.display = "none";
  }
};
// Aniversary modal //
// Get the modal
var amodal = document.getElementById("aModal");

// Get the button that opens the modal
var btn = document.getElementById("aniversaryBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("aclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  amodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  amodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == amodal) {
    amodal.style.display = "none";
  }
};
// flower gallery 
function openModal(modalId) {
  var modals = document.getElementById(modalId);
  modals.style.display = "block";
}

function closeModal(modalId) {
  var modals = document.getElementById(modalId);
  modals.style.display = "none";
}

document.getElementById("myBtn1").onclick = function() {
  openModal('modal1');
}

document.getElementById("myBtn2").onclick = function() {
  openModal('modal2');
}

document.getElementById("myBtn3").onclick = function() {
  openModal('modal3');
}

var closeButtons = document.getElementsByClassName("close1");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
      var modalId = this.getAttribute('data-modal');
      closeModal(modalId);
  }
}

window.onclick = function(event) {
  if (event.target.className === 'modals') {
      event.target.style.display = "none";
  }
}

 // Load stored data from local storage
 if(localStorage.getItem('contactFormData')) {
  const savedData = JSON.parse(localStorage.getItem('contactFormData'));
  nameField.value = savedData.name || '';
  emailField.value = savedData.email || '';
  messageField.value = savedData.message || '';
}

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Validate form fields
  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[a-zA-Z\s]*$/; // Only allow letters and spaces
  
  if (!nameField.value.trim() || !namePattern.test(nameField.value)) {
    alert('Please enter a valid name without special characters');
    valid = false;
  } else if (!emailField.value.trim() || !emailPattern.test(emailField.value)) {
    alert('Please enter a valid email address');
    valid = false;
  } else if (!messageField.value.trim()) {
    alert('Please enter your message');
    valid = false;
  }

  if (valid) {
    // Store form data in local storage
    const formData = {
      name: nameField.value.trim(),
      email: emailField.value.trim(),
      message: messageField.value.trim()
    };
    
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Clear form fields
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    
    alert('Form submitted successfully!');
  }
});





  











































