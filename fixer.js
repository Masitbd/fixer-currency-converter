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
  const fromValue = document.getElementById("lang1");
  var value = fromValue.options[fromValue.selectedIndex];
  console.log(value.text);
  console.log(fromValue);
  const url = `http://data.fixer.io/api/convert
  ? access_key = ${API_KEY}
  & from = ${value.text}
  & to = ${value.text}
  & amount = 25`;

  console.log(url);
};

loadAll();
converter();
