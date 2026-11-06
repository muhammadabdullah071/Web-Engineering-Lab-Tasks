function createIntroduction(name, course) {
  return `My name is ${name} and I am studying ${course}.`;
}

const introduceStudent = (
  name = "Guest",
  course = "Web Engineering"
) => `My name is ${name} and I am studying ${course}.`;

const withArguments = introduceStudent("Muhammad Abdullah", "Web Engineering");
const withoutArguments = introduceStudent();

console.log(withArguments);
console.log(withoutArguments);

document.querySelector("#output").textContent =
  `Call with arguments:\n${withArguments}\n\n` +
  `Call without arguments:\n${withoutArguments}`;
