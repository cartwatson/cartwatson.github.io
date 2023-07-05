var form = document.getElementById("gform");
var errorMessage = document.getElementById("contactErrorMessage");

function isEmpty(str) {
  return (!str || 0 === str.length || '' === str.trim())
}

function isInvalidEmail(str) {
  return (str.indexOf('@') < 1 || 
          str.lastIndexOf('.') + 2 >= str.length || 
          str.indexOf('@') + 2 > str.lastIndexOf('.'))
}

function submitFormHandler(evt) {
    errorMessage.style.color = "red";
    const name = "entry.578492226";
    const email = "entry.195477056";
    const company = "entry.649545670";
    const message = "entry.132988173";

    var failures = 0
    // get the form form fields
    var formFields = evt.target.elements

    // disable default form action
    evt.preventDefault()

    // validate 'name' field
    if (isEmpty(formFields[name].value)) {
        failures += 1
        errorMessage.innerText = 'Please enter your name';
        // focus on the form field
        formFields[name].focus()
    }

    // validate 'email' field
    if (0 == failures && (isEmpty(formFields[email].value) || 
        isInvalidEmail(formFields[email].value))) {
        failures += 1
        errorMessage.innerText = 'Invalid email';
        // alert('Invalid email')
        // focus on the form field
        formFields[email].focus()
    }

    // validate 'country' field
    if (0 == failures && isEmpty(formFields[message].value)) {
        failures += 1
        errorMessage.innerText = 'Please write a message';
        // focus on the form field
        formFields[message].focus()
    }

    if (0 === failures) {
        // get the form data
        var formData = new FormData(evt.target)
        // prepare AJAX request
        var request = new XMLHttpRequest()
        
        // get the method and action from the form
        var method = evt.target.method || 'POST'
        var action = evt.target.action || '#'

        // perform the AJAX request
        request.open(method, action)
        request.send(formData)

        // clear fields
        formFields[name].value = '';
        formFields[email].value = '';
        formFields[company].value = '';
        formFields[message].value = '';

        // display success message
        errorMessage.style.color = "green";
        errorMessage.innerText = "Success! I'll reach out to you soon";
    }
}

if (form) {
    // attach form handler to submit event
    form.addEventListener('submit', submitFormHandler)
}