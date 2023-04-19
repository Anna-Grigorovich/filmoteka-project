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

export function getLocalStoradge(key) {
  return JSON.parse(localStorage.getItem(key));
}
// console.log(getLocalStoradge('watched'));
export { addLocal, getLocalOne };

function chekId(key, value) {
  let arr = JSON.parse(localStorage.getItem(key));

  if (!arr) {
    arr = [];
  }

  const pre = arr.find(item => item === value);
  // console.log(pre);

  return { present: arr.find(item => item === value), arr };
}
