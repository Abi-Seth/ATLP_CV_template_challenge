
const generateRandomColor = () => {
  const maxValue = 0xffffff;
  let randomNumber = (Math.floor(Math.random() * maxValue)).toString(16);
  const randomColor = randomNumber.padStart(6, 0);
  return randomColor;
};

function changeToRandomColor () {
  document.documentElement.style.setProperty("--side-color", `#${generateRandomColor()}` );
};