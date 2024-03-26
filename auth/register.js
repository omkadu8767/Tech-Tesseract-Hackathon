const firebaseConfig = {
    apiKey: "AIzaSyB6BgMmeI2AqRbK_dngQS4PdIk3WSzNbVs",
    authDomain: "authweb-61ddb.firebaseapp.com",
    databaseURL: "https://authweb-61ddb-default-rtdb.firebaseio.com",
    projectId: "authweb-61ddb",
    storageBucket: "authweb-61ddb.appspot.com",
    messagingSenderId: "269076663420",
    appId: "1:269076663420:web:bfc06f91f972bad8418df9"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        password: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};