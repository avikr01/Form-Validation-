document.addEventListener("DOMContentLoaded", function() {// this function ensures that code inside the function will run only after dom content is fully loaded
    const form = document.getElementById("myForm");
    const previewModal = document.getElementById("previewModal");
    const previewText = document.getElementById("previewText");
    const closeButton = document.getElementsByClassName("close")[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();//prevents the default form submission
        if (validateForm()) {
            openPreviewModal(); // to open a function named openPreviewModal
        }
    });
    closeButton.addEventListener("click", function() {
        closePreviewModal(); // to close the preview dialog box..
    });
    function validateForm() { //validating the input entered
        const name = document.getElementById("name").value;
        const contact = document.getElementById("contact").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        let isValid = true; // Variable to track overall form validity

        if (!/^[a-zA-Z\s]*$/.test(name)) { // reg-ex expression checking 
            setError("name", "Invalid input! Only letters(both capital or small) and spaces allowed.");
            isValid = false;
        } else {
            clearError("name");
        }

        if (!/^\d{10}$/.test(contact)) {
            setError("contact", "Invalid input! Contact must be 10 digits.");
            isValid = false;
        } else {
            clearError("contact");
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("email", "Invalid input! Please enter a valid email address.");
            isValid = false;
        } else {
            clearError("email");
        }

        if (address.trim() === "") {
            setError("address", "Address field cannot be empty.");
            isValid = false;
        } else {
            clearError("address");
        }

        return isValid;
    }

    function setError(field, message) {
        const errorDiv = document.getElementById(`${field}Error`);
        errorDiv.textContent = message;
    }

    function clearError(field) {
        const errorDiv = document.getElementById(`${field}Error`);
        errorDiv.textContent = "";
    }

    function openPreviewModal() {
        const name = document.getElementById("name").value;
        const contact = document.getElementById("contact").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        previewText.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Contact:</strong> ${contact}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Address:</strong> ${address}
        `;
        previewModal.style.display = "block";
    }

    function closePreviewModal() {
        previewModal.style.display = "none";
    }
});
