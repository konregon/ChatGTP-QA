// Define list of pre-defined skills
const skillsList = [
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "React",
  "Angular",
  "Vue",
];

// Get select element and create datalist element
const select = document.getElementById("skills");
const datalist = document.createElement("datalist");
datalist.id = "skills-list";

// Add options to datalist
skillsList.forEach((skill) => {
  const option = document.createElement("option");
  option.value = skill;
  datalist.appendChild(option);
});

// Add datalist to select element
select.appendChild(datalist);

// Add event listener to input element to dynamically add new options
const input = document.getElementById("new-skill");
input.addEventListener("change", (event) => {
  const value = event.target.value.trim();

  if (value !== "") {
    // Check if option already exists in select element
    const options = select.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value.toLowerCase() === value.toLowerCase()) {
        return; // Option already exists, do nothing
      }
    }

    // Create new option and add to select element and datalist
    const option = document.createElement("option");
    option.value = value;
    select.appendChild(option);

    const datalistOption = document.createElement("option");
    datalistOption.value = value;
    datalist.appendChild(datalistOption);
  }
});
