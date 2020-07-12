export function checkForUser({ username, password }) {
  const users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    return null;
  }

  return (
    users.filter(
      ({ email: storeEmail, mobileNumber: storeMobileNumber, password: storePassword }) =>
        storePassword === password && (storeEmail === username || storeMobileNumber === username)
    ).length > 0
  );
}

export function updateUser ({ username, password }) {
  const users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    return null;
  }
  let userFound = false
  users.forEach((user, index)=>{
    let { email: storeEmail, mobileNumber: storeMobileNumber } = user
    if (storeEmail === username || storeMobileNumber === username) {
      userFound = true
      users[index].password = password
    }
  })

  if (userFound) {
    localStorage.setItem('users', JSON.stringify(users))
  }
  return userFound
}


// add user if username and mobile does not match with some other user
export function addUser (state) {
  console.log('state', state)
  const { username, mobileNumber } = state
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    users = [];
  }

  let userFound = false
  users.forEach((user)=>{
    let { email: storeEmail, mobileNumber: storeMobileNumber } = user
    if (storeEmail === username || storeMobileNumber === mobileNumber) {
      userFound = true
    }
  })

  if (!userFound) {
    users.push(state)
    localStorage.setItem('users', JSON.stringify(users))
  }

  return !userFound
}
