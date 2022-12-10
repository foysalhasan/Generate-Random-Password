const data = ['A', 'B', 'C', 'D', 'E', 1, 2, 3, 4, 5];
const numWrapper = document.getElementById('num-wrapper');
const genPass = () => {
  let pass = '';
  for (let i = 0; i < 8; i++) {
    const num = Math.floor(Math.random() * data.length);
    pass += data[num];
  }
  numWrapper.textContent = pass;
};
genPass();
