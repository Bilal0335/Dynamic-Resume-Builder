// Get references to the form
var form = document.getElementById('resume-form');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\" />\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n            <title>Generated Resume</title>\n            <link rel=\"stylesheet\" href=\"./css/style.css\" />\n        </head>\n        <body>\n            <h2>Resume</h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </body>\n    </html>\n    ");
    // Open a new tab and write the resume content
    var newTab = window.open('', '_blank'); // Open a new tab or window
    if (newTab) {
        newTab.document.write(resumeHTML); // Write the content to the new tab
        newTab.document.close(); // Close the document to render it
    }
    else {
        console.error('Failed to open a new tab. Please check your browser settings.');
    }
});
