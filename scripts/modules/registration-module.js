export function registration() {
    document.addEventListener('DOMContentLoaded', ()=>{
        let submitButton = document.getElementById('registration-btn');
        let inputName = document.getElementById('inputName');
        let inputEmail = document.getElementById('inputEmail');
        let inputPassword = document.getElementById('inputPassword');
        let inputDate = document.getElementById('inputDate');
 
        submitButton.addEventListener('click', (event)=>{
            event.preventDefault();

            fetch('http://localhost:36155/registration',{
                method:'POST',
                body:JSON.stringify({
                    "Name":inputName.value,
                    "Email":inputEmail.value,
                    "Password":inputPassword.value,
                    "BirthDate":inputDate.value
                })
            })
            .then((response)=>response.text())
            .then((data)=>console.log(data))
            .catch((error)=>console.log(error));
        });
    
    
    });
}