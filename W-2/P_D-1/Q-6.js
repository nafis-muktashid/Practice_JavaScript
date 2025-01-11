var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let f_name = friends[0];
let f_size = friends[0].length;

for (let i = 0; i < friends.length; ++i) {
  if (friends[i].length > f_size) {
    f_name = friends[i];
    f_size = friends[i].length;
  }
}

console.log(f_name);
