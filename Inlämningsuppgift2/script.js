// För godkänt ska du göra följande:

// Förhindra sidan att laddas om när formuläret ska valideras.
// Validera alla fälten så att alla fält måste ha ett innehåll och checkrutan måste klickas i
// Om något av fälten inte är ifyllda eller checkrutan inte är iklickad så ska du logga ett felmeddelande i consolen där du skriver att någonting har gått fel.
// Om valideringen går igenom så ska du istället logga ut ett success meddelande i consolen och skapa ett user objekt som har följande fält: firstName, lastName, email, password.
// Detta objekt ska också skrivas ut i consolen


// För väl godkänt ska du även göra följande:

// Alla fälten ska valideras så att korrekt information skriv in. ( email måste vara en emailadress, lösenorden måste matcha varandra samt ha en längd på minst 6 och ett namn ska inte få vara kortare än 2 bokstäver samt inte innehålla några siffror)
// Om det är något fel i valideringen så ska du visa texten i validation-feedback diven längst ner i formuläret genom att ta bort klassen d-none på p taggen.
// Du ska även consol logga ett meddelande med vilket av fälten som inte är korrekt ifyllda.
// När man har fyllt i alla fälten korrekt och trycker på "validate" så ska du dölja felmeddelandet längst ner igen och även skriva ut ett success meddelande i consolen och skapa ett user objekt som har följande fält: firstName, lastName, email, password. Detta objekt ska också skrivas ut i consolen

const form = document.getElementById('validationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('repeatPassword');
const errorMessage = document.getElementById('validation-feedback');
const terms = document.getElementById('terms')
let errors = []

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    errors.forEach((error)=>{
        console.log("Invalid field:", error);
    })
   
});

const checkInput = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    


    if (firstNameValue === ''){
    console.log('enter first name');
    errorMessage.classList.add("is-invalid")
    errors.push("First Name")
    document.getElementById("firstName").style.borderColor = "red";
}
    else{
    errors.splice("First Name")
}
    if(!terms.checked)
{
    console.log('You must agree to the terms first.');
    errorMessage.classList.add("is-invalid")
    errors.push("Terms unchecked")
}
    else{
    errors.splice("Terms unchecked")
}
    if (errors <= 0){
    errorMessage.classList.remove("is-invalid")
    console.log('Success');
}
}
//     if (lastNameValue === '')
//     {console.log('enter last name');}
// }