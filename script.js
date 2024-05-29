class Login {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}

const user1 = new Login("", "");
const Loadingimage = document.getElementById("loadingimage");
const Loadingimage2 = document.getElementById("loadingimage2");


function submitForm() {
    const username1 = document.getElementById('username').value;
    const password1 = document.getElementById('password').value;
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
        Loadingimage2.style.display = "block";

        setTimeout(() => {
            alert("Sikeres bejelentkezés")
            loginn.style.display = "none";
            game.style.display = "block"
            Loadingimage2.style.display = "none"; 
        }, 3000);
    } else {
        alert("Hibás felhasználónév vagy jelszó!");
    }
}


var clickCount = 0;
var clicksPerSecond = 0;
var counter = document.getElementById('counter');
var clickArea = document.getElementById('clickArea');
var timerDisplay = document.getElementById('timer');
var clicksPerSecondDisplay = document.getElementById('clicksPerSecond');
var timeLimitInput = document.getElementById('timeLimit');
var timeLimit = 10; 

function startGame() {
  clickCount = 0;
  clicksPerSecond = 0;
  counter.textContent = 'Kattintások száma: 0';
  clicksPerSecondDisplay.textContent = 'Másodpercenkénti kattintások: 0';
  clickArea.style.display = 'block';
  timeLimit = parseInt(timeLimitInput.value);
  timerDisplay.textContent = 'Idő: ' + timeLimit;
  startTimer();
  startClicksPerSecondCounter();
}

function startTimer() {
  var timer = setInterval(function() {
    timeLimit--;
    timerDisplay.textContent = 'Idő: ' + timeLimit;
    if (timeLimit <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function startClicksPerSecondCounter() {
  setInterval(function() {
    clicksPerSecondDisplay.textContent = 'Másodpercenkénti kattintások: ' + clicksPerSecond;
    clicksPerSecond = 0;
  }, 1000);
}

clickArea.addEventListener('click', function() {
  clickCount++;
  counter.textContent = 'Kattintások száma: ' + clickCount;
  clicksPerSecond++;
});

function endGame() {
  clickArea.style.display = 'none';
  alert('A játék véget ért! Összpontszám: ' + clickCount);
}

function logOut(){
    alert("Kijelentkezve")
    loginn.style.display = "block";
    game.style.display = "none";
}
