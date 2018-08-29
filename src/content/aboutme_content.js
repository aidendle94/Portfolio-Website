//Input strings for terminal box//
const statements = [
  {
    input: 'echo $Location',
    return: '"Austin,Texas"'
  },
  {
    input: 'echo $User',
    return: '["<a href="mailto:thien.le@protonmail.com">thien.le@protonmail.com</a>", "<a href="https://www.linkedin.com/in/thien-le1/">LinkedIn</a>", "<a href="https://github.com/aidendle94">github</a>"]'
  },
  {
    input: 'Get Resume.pdf',
    return: '"<a href="resume.pdf" target="_blank">Click me!</a>"'
  },
  {
    input: 'echo $interests',
    return: '["Reading", "Hiking", "Programming", "League Of Legends"]'
  },
  {
    input: 'Whatis -education',
    return: '"B.B.A. Management Of Information Systems - Texas Tech Rawls College of Business"'
  },
  {
    input: 'echo $PATH',
    return: '["HTML", "CSS", "Javascript", "Java", "Visual Studios"...More to come :)]'
  },
  {
    input: 'apt install philosophy',
    return: '[Clean, well documented code.]'
  },
];
//export string name
export default statements;
