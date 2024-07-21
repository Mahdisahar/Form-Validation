const inputs = document.querySelectorAll("input:not([type = 'submit' ])");

inputs.forEach(input => {
	// add event listener for invalid inputs for all inputs
	input.addEventListener('invalid', addErrorMessage);

	// check the validity on every blur
	input.addEventListener('blur', (event) => {
		input.checkValidity();
	})

	// remove existing error message on foucs
	input.addEventListener('focus', removeErrorMessage);
})


function addErrorMessage(e) {
	// get input element name
	var name = e.target.getAttribute('name');

	// create an error icon element
	var error_icon = document.createElement('span');
	error_icon.setAttribute('data-id', name);
	error_icon.classList.add('error-icon');
	error_icon.innerHTML = "<img src=/images/error.jpg alt ='error'>";

	// create an error message
	var error_message = document.createElement('span');
	error_message.setAttribute('data-id', name);
	error_icon.classList.add('error-message');

	if (e.target.value == "" || e.target.value == null) {
		error_message.innerHTML = "" + e.target.getAttribute("placeholder") + ' ' + "Cannot be empty.";
	}
	else {
		error_message.innerHTML = "Looks like this is not an " + e.target.getAttribute("placeholder") + ".";
	}

    // Append error icon and message after input element
    e.target.after(error_message);
    e.target.after(error_icon);

    // Add error class to input to change border color
    e.target.classList.add('error');
}

function removeErrorMessage(e) {
    // Get error icon and message elements corresponding to target.
    var elements = document.querySelectorAll("[data-id='"+ e.target.getAttribute("name")+"']");

    // Remove those elements.
    elements.forEach(error_element => {
        error_element.remove();
    })

    // Remove error class from input.
    e.target.classList.remove('error');
}