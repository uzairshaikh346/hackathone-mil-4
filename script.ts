// script.ts
document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skill') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    const resumeHTML = `
        <h2 contenteditable="true">${name}</h2>
        <p contenteditable="true"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
    `;

    const resumeDiv = document.getElementById('generate-resume')!;
    resumeDiv.innerHTML = resumeHTML;
    resumeDiv.style.display = 'block';

    const printButton = document.getElementById('print-button')!;
    printButton.style.display = 'block';
});

document.getElementById('print-button')!.addEventListener('click', function() {
    const resumeDiv = document.getElementById('generate-resume')!;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = resumeDiv.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
});
