//your JS code here. If required.
function getDomLevel(id) {
  let element = document.getElementById(id);
  let level = 0;
  while (element) {
    level++;
    element = element.parentNode;
  }
  return level;
}

let level = getDomLevel('level');
alert(`The level of the element is: ${level}`);