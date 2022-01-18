const spinBar = () => {
  let sec = 100;
  const barList = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  for (const bar of barList) {
    setTimeout(() => process.stdout.write(`\r${bar}   `), sec);
    sec += 200;
  }
  setTimeout(() => console.log(''), sec);
};

spinBar();