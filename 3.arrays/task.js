function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((value, index) => {
    console.log(value, arr2[index]);
    return value === arr2[index];
  });
}

function getUsersNamesInAgeRange(users, gender) {
  let filter = users.filter(user => user.gender === gender);
  if (filter.length === 0) {
    return 0;
  }
  let total = filter.reduce((sum, user) => sum + user.age, 0);
  let avg = total / filter.length;
  return avg;
}