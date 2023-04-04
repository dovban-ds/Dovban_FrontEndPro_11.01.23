const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const form = document.createElement("form");
form.classList.add("form");
container.append(form);

const fullNameLabel = document.createElement("label");
const fullName = document.createElement("input");
const contName = document.createElement("div");

fullNameLabel.setAttribute("for", "fullname");
fullNameLabel.classList.add("label");
fullNameLabel.textContent = "Fullname:";
fullName.setAttribute("id", "fullname");
fullName.setAttribute("placeholder", "Name Surname");
fullName.setAttribute("required", "");

form.append(contName);
contName.append(fullNameLabel);
contName.append(fullName);

const birthLabel = document.createElement("label");
const birth = document.createElement("input");
const contBirth = document.createElement("div");

contBirth.classList.add("sizes");
birthLabel.setAttribute("for", "birth");
birthLabel.classList.add("label");
birthLabel.textContent = "Birth date:";
birth.setAttribute("id", "birth");
birth.setAttribute("placeholder", "d.m.y format");
birth.setAttribute("required", "");

form.append(contBirth);
contBirth.append(birthLabel);
contBirth.append(birth);

const sexLabel1 = document.createElement("label");
const sexLabel2 = document.createElement("label");
const sex1 = document.createElement("input");
const sex2 = document.createElement("input");
const contSex = document.createElement("div");

sexLabel1.setAttribute("for", "male");
sexLabel2.setAttribute("for", "female");
sexLabel1.textContent = "Male";
sexLabel2.textContent = "Female";
sex1.setAttribute("value", "male");
sex1.style.marginRight = "72px";
sex1.setAttribute("type", "radio");
sex2.setAttribute("value", "female");
sex2.setAttribute("type", "radio");
sex1.setAttribute("name", "gender");
sex2.setAttribute("name", "gender");

form.append(contSex);
contSex.append(sexLabel1, sex1, sexLabel2, sex2);

const cityLabel = document.createElement("label");
const city = document.createElement("select");
const empty = document.createElement("option");
const city1 = document.createElement("option");
const city2 = document.createElement("option");
const city3 = document.createElement("option");
const contCity = document.createElement("div");

cityLabel.setAttribute("for", "city");
cityLabel.textContent = "Your city: ";
cityLabel.classList.add("label");
city.setAttribute("id", "city");
city.setAttribute("required", "");
empty.setAttribute("value", "");
empty.style.display = "none";
city1.setAttribute("value", "Dnipro");
city1.textContent = "Dnipro";
city2.setAttribute("value", "Kyiv");
city2.textContent = "Kyiv";
city3.setAttribute("value", "Ternopil");
city3.textContent = "Ternopil";

form.append(contCity);
contCity.append(cityLabel, city);
city.append(empty, city1, city2, city3);
contCity.classList.add("sizes");

const addressLabel = document.createElement("label");
const address = document.createElement("textarea");
const contAddress = document.createElement("div");

addressLabel.setAttribute("for", "address");
addressLabel.textContent = "Personal address: ";
addressLabel.classList.add("label");
address.setAttribute("id", "address");
address.setAttribute("cols", "35");
address.setAttribute("rows", "2");
address.style.resize = "none";
contAddress.style.display = "flex";

form.append(contAddress);
contAddress.append(addressLabel, address);

const language1 = document.createElement("input");
const language2 = document.createElement("input");
const language3 = document.createElement("input");
const language4 = document.createElement("input");
const contLanguage = document.createElement("div");

language1.setAttribute("value", "english");
language1.setAttribute("name", "lang");
language1.setAttribute("type", "checkbox");
language2.setAttribute("value", "spanish");
language2.setAttribute("name", "lang");
language2.setAttribute("type", "checkbox");
language3.setAttribute("value", "polish");
language3.setAttribute("name", "lang");
language3.setAttribute("type", "checkbox");
language4.setAttribute("value", "german");
language4.setAttribute("name", "lang");
language4.setAttribute("type", "checkbox");

contLanguage.classList.add("sizes");
contLanguage.style.display = "flex";
contLanguage.style.alignItems = "center";

const languageLabel1 = document.createElement("label");
languageLabel1.setAttribute("for", "lang");
languageLabel1.textContent = "English";
const languageLabel2 = document.createElement("label");
languageLabel2.setAttribute("for", "lang");
languageLabel2.textContent = "Spanish";
const languageLabel3 = document.createElement("label");
languageLabel3.setAttribute("for", "lang");
languageLabel3.textContent = "Polish";
const languageLabel4 = document.createElement("label");
languageLabel4.setAttribute("for", "lang");
languageLabel4.textContent = "German";

form.append(contLanguage);
contLanguage.append(
  languageLabel1,
  language1,
  languageLabel2,
  language2,
  languageLabel3,
  language3,
  languageLabel4,
  language4
);

const submitBtn = document.createElement("input");

submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Save");

form.append(submitBtn);

const tableCont = document.createElement("div");
const table = document.createElement("table");
const tr1 = document.createElement("tr");
const th1 = document.createElement("th");
const td1 = document.createElement("td");

const tr2 = document.createElement("tr");
const th2 = document.createElement("th");
const td2 = document.createElement("td");

const tr3 = document.createElement("tr");
const th3 = document.createElement("th");
const td3 = document.createElement("td");

const tr4 = document.createElement("tr");
const th4 = document.createElement("th");
const td4 = document.createElement("td");

const tr5 = document.createElement("tr");
const th5 = document.createElement("th");
const td5 = document.createElement("td");

const tr6 = document.createElement("tr");
const th6 = document.createElement("th");
const td6 = document.createElement("td");

table.classList.add("table");

tableCont.classList.add("modal");
document.body.prepend(tableCont);
tableCont.append(table);
table.append(tr1);
tr1.append(th1, td1);

table.append(tr2);
tr2.append(th2, td2);

table.append(tr3);
tr3.append(th3, td3);

table.append(tr4);
tr4.append(th4, td4);

table.append(tr5);
tr5.append(th5, td5);

table.append(tr6);
tr6.append(th6, td6);

function handler(submit) {
  th1.textContent = "Fullname";
  td1.textContent = fullName.value;

  const dateStr = birth.value;
  const arr = dateStr.split(".");
  if (arr.length > 3 || arr.length < 3) {
    submit.preventDefault();
    alert("Input correct value in dd.mm.yy format!");
    return;
  } else if (
    arr[0].length !== 2 ||
    arr[1].length !== 2 ||
    arr[0] > 31 ||
    arr[1] > 12 ||
    arr[0] < 1 ||
    arr[1] < 1
  ) {
    submit.preventDefault();
    alert("Input correct value in dd.mm.yy format!");
    return;
  } else if (
    arr[2].length !== 4 ||
    arr[2] > new Date().getFullYear() ||
    arr[2] < 1940
  ) {
    submit.preventDefault();
    alert("Input correct value in dd.mm.yy format!");
    return;
  }
  const birthDate = new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  th2.textContent = "Age";
  td2.textContent = age;

  th3.textContent = "Gender";
  const selectedSex = document.querySelector('input[name="gender"]:checked');
  if (selectedSex === null) {
    submit.preventDefault();
    alert("No gender selected!");
    return;
  } else {
    td3.textContent = selectedSex.value;
  }

  if (city.value === "") {
    submit.preventDefault();
    alert("Choose the city!");
    return;
  } else {
    td4.textContent = city.value;
    th4.textContent = "City";
  }

  if (address.value.length === 0) {
    submit.preventDefault();
    alert("Input correct address!");
    return;
  } else {
    th5.textContent = "Personal address";
    td5.textContent = address.value;
  }

  const checkboxes = document.querySelectorAll('input[name="lang"]');
  let checkedValues = "";
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValues += checkbox.value + ", ";
    }
  });
  td6.textContent = checkedValues;

  submit.preventDefault();
  th6.textContent = "Languages";
  tableCont.style.display = "flex";
  tableCont.addEventListener("click", (event) => {
    if (event.target !== tableCont) return;
    tableCont.style.display = "none";
  });
}

submitBtn.addEventListener("click", handler);
