//addLocal(arr) додає і перезаписує , приймає масив обєктів
//getLocalOne(id) віддає масив з 1 елемента , потрібно передати id елемента

function addLocal(key, value) {
  const check = chekId(key, value);
  if (!check.present) {
    localStorage.setItem(key, JSON.stringify([...check.arr, value]));
  } else {
    localStorage.setItem(
      key,
      JSON.stringify(check.arr.filter(item => item != value))
    );
  }
  return;
}

// function getLocalOne(id) {
//   if (localStorage.getItem(KEY)) {
//     const arr = JSON.parse(localStorage.getItem(KEY));
//     return arr.filter(e => e.id === id);
//   }
//   return undefined;
// }

export { addLocal, getLocalOne };

function chekId(key, value) {
  let arr = JSON.parse(localStorage.getItem(key));

  if (!arr) {
    arr = [];
  }

  const pre = arr.find(item => item === value);
  console.log(pre);

  return { present: arr.find(item => item === value), arr };
}
