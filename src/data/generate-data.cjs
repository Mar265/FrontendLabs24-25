const fs = require('fs');
 
const count = Number(process.argv[2]);
 
function randomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split('T')[0];
}
 
function randomEyeColor() {
  const colors = ['blue', 'green', 'brown', 'hazel', 'gray'];
  return colors[Math.floor(Math.random() * colors.length)];
}
let names = [];
 
fs.readFile('./names.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 
  names = data
    .split('\n')
    .map(s => s.trim())
    .filter(n => n.length != 0);
 
  let content = 'export const data = [\n';
 
  for (let i = 0; i < count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
 
    const person = {
      id: i + 1,
      name: randomName,
      birth: randomDate(new Date(1960, 0, 1), new Date(2024, 12, 30)),
      eyes: randomEyeColor(),
    };
 
    content += `  ${JSON.stringify(person)},\n`;
  }
 
  content += '];';
 
  fs.writeFile('./src/data/module-data.js', content, err => {
    if (err) {
      console.error(err);
    }
    console.log('module-data.js generated');
  });
});
 