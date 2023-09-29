export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true; // Remove the 'var' keyword here
    task2 = false; // Remove the 'var' keyword here
  }

  return [task, task2];
}
