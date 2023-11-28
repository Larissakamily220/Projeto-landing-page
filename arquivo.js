const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const text = document.getElementById("text");

form.addEventListener("submit", (event) =>{
 event.preventDefault();

 checkform();

 alert("COLETA AGENDADA COM SUCESSO!")
})

function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === ""){
       errorInput(username,"Campo obrigatório!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Campo obrigatório!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"}
}

function checkInputNumber(){
    const numberValue = number.value;

    if(numberValue === ""){
        errorInput(number, "Campo obrigatório!")
    }else{
        const formItem = number.parentElement;
        formItem.className = "form-content"}
    }

    function checkInputText(){
        const textValue = number.value;
    
        if(textValue === ""){
            errorInput(text, "Campo obrigatório!")
        }else{
            const formItem = text.parentElement;
            formItem.className = "form-content"}
        }

function checkform(){
   
    checkInputUsername();
    checkInputEmail();
    checkInputNumber();
    checkInputText();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    console.log(isValid)
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessege = formItem.querySelector("a")

    textMessege.innerText = message;

    formItem.className = "form-content error"
}

