function friend(friends) {
  return friends.filter((name) => name.length === 4);
}

console.log(friend(['Anthony', 'Ryan', 'Dean', 'Angela', 'Sariah']));
