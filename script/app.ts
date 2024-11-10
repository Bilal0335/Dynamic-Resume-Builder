// Get references to the form
const form = document.getElementById('resume-form') as HTMLFormElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Generated Resume</title>
            <link rel="stylesheet" href="./css/style.css" />
        </head>
        <body>
            <h2>Resume</h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        </body>
    </html>
    `;

    // Open a new tab and write the resume content
    const newTab = window.open('', '_blank'); // Open a new tab or window
    if (newTab) {
        newTab.document.write(resumeHTML); // Write the content to the new tab
        newTab.document.close(); // Close the document to render it
    } else {
        console.error('Failed to open a new tab. Please check your browser settings.');
    }
});
