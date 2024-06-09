const saveChangesButton = document.getElementById('save-changes');

saveChangesButton.addEventListener('click', saveChanges);

function saveChanges() {
  const lawyerProfile = document.querySelector('.lawyer-profile');

  // Update lawyer's name
  const lawyerName = document.getElementById('lawyer-name');
  const lawyerNameInput = document.createElement('input');
  lawyerNameInput.type = 'text';
  lawyerNameInput.value = lawyerName.textContent;
  lawyerProfile.replaceChild(lawyerNameInput, lawyerName);

  // Update lawyer's title
  const lawyerTitle = document.getElementById('lawyer-title');
  const lawyerTitleInput = document.createElement('input');
  lawyerTitleInput.type = 'text';
  lawyerTitleInput.value = lawyerTitle.textContent;
  lawyerProfile.replaceChild(lawyerTitleInput, lawyerTitle);

  // Update practice areas
  const practiceAreas = document.getElementById('practice-areas');
  const practiceAreasInput = document.createElement('input');
  practiceAreasInput.type = 'text';
  practiceAreasInput.value = practiceAreas.textContent;
  lawyerProfile.replaceChild(practiceAreasInput, practiceAreas);

  // Update location
  const location = document.getElementById('location');
  const locationInput = document.createElement('input');
  locationInput.type = 'text';
  locationInput.value = location.textContent;
  lawyerProfile.replaceChild(locationInput, location);

  // Update phone
  const phone = document.getElementById('phone');
  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.value = phone.textContent;
  lawyerProfile.replaceChild(phoneInput, phone);

  // Update email
  const email = document.getElementById('email');
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.value = email.textContent;
  lawyerProfile.replaceChild(emailInput, email);

  // Update education
  const education = document.getElementById('education');
  const educationInputs = [];
  education.querySelectorAll('li').forEach((li) => {
    const educationInput = document.createElement('input');
    educationInput.type = 'text';
    educationInput.value = li.textContent;
    educationInputs.push(educationInput);
    li.replaceWith(educationInput);
  });

  // Update experience
  const experience = document.getElementById('experience');
  const experienceInputs = [];
  experience.querySelectorAll('li').forEach((li) => {
    const experienceInput = document.createElement('input');
    experienceInput.type = 'text';
    experienceInput.value = li.textContent;
    experienceInputs.push(experienceInput);
    li.replaceWith(experienceInput);
  });

  // Update skills
  const skills = document.getElementById('skills');
  const skillsInputs = [];
  skills.querySelectorAll('li').forEach((li) => {
    const skillsInput = document.createElement('input');
    skillsInput.type = 'text';
    skillsInput.value = li.textContent;
    skillsInputs.push(skillsInput);
    li.replaceWith(skillsInput);
  });

  // Update awards
  const awards = document.getElementById('awards');
  const awardsInputs = [];
  awards.querySelectorAll('li').forEach((li) => {
    const awardsInput = document.createElement('input');
    awardsInput.type = 'text';
    awardsInput.value = li.textContent;
    awardsInputs.push(awardsInput);
    li.replaceWith(awardsInput);
  });

  // Update contact info
  const contactInfo = document.getElementById('contact-info');
  const contactInfoInputs = [];
  contactInfo.querySelectorAll('li').forEach((li) => {
    const contactInfoInput = document.createElement('input');
    contactInfoInput.type = 'text';
    contactInfoInput.value = li.textContent;
    contactInfoInputs.push(contactInfoInput);
    li.replaceWith(contactInfoInput);
  });

  // Update office hours
  const officeHours = document.getElementById('office-hours');
  const officeHoursInputs = [];
  officeHours.querySelectorAll('li').forEach((li) => {
    const officeHoursInput = document.createElement('input');
    officeHoursInput.type = 'text';
    officeHoursInput.value = li.textContent;
    officeHoursInputs.push(officeHoursInput);
    li.replaceWith(officeHoursInput);
  });
}