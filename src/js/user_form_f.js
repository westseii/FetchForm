// TODO: use something like VeeValidate library if this were production
function checkObjectValues(object) {
  for (const key in object) {
    if (object[key] === null || object[key] === "") return false;
  }
  return true;
}

// post JSON to endpoint and await response body
function sendUserFormJSON(data, url) {
  const xhr = new XMLHttpRequest();

  // on success; this should probably load some sort of success modal and then redirect the user
  xhr.onload = function () {
    alert(`Data posted successfully. Status: ${xhr.status}`);
  };

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  const dataString = JSON.stringify(data);
  xhr.send(dataString);
}

// perform very crude validation of user data; non-empty fields
function userFormSubmit(data, url) {
  // validate
  const isCrudelyValid = checkObjectValues(data);

  if (isCrudelyValid) {
    // valid
    sendUserFormJSON(data, url);
    return 0;
  } else {
    // invalid
    return 1;
  }
}

export { userFormSubmit };
