class Login {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}

const user1 = new Login("", "");

function submitForm() {
    const username1 = document.getElementById('username').value;
    const password1 = document.getElementById('password').value;
    const Loadingimage = document.getElementById("loadingimage");
    Loadingimage.style.display = "block";
    user1.name = username1;
    user1.password = password1;

    setTimeout(() => {
        register.style.display = "none";
        loginn.style.display = "block";
        Loadingimage.style.display = "none"; 
    }, 3000);

    return user1.name, user1.password;
}

function submitForm2() {
    if (user1.name === document.getElementById('lusername').value && user1.password === document.getElementById('lpassword').value) {
        console.log("Sikeres bejelentkezés");
    } else {
        console.log("Nem jó");
    }
}

