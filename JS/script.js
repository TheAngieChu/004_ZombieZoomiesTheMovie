const people = [
  { name: "Claire-Delune Caelum", age: 21, gender: "actress", hometown: "Verdanturf Town" },
  { name: "Shoto Caelum", age: 24, gender: "actor", hometown: "Sootopolis City" },
  { name: "Missie Smuskiewicz", age: 47, gender: "actress", hometown: "Fortree City" },
  { name: "Marik Smuskiewicz", age: 48, gender: "actor", hometown: "Fortree City" },
  { name: "Alister Niccals", age: 40, gender: "actor", hometown: "Littleroot Town" },
  { name: "Joey Mandrakis", age: 36, gender: "actor", hometown: "Slateport City" },
  { name: "Ray Cantanta", age: 35, gender: "actor", hometown: "Slateport City" },
  { name: "Gum Gallerani", age: 43, gender: "actress", hometown: "Mauville City" },
];

const list = document.getElementById("StaffList");

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const li = document.createElement("li");
  li.textContent = person.name + ", a " + person.age + "-year-old " + person.gender + " from " + person.hometown + " .";
  list.appendChild(li);
}

