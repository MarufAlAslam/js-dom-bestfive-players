function getValueByID(id) {
    const element = document.getElementById(id);
    const stringValue = element.value;
    const value = parseFloat(stringValue);
    return value;
}

function getViewById(id) {
    const element = document.getElementById(id);
    return element
}

function getViewByClass(className) {
    return document.getElementsByClassName(className);
}

function listAppend(playerName) {
    const list = document.getElementById('selected-five');
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(playerName));
    list.appendChild(listItem);
}

function buttonDisabled(button) {
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.disabled = true;
}

function getLength(id) {
    const element = getViewById(id);
    return element.length;
}

function setValueByID(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}


function validator(value) {
    if (value === 0) {
        // alert("Please enter a valid player cost")
        return false;
    }
    else if (value < 0) {
        // alert("Please enter a positive cost")
        return false;
    }
    else if (value % 1 !== 0) {
        // alert("Please enter a number")
        return false;
    }
    else {
        return true;
    }
}

function calculateValidate(id) {
    const playerCost = getValueByID(id);
    return validator(playerCost);
}