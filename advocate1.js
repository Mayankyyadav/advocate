// advocate.js

const lawyerName = document.getElementById('lawyer-name');
const lawyerTitle = document.getElementById('lawyer-title');
const practiceAreas = document.getElementById('practice-areas');
const location = document.getElementById('location');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

const education = document.getElementById('education');
const experience = document.getElementById('experience');
const skills = document.getElementById('skills');
const awards = document.getElementById('awards');

const contactInfo = document.getElementById('contact-info');
const officeHours = document.getElementById('office-hours');

const saveChangesButton = document.getElementById('save-changes');

saveChangesButton.addEventListener('click', saveChanges);

function saveChanges() {
  const lawyerNameInput = document.getElementById("lawyer-name-input").value;
  const lawyerTitleInput = document.getElementById("lawyer-title-input").value;
  const practiceAreasInput = document.getElementById("practice-areas-input").value;
  const locationInput = document.getElementById("location-input").value;
  const phoneInput = document.getElementById("phone-input").value;
  const emailInput = document.getElementById("email-input").value;

  const educationInputs = Array.from(education.getElementsByTagName("input")).map(input => input.value);
  const experienceInputs = Array.from(experience.getElementsByTagName("input")).map(input => input.value);
  const skillsInputs = Array.from(skills.getElementsByTagName("input")).map(input => input.value);
  const awardsInputs = Array.from(awards.getElementsByTagName("input")).map(input => input.value);

  const contactInfoInputs = Array.from(contactInfo.getElementsByTagName("input")).map(input => input.value);
  const officeHoursInputs = Array.from(officeHours.getElementsByTagName("input")).map(input => input.value);

  lawyerName.textContent = lawyerNameInput;
  lawyerTitle.textContent = lawyerTitleInput;
  practiceAreas.textContent = practiceAreasInput;
  location.textContent = locationInput;
  phone.textContent = phoneInput;
  email.textContent = emailInput;

  education.textContent = educationInputs.join(", ");
  experience.textContent = experienceInputs.join(", ");
  skills.textContent = skillsInputs.join(", ");
  awards.textContent = awardsInputs.join(", ");

  contactInfo.textContent = contactInfoInputs.join(", ");
  officeHours.textContent = officeHoursInputs.join(", ");

  const data = {
    lawyerName: lawyerNameInput,
    lawyerTitle: lawyerTitleInput,
    practiceAreas: practiceAreasInput,
    location: locationInput,
    phone: phoneInput,
    email: emailInput,
    education: educationInputs,
    experience: experienceInputs,
    skills: skillsInputs,
    awards: awardsInputs,
    contactInfo: contactInfoInputs,
    officeHours: officeHoursInputs
  };

  // console.log(data);
  localStorage.setItem("advocateData", JSON.stringify(data));
  console.log(localStorage.data);
}