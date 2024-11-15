const fs = require('fs');
 
const count = Number(process.argv[2]); // odczyt liczby obiektów
 
// Funkcja generująca losową datę urodzenia
function randomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split('T')[0];
}
 
// Funkcja generująca losowy kolor oczu
function randomEyeColor() {
  const colors = ['blue', 'green', 'brown', 'hazel', 'gray'];
  return colors[Math.floor(Math.random() * colors.length)];
}
 
// Funkcja generująca losowy rating
function randomRating() {
  return Math.floor(Math.random() * 11);
}
 
let names = []; // tablica z obiektami
 
fs.readFile('./names.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //podział łańcucha z imionami na wiersze.
  names = data
    .split('\n')
    .map(s => s.trim())
    .filter(n => n.length != 0);
  console.log(names);
 
  //generowanie obiektów
  let content = 'export const data = [\n';
  for (let i = 0; i < count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
 
    const person = {
      id: i + 1,
      name: randomName,
      birth: randomDate(new Date(1960, 0, 1), new Date(2024, 12, 30)),
      eyes: randomEyeColor(),
      rating: randomRating(),
    };
    content += `  ${JSON.stringify(person)},\n`;
  }
  content += '];';
 
  //zapis łańcucha do pliku
  fs.writeFile('src/data/module-data.js', content, err => {
    if (err) {
      console.error(err);
    }
    console.log('module-data.js generated');
  });
});
 
 