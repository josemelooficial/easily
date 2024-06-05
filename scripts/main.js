const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/logo-easily.jpg") {
        myImage.setAttribute("src", "images/nome-easily.jpg");
    } else {
        myImage.setAttribute("src", "images/logo-easily.jpg");
    }
};

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Easily é fácil de verdade, ${myName}!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Easily é facil, ${storedName}`
}

myButton.onclick = () => {
    setUserName();
}