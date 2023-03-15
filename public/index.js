console.log("Hello world!");
fetch('/api/patients')
  .then(async (response) => {
const patients = await response.json();
console.log('Patients', patients);

document.querySelector('#list').innerHTML = '';
    patients.forEach(patient => addToList(patient.first_name))
})

function addToList (text) {
  const newLi = document.createElement("li");
  newLi.textContent = text;
  let currentList = document.querySelector('#list')
  currentList.appendChild(newLi);
}