// post JSON to endpoint and await response body
function sendUserFormJSON(data, url) {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      result.innerHTML = this.responseText;
    }
  };
  const dataString = JSON.stringify(data);
  xhr.send(dataString);
}

// perform very crude validation of user data; non-empty fields
function userFormSubmit(data, url) {
  // validate
  // ...

  //
  sendUserFormJSON(data, url);
}

export { userFormSubmit };
