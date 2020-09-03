// State and Stateless

function buildFullName(firstName, middleName, lastName) {
  const firstNameInitial = firstName[0].toUpperCase();
  const middleInitial = middleName[0].toUpperCase();
  const lastNameInitial = lastName[0].toUpperCase();

  const firstNameRightCase = firstNameInitial + firstName.slice(1, firstName.length);
  const lastNameRightCase = lastNameInitial + lastName.slice(1, lastName.length);

  const fullName = firstNameRightCase + ' ' + middleInitial + ' ' + lastNameRightCase;

  return fullName
}

console.log(buildFullName('stephen', 'charles', 'boynton'))