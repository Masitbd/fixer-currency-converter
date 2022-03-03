API_KEY = `2c0d8fc254ac9b1af029d615703a0581`;

const loadAll = () => {
  fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => Display(data.rates));
};

const Display = (records) => {
  //console.log(records);

  for (const [key, value] of Object.entries(records)) {
    //console.log(record);
    // console.log(`${key} -- ${value}`);
    loadRecord("lang1", key);
    loadRecord("lang2", key);
  }
};

const loadRecord = (id, key) => {
  const parent = document.getElementById(id);
  //console.log(parent);
  const option = document.createElement("option");
  //console.log(option);
  option.value = option.value;
  option.innerText = `${key}`;
  parent.appendChild(option);
};

const converter = () => {
  const fromValue = getValue("lang1");
  const toValue = getValue("lang2");
  const amount = document.getElementById("amount-field").value;
  console.log(typeof amount);
  const url = `http://data.fixer.io/api/convert?access_key=${API_KEY}&from=${
    fromValue.text
  }&to=${toValue.text}&amount=${parseInt(amount)}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

  //console.log(url);
};

const getValue = (id) => {
  const fieldId = document.getElementById(id);
  const value = fieldId.options[fieldId.selectedIndex];
  return value;
};

loadAll();
converter();
