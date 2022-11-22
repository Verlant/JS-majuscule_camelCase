let asked_string = prompt(
  "Quelle phrase voulez vous modifié ? Sachant que la premiere lettre passera en majuscule et le reste en minuscule"
);
function first_letter(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
function camel_case(string) {
  let split_string = string.split(" "),
    final_string = split_string[0].toLowerCase();
  for (i = 1; i < split_string.length; i++) {
    final_string = final_string.concat(first_letter(split_string[i]));
  }
  return final_string;
}
console.log(first_letter(asked_string));
console.log(camel_case(asked_string));
