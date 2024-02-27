const btnSave = document.getElementById("save-btn");
const btnDelete = document.getElementById("delete-btn");
const inputText = document.getElementById("user-name");
const savedName = document.getElementById("saved-name");

const save = () => {
    const userName = inputText.value;
    localStorage.setItem("user", userName);
    saved();
};

const deleteItem = () => {
    inputText.value = "";
    localStorage.removeItem("user");
    saved();
};

const saved = () => {
    if (localStorage.getItem("user")) {
        welcomeMessage = "Ciao " + localStorage.getItem("user");
    } else {
        welcomeMessage = "Inserisci il tuo nome";
    }

    savedName.innerHTML = welcomeMessage;
};

btnSave.addEventListener("click", save);
btnDelete.addEventListener("click", deleteItem);
window.onload = saved;
