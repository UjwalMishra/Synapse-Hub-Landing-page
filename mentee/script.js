let mentorImg = document.querySelector(".mentor-img");
let mentorName = document.querySelector(".mentor-name");
let mentorDescription = document.querySelector(".mentor-description");
let mentorExpertise = document.querySelector(".mentor-expertise");
let mentorExperience = document.querySelector(".mentor-experience");
let mentorCompany = document.querySelector(".mentor-company");
let editProfilebtn = document.querySelector(".edit-profile");


//update mentor data from backend
function updateMentorData() {
    mentorImg.src ='./mentor-1.jpg';
    mentorName.textContent ="{name}";
    mentorDescription.textContent = "{description}"
    mentorExpertise.textContent = "{expertise}"
    mentorExperience.textContent = "{experience}"
    mentorCompany.textContent = "{company}"

    // link the registration form of mentee here so that he can make changes  
    editProfilebtn.href ="";
}

updateMentorData();