const student = {
  name: "Muhammad Abdullah",
  rollNumber: "9248934",
  course: "Web Engineering"
};

let semester = 5;

const { name, rollNumber, course } = student;

const skills = ["HTML", "CSS", "JavaScript"];
const [firstSkill, secondSkill, thirdSkill] = skills;

const introduction = `Hey, My name is ${name} (${rollNumber}). I am studying ${course}
in semester ${semester}. My skills are ${firstSkill}, ${secondSkill}, and ${thirdSkill}.`;

console.log(introduction);
document.querySelector("#output").textContent = introduction;
