let skillIdCounter = 1;
function addNewSkillSection() {
  //updateSkillCounter(skillIdCounter);
  skillIdCounter += 1;

  const mainLeftSection2 = document.querySelector("#skill__form");

  const skillHeader = document.createElement("h4");
  skillHeader.className = "skill-header";
  skillHeader.id = `skill-header${skillIdCounter}`;
  skillHeader.innerHTML = `Skill ${skillIdCounter}`;
  mainLeftSection2.appendChild(skillHeader);

  const labelSkill = document.createElement("label");
  labelSkill.setAttribute("for", `input-skill-name${skillIdCounter}`);
  labelSkill.id = `label-skill-name${skillIdCounter}`;
  const labelText = (document.createTextNode = "Enter your skill:");
  labelSkill.innerHTML = labelText;
  mainLeftSection2.appendChild(labelSkill);

  const inputSkill = document.createElement("input");
  inputSkill.setAttribute("type", "text");
  inputSkill.id = `input-skill-name${skillIdCounter}`;
  inputSkill.className = "input-skill-style";
  inputSkill.name = `inputSkillName${skillIdCounter}`;
  inputSkill.setAttribute("value", "");
  inputSkill.setAttribute(
    "placeholder",
    "type your skill(Any programming language you know"
  );
  mainLeftSection2.appendChild(inputSkill);

  addSkillToOutput(skillIdCounter);
}

function removeLastSkillSection() {
  const labelSkill = document.getElementById(
    `label-skill-name${skillIdCounter}`
  );
  labelSkill.remove();

  const inputSkill = document.getElementById(
    `input-skill-name${skillIdCounter}`
  );
  inputSkill.remove();

  const skillHeader = document.getElementById(`skill-header${skillIdCounter}`);
  skillHeader.remove();

  removeSkillToOutput(skillIdCounter);
  if (skillIdCounter !== 0) {
    skillIdCounter -= 1;
    //console.log(`remove function ${skillIdCounter}`);
  }
}

let projectIdCounter = 1;
function addNewProjectSection() {
  projectIdCounter += 1;
  const mainRightSection2 = document.querySelector("#project__form");

  const projectHeader = document.createElement("h4");
  projectHeader.id = `project-header${projectIdCounter}`;
  projectHeader.className = "project-header";
  projectHeader.innerHTML = `Project ${projectIdCounter}`;
  mainRightSection2.appendChild(projectHeader);

  const labelProjectName = document.createElement("label");
  const labelProjectNameText = (document.createTextNode =
    "Enter your project name:");
  labelProjectName.innerHTML = labelProjectNameText;
  labelProjectName.setAttribute("for", `input-project-name${projectIdCounter}`);
  labelProjectName.id = `label-project-name${projectIdCounter}`;
  mainRightSection2.appendChild(labelProjectName);

  const inputProjectName = document.createElement("input");
  inputProjectName.setAttribute("type", "text");
  inputProjectName.id = `input-project-name${projectIdCounter}`;
  inputProjectName.className = "input-project-style";
  inputProjectName.name = `inputProjectName${projectIdCounter}`;
  inputProjectName.setAttribute("placeholder", "type your project name");
  mainRightSection2.appendChild(inputProjectName);

  const labelProjectTechnology = document.createElement("label");
  const labelProjectTechnologyText = (document.createTextNode =
    "Enter technologies used in your project:");
  labelProjectTechnology.innerHTML = labelProjectTechnologyText;
  labelProjectTechnology.id = `label-project-technology${projectIdCounter}`;
  labelProjectTechnology.setAttribute(
    "for",
    `input-project-technology${projectIdCounter}`
  );
  mainRightSection2.appendChild(labelProjectTechnology);

  const inputProjectTechnology = document.createElement("input");
  inputProjectTechnology.setAttribute("type", "text");
  inputProjectTechnology.id = `input-project-technology${projectIdCounter}`;
  inputProjectTechnology.className = "input-project-style";
  inputProjectTechnology.name = `inputProjectTechnology${projectIdCounter}`;
  inputProjectTechnology.setAttribute(
    "placeholder",
    "type technologies used in your project(ex: Java, HTML)"
  );
  mainRightSection2.appendChild(inputProjectTechnology);

  const labelProjectDescription = document.createElement("label");
  const labelProjectDescriptionText = (document.createTextNode =
    "Enter description of your project:");
  labelProjectDescription.innerHTML = labelProjectDescriptionText;
  labelProjectDescription.id = `label-project-description${projectIdCounter}`;
  labelProjectDescription.setAttribute(
    "for",
    `input-project-description${projectIdCounter}`
  );
  mainRightSection2.appendChild(labelProjectDescription);

  const inputProjectDescription = document.createElement("input");
  inputProjectDescription.setAttribute("type", "text");
  inputProjectDescription.id = `input-project-description${projectIdCounter}`;
  inputProjectDescription.style.width = "100%";
  inputProjectDescription.className = "input-project-style";
  inputProjectDescription.name = `inputProjectDescription${projectIdCounter}`;
  inputProjectDescription.setAttribute(
    "placeholder",
    "type description of your project in brief"
  );
  mainRightSection2.appendChild(inputProjectDescription);

  addProjectToOutput(projectIdCounter);
}

function removeLastProjectSection() {
  document.getElementById(`project-header${projectIdCounter}`).remove();
  document.getElementById(`label-project-name${projectIdCounter}`).remove();
  document.getElementById(`input-project-name${projectIdCounter}`).remove();
  document
    .getElementById(`label-project-technology${projectIdCounter}`)
    .remove();
  document
    .getElementById(`input-project-technology${projectIdCounter}`)
    .remove();
  document
    .getElementById(`label-project-description${projectIdCounter}`)
    .remove();
  document
    .getElementById(`input-project-description${projectIdCounter}`)
    .remove();
  removeProjectToOutput(projectIdCounter);
  if (projectIdCounter !== 0) {
    projectIdCounter -= 1;
  }
}
let degreeIdCounter = 1;
function addNewDegreeSection() {
  degreeIdCounter += 1;

  const mainRightSection = document.querySelector("#degree__form");
  const degreeHeader = document.createElement("h4");
  degreeHeader.className = "degree-header";
  degreeHeader.id = `degree-header${degreeIdCounter}`;
  degreeHeader.innerHTML = `Degree ${degreeIdCounter}`;
  mainRightSection.appendChild(degreeHeader);

  const labelDegreeName = document.createElement("label");
  labelDegreeName.innerHTML = "Enter Your Degree Name:";
  labelDegreeName.id = `label-degree-name${degreeIdCounter}`;
  labelDegreeName.setAttribute("for", `input-degree-name${degreeIdCounter}`);
  mainRightSection.appendChild(labelDegreeName);

  const inputDegreeName = document.createElement("input");
  inputDegreeName.setAttribute("type", "text");
  inputDegreeName.id = `input-degree-name${degreeIdCounter}`;
  inputDegreeName.className = "input-degree-style";
  inputDegreeName.name = `inputDegreeName${degreeIdCounter}`;
  inputDegreeName.setAttribute("placeholder", "Type your degree name here");
  mainRightSection.appendChild(inputDegreeName);

  const labelDegreeCollege = document.createElement("label");
  labelDegreeCollege.innerHTML = "Enter Your College Name/University Name:";
  labelDegreeCollege.id = `label-degree-college${degreeIdCounter}`;
  labelDegreeCollege.setAttribute(
    "for",
    `input-degree-college${degreeIdCounter}`
  );
  mainRightSection.appendChild(labelDegreeCollege);

  const inputDegreeCollege = document.createElement("input");
  inputDegreeCollege.setAttribute("type", "text");
  inputDegreeCollege.id = `input-degree-college${degreeIdCounter}`;
  inputDegreeCollege.className = "input-degree-style";
  inputDegreeCollege.name = `inputDegreeCollege${degreeIdCounter}`;
  inputDegreeCollege.setAttribute(
    "placeholder",
    "Type your college name and /university name here"
  );
  mainRightSection.appendChild(inputDegreeCollege);

  const labelDegreeMarks = document.createElement("label");
  labelDegreeMarks.innerHTML = "Enter Your Marks(in %):";
  labelDegreeMarks.id = `label-degree-marks${degreeIdCounter}`;
  labelDegreeMarks.setAttribute("for", `input-degree-marks${degreeIdCounter}`);
  mainRightSection.appendChild(labelDegreeMarks);

  const inputDegreeMarks = document.createElement("input");
  inputDegreeMarks.setAttribute("type", "text");
  inputDegreeMarks.id = `input-degree-marks${degreeIdCounter}`;
  inputDegreeMarks.className = "input-degree-style";
  inputDegreeMarks.name = `inputDegreeMarks${degreeIdCounter}`;
  inputDegreeMarks.setAttribute(
    "placeholder",
    "Type your marks here with percentage symbol"
  );
  mainRightSection.appendChild(inputDegreeMarks);

  const labelDegreeYear = document.createElement("label");
  labelDegreeYear.innerHTML = "Enter Your Degree Year:";
  labelDegreeYear.id = `label-degree-year${degreeIdCounter}`;
  labelDegreeYear.setAttribute("for", `input-degree-year${degreeIdCounter}`);
  mainRightSection.appendChild(labelDegreeYear);

  const inputDegreeYear = document.createElement("input");
  inputDegreeYear.setAttribute("type", "text");
  inputDegreeYear.id = `input-degree-year${degreeIdCounter}`;
  inputDegreeYear.className = "input-degree-style";
  inputDegreeYear.name = `inputDegreeYear${degreeIdCounter}`;
  inputDegreeYear.setAttribute(
    "placeholder",
    "Type your degree year here(ex: 2018-2021)"
  );
  mainRightSection.appendChild(inputDegreeYear);

  addDegreeToOutput(degreeIdCounter);
}

function removeLastDegreeSection() {
  document.getElementById(`degree-header${degreeIdCounter}`).remove();
  document.getElementById(`label-degree-name${degreeIdCounter}`).remove();
  document.getElementById(`input-degree-name${degreeIdCounter}`).remove();
  document.getElementById(`label-degree-college${degreeIdCounter}`).remove();
  document.getElementById(`input-degree-college${degreeIdCounter}`).remove();
  document.getElementById(`label-degree-marks${degreeIdCounter}`).remove();
  document.getElementById(`input-degree-marks${degreeIdCounter}`).remove();
  document.getElementById(`label-degree-year${degreeIdCounter}`).remove();
  document.getElementById(`input-degree-year${degreeIdCounter}`).remove();

  removeDegreeToOutput(degreeIdCounter);
  if (degreeIdCounter !== 0) {
    degreeIdCounter -= 1;
  }
}

const displayProfilePicture = () => {
  const profileUploader = document.getElementById("profile-uploader");
  const profilePreview = document.getElementById("profile-preview");

  const profilePreview2 = document.getElementById("profile-preview2");
  if (profileUploader.files.length > 0) {
    profilePreview.style.display = "block";
    const urlOfPicture = URL.createObjectURL(profileUploader.files[0]);
    profilePreview.src = urlOfPicture;

    const urlOfPicture2 = URL.createObjectURL(profileUploader.files[0]);
    profilePreview2.src = urlOfPicture2;
  } else {
    alert("You have not selected any image!");
    profilePreview.style.display = "none";
  }
};

let awardIdCounter = 1;
const addNewAwardSection = () => {
  awardIdCounter += 1;
  //console.log(`add function ${skillIdCounter}`);
  const mainLeftSection3 = document.querySelector("#award__form");

  const awardHeader = document.createElement("h4");
  awardHeader.className = "award-header";
  awardHeader.id = `award-header${awardIdCounter}`;
  awardHeader.innerHTML = `Award ${awardIdCounter}`;
  mainLeftSection3.appendChild(awardHeader);

  const awardLabel = document.createElement("label");
  awardLabel.setAttribute("for", `input-award-name${awardIdCounter}`);
  awardLabel.id = `label-award-name${awardIdCounter}`;
  const labelText = (document.createTextNode = "Enter your award:");
  awardLabel.innerHTML = labelText;
  mainLeftSection3.appendChild(awardLabel);

  const inputAward = document.createElement("input");
  inputAward.setAttribute("type", "text");
  inputAward.id = `input-award-name${awardIdCounter}`;
  inputAward.className = "input-award-style";
  inputAward.name = `inputAwardName${awardIdCounter}`;
  inputAward.style.width = "100%";
  inputAward.setAttribute("placeholder", "type your winnings,certificates");
  mainLeftSection3.appendChild(inputAward);

  addAwardsToOutput(awardIdCounter);
};

const removeLastAwardSection = () => {
  const labelAward = document.getElementById(
    `label-award-name${awardIdCounter}`
  );
  labelAward.remove();

  const inputAward = document.getElementById(
    `input-award-name${awardIdCounter}`
  );
  inputAward.remove();

  const AwardHeader = document.getElementById(`award-header${awardIdCounter}`);
  AwardHeader.remove();

  removeAwardsToOutput(awardIdCounter);
  if (awardIdCounter !== 0) {
    awardIdCounter -= 1;
    //console.log(`remove function ${AwardIdCounter}`);
  }
};

const addSkillToOutput = (skillid) => {
  const skillList = document.getElementById("skillList");

  const skillName = document.createElement("li");
  skillName.innerHTML = skillid;
  skillName.id = `skill${skillid}`;

  skillList.appendChild(skillName);
};
function removeSkillToOutput(skillIdCounter) {
  document.getElementById(`skill${skillIdCounter}`).remove();
}
const addDegreeToOutput = (degreeId) => {
  const educationDiv = document.getElementById("education");
  const degreeList = document.createElement("ul");
  degreeList.id = `degree-list${degreeId}`;

  const degreeName = document.createElement("li");
  const degreeYear = document.createElement("li");
  const degreeCollege = document.createElement("li");
  const degreeMarks = document.createElement("li");

  degreeName.id = `degree-name${degreeId}`;
  degreeYear.id = `degree-year${degreeId}`;
  degreeCollege.id = `degree-college${degreeId}`;
  degreeMarks.id = `degree-marks${degreeId}`;

  degreeName.innerHTML = degreeId;
  degreeYear.innerHTML = degreeId;
  degreeCollege.innerHTML = degreeId;
  degreeMarks.innerHTML = degreeId;

  const degreeHeader = document.createElement("h4");
  degreeHeader.id = `degree-heading${degreeId}`;
  degreeHeader.className = "degree-heading";
  degreeHeader.innerHTML = `Degree ${degreeId}`;

  degreeList.appendChild(degreeHeader);
  degreeList.appendChild(degreeName);
  degreeList.appendChild(degreeYear);
  degreeList.appendChild(degreeCollege);
  degreeList.appendChild(degreeMarks);

  educationDiv.appendChild(degreeList);
};

const removeDegreeToOutput = (degreeIdCounter) => {
  document.getElementById(`degree-heading${degreeIdCounter}`).remove();
  document.getElementById(`degree-name${degreeIdCounter}`).remove();
  document.getElementById(`degree-year${degreeIdCounter}`).remove();
  document.getElementById(`degree-college${degreeIdCounter}`).remove();
  document.getElementById(`degree-marks${degreeIdCounter}`).remove();
};

const addProjectToOutput = (projectId) => {
  const projectDiv = document.getElementById("projects");
  const projectList = document.createElement("ul");
  projectList.id = `project-list${projectId}`;

  const projectName = document.createElement("li");
  const projectTechnology = document.createElement("li");
  const projectDescription = document.createElement("li");

  projectName.id = `project-name${projectId}`;
  projectTechnology.id = `project-technology${projectId}`;
  projectDescription.id = `project-description${projectId}`;

  projectName.innerHTML = projectId;
  projectTechnology.innerHTML = projectId;
  projectDescription.innerHTML = projectId;

  const projectHeader = document.createElement("h4");
  projectHeader.id = `project-heading${projectId}`;
  projectHeader.className = "project-heading";
  projectHeader.innerHTML = `Project ${projectId}`;

  projectList.appendChild(projectHeader);
  projectList.appendChild(projectName);
  projectList.appendChild(projectTechnology);
  projectList.appendChild(projectDescription);

  projectDiv.appendChild(projectList);
};

const removeProjectToOutput = (projectIdCounter) => {
  document.getElementById(`project-name${projectIdCounter}`).remove();
  document.getElementById(`project-technology${projectIdCounter}`).remove();
  document.getElementById(`project-description${projectIdCounter}`).remove();
  document.getElementById(`project-heading${projectIdCounter}`).remove();
};

const addAwardsToOutput = (awardId) => {
  const awardList = document.getElementById("award-list");
  const awardName = document.createElement("li");
  awardName.id = `award${awardId}`;
  awardName.innerHTML = awardId;
  awardList.appendChild(awardName);
};

const removeAwardsToOutput = (awardIdCounter) => {
  document.getElementById(`award${awardIdCounter}`).remove();
};

function transferSkillValues() {
  const skillParent = document.getElementById("main-left-section2");
  const skillChildrens = skillParent.querySelectorAll("input");

  const skills = document.getElementById("skills");
  const skillChildrens2 = skills.querySelectorAll("li");

  let flag_s = "false";
  skillChildrens.forEach((item, index) => {
    if (item.value == "") {
      flag_s = "true";
    } else {
      skillChildrens2[index].innerHTML = item.value;
    }
  });
  return flag_s;
}

function transferDegreeValues() {
  const degreeParent = document.getElementById("main-right-section");
  const degreeChildrens = degreeParent.querySelectorAll("input");

  const education = document.getElementById("education");
  const educationChildrens = education.querySelectorAll("li");

  let flag_d = "false";
  degreeChildrens.forEach((item, index) => {
    if (item.value == "") {
      //alert("Fill all the degree information!...");
      flag_d = "true";
    } else {
      educationChildrens[index].innerHTML = item.value;
    }
  });
  return flag_d;
}

function transferProjectValues() {
  const projectParent = document.querySelector(".main-right-section-2");
  const projectChildrens = projectParent.querySelectorAll("input");

  const projectParent2 = document.getElementById("projects");
  const projectChildrens2 = projectParent2.querySelectorAll("li");

  let flag_p = "false";
  projectChildrens.forEach((item, index) => {
    if (item.value == "") {
      //alert("Fill all the project information!...");
      flag_p = "true";
    } else {
      projectChildrens2[index].innerHTML = item.value;
    }
  });
  return flag_p;
}

function transferAwardValues() {
  const awardParent = document.querySelector(".main-left-section-3");
  const awardChildrens = awardParent.querySelectorAll("input");

  const award = document.getElementById("award");
  const awardChildrens2 = award.querySelectorAll("li");

  let flag_a = "false";
  awardChildrens.forEach((item, index) => {
    if (item.value == "") {
      //alert("Fill all the award information!...");
      flag_a = "true";
    } else {
      awardChildrens2[index].innerHTML = item.value;
    }
  });
  return flag_a;
}

function transferPersonalValues() {
  document.getElementById("objective2").innerHTML =
    document.getElementById("objective").value;
  document.getElementById("name2").innerHTML =
    document.getElementById("name").value;
  document.getElementById("email2").innerHTML =
    document.getElementById("email").value;
  document.getElementById("phone2").innerHTML =
    document.getElementById("phone").value;
  document.getElementById("address2").innerHTML =
    document.getElementById("address").value;
  document.getElementById("dob2").innerHTML =
    document.getElementById("dob").value;
  document.getElementById("marital2").innerHTML =
    document.getElementById("marital").value;

  const selectedOption =
    document.getElementById("gender").options[
      document.getElementById("gender").selectedIndex
    ].text;
  document.getElementById("gender2").innerHTML = selectedOption;
  document.getElementById("nationality2").innerHTML =
    document.getElementById("nationality").value;
  document.getElementById("language2").innerHTML =
    document.getElementById("language").value;
}

function transferValuesHandler() {
  const flag_s = transferSkillValues();
  const flag_d = transferDegreeValues();
  const flag_p = transferProjectValues();
  const flag_a = transferAwardValues();
  transferPersonalValues();
  submitPersonalForm();

  if (flag_d === "true") {
    modalMsg.innerHTML = "Fill all degree information...";
    btnCloseModal.style.backgroundColor = "#dc3545";
    openModal();
  } else if (flag_s === "true") {
    modalMsg.innerHTML = "Fill all skill information...";
    btnCloseModal.style.backgroundColor = "#dc3545";
    openModal();
  } else if (flag_p === "true") {
    modalMsg.innerHTML = "Fill all project information...";
    btnCloseModal.style.backgroundColor = "#dc3545";
    openModal();
  } else if (flag_a === "true") {
    modalMsg.innerHTML = "Fill all award information...";
    btnCloseModal.style.backgroundColor = "#dc3545";
    openModal();
  } else {
    modalMsg.innerHTML = "Your resume is created...&#128522;";
    const modalContent = document.querySelector(".modal-content");
    modalContent.style.backgroundColor = "#d4edda";
    modalContent.style.borderColor = "green";
    modalContent.style.color = "#155724";
    btnCloseModal.style.backgroundColor = "#155724";
    openModal();

    document.getElementById("areaToHide").style.display = "none";
    const resumeArea = document.getElementById("outer-cont");
    resumeArea.style.display = "block";
    const btnDownload = document.getElementById("btn-download");
    btnDownload.style.display = "block";

    const targetElement = document.getElementById("outer-cont");
    targetElement.scrollIntoView({
      behavior: "instant",
      block: "start",
      inline: "nearest",
    });
  }
}
const btnNext = document.getElementById("btn-next");
btnNext.addEventListener("click", transferValuesHandler);

const printResume = () => {
  const areaToHide = document.getElementById("areaToHide");
  const btnDownload = document.getElementById("btn-download");
  const menu = document.getElementById("menu");
  const themeCont = document.getElementById("theme-cont");
  const themeLabel = document.getElementById("theme-label");
  themeLabel.style.display = "none";
  menu.style.display = "none";
  areaToHide.style.display = "none";
  btnDownload.style.display = "none";
  themeCont.style.display = "none";
  document.getElementById("areaToPrint").style.margin = 0;
  window.print();

  window.location.href = "homePage.html";
  menu.scrollIntoView({
    behavior: "instant",
    block: "start",
    inline: "nearest",
  });
};

document.querySelector(".btn-download").addEventListener("click", () => {
  printResume();
});

const showCreateResume = () => {
  const showCreateResume = document.getElementById("areaToHide");
  showCreateResume.style.display = "block";
};

const selectDefault = () => {
  document.querySelector(".left-cont").style.backgroundColor = "#335353";
  document.querySelector(".name-area").style.backgroundColor = "#335353";
  document.querySelector(".name-area").style.color = "black";
  const heading = document.querySelectorAll(".heading");
  heading.forEach((item) => {
    item.style.backgroundColor = "#0d1111";
  });
};
const selectTheme1 = () => {
  document.querySelector(".left-cont").style.backgroundColor = "#1d7a1d";
  document.querySelector(".name-area").style.backgroundColor = "#1d7a1d";
  document.querySelector(".name-area").style.color = "black";
  const heading = document.querySelectorAll(".heading");
  heading.forEach((item) => {
    item.style.backgroundColor = "#0f510f";
  });
};
const selectTheme2 = () => {
  document.querySelector(".left-cont").style.backgroundColor = "#b35900";
  document.querySelector(".name-area").style.backgroundColor = "#b35900";
  document.querySelector(".name-area").style.color = "black";
  const heading = document.querySelectorAll(".heading");
  heading.forEach((item) => {
    item.style.backgroundColor = "#663300";
  });
};
const selectTheme3 = () => {
  document.querySelector(".left-cont").style.backgroundColor = "#8533ff";
  document.querySelector(".name-area").style.backgroundColor = "#8533ff";
  document.querySelector(".name-area").style.color = "black";
  const heading = document.querySelectorAll(".heading");
  heading.forEach((item) => {
    item.style.backgroundColor = "#4f13a8";
  });
};
const selectTheme4 = () => {
  document.querySelector(".left-cont").style.backgroundColor = "#0eb5da";
  document.querySelector(".name-area").style.backgroundColor = "#0eb5da";
  document.querySelector(".name-area").style.color = "black";
  const heading = document.querySelectorAll(".heading");
  heading.forEach((item) => {
    item.style.backgroundColor = "#083144";
  });
};
const selectTheme5 = () => {
  document.querySelector(".left-cont").style.backgroundColor = "#2d27dd";
  document.querySelector(".name-area").style.backgroundColor = "#2d27dd";
  document.querySelector(".name-area").style.color = "black";
  const heading = document.querySelectorAll(".heading");
  heading.forEach((item) => {
    item.style.backgroundColor = "#0b14c4";
  });
};

const submitPersonalForm = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let marital = document.getElementById("marital").value;
  let nationality = document.getElementById("nationality").value;
  let language = document.getElementById("language").value;

  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !dob ||
    !marital ||
    !nationality ||
    !language
  ) {
    modalMsg.innerHTML = "Fill all personal information...";
    openModal();
    return;
  }

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/submit", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("Information saved successfully...");
      } else {
        alert("Error saving information...");
      }
    }
  };

  var personalData = JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    address: address,
    dob: dob,
    marital: marital,
    nationality: nationality,
    language: language,
  });

  xhr.send(personalData);

  //document.getElementById("personal__form").reset();
};

//modal code starts here
const modal = document.getElementById("myModal");
const btnCloseModal = document.getElementById("okButton");
const modalMsg = document.getElementById("modalMsg");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

//btnNext.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

//side menu and logo code
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("hamburgerMenu");
const closeBtn = document.getElementById("closeBtn");

// Function to open sidebar
function openSidebar() {
  sidebar.style.left = "0";
}

// Function to close sidebar
function closeSidebar() {
  sidebar.style.left = "-250px";
}

// Event listeners
openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
