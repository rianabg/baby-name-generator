'use strict';

var boyNames = ['Dude', 'Scott', 'Chad', 'Chett','Brady','Brandon','Alex','Hunter','Andrew','Grady','Brock','Spock','Mister','Gunner','Shotgun'];
var girlNames = ['Riana','Ellie','Jennifer','Judy','Mema','Alexis','Opal','Beyonce', 'Robin', "Sh'naenae", 'Latrice', 'Watermelondrea','Lady', 'Missy','Sister','Zella'];
var bothNames = boyNames.concat(girlNames);

function getGender() {
    if (document.getElementById('boy').checked === true) {
        return 'boy';
    } else if (document.getElementById('girl').checked === true) {
        return 'girl';
    } else if (document.getElementById('both').checked === true) {
        return 'both';
    }
}

function genRandIdx(gender){
    if (gender === 'boy') {
        var length = boyNames.length;
    } else if (gender === 'girl') {
        var length = girlNames.length;
    } else if (gender === 'both') {
        var length = boyNames.length + girlNames.length;
    }
    var randIdx = Math.floor(Math.random() * (length));
    return randIdx;
}

function genName(gender) {
    var randIdx = genRandIdx(gender);
    if (gender === 'boy') {
        name = boyNames[randIdx];
        return name;
    } else if (gender === 'girl') {
        name = girlNames[randIdx];
        return name;
    } else if (gender === 'both') {
        name = bothNames[randIdx];
        return name;
}
}

function getLastName() {
    var last = document.getElementById("last-name").value;
    return last;
}

function genFullName() {
    var gender = getGender();
    var fName = genName(gender);
    var mName = genName(gender);
    var lName = getLastName();
    var fullName = fName + ' ' + mName + ' ' + lName;
    return fullName;
}

function displayName() {
    if (document.getElementById("last-name").value === "") {
        alert("Please input a last name!");
        return;
    }
    if (document.getElementById('girl').checked !== true && document.getElementById('boy').checked !== true && document.getElementById('both').checked !== true) {
        alert('One of the buttons must be selected!');
        return;
    }
    var display = document.getElementById("baby-name");
    var fullName = genFullName();
    display.innerHTML = fullName;
}