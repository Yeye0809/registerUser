const listUser = document.getElementById('list-users');
const firstName = document.getElementById('name');
const firstSurname = document.getElementById('surname');
const email = document.getElementById('email');
const reisterBtn = document.querySelector('btn-register');


const listUsers = [];

console.log(listUsers);


const getInputValue = () => {

    const nameValue = firstName.value;
    const surnameValue = firstSurname.value;
    const emailnameValue = email.value;
    
    
    addUsers(nameValue, surnameValue, emailnameValue);

    resetForm()


}

const addUsers = (name, surname, email) => {

    listUser.innerHTML= '';

      const dataUser =   listUsers.push({
            name: name,
            surname: surname,
            email: email
        })

        console.log(dataUser);
        renderListUsers();

       
}

const renderListUsers = (  ) => {

    listUsers.forEach( user => {


        const containerCard = document.createElement('div');
        const containerUser = document.createElement('div');
        const nameUser = document.createElement('h5');
        const emailUser = document.createElement('p');

        containerCard.setAttribute('class', 'card mb-2');
        containerUser.setAttribute('class', 'card-body');
        nameUser.setAttribute('class', 'card-title');
        emailUser.setAttribute('class', 'card-text');

        nameUser.textContent = `${user.name} ${user.surname}`;;
        emailUser.textContent = user.email;

        containerUser.innerHTML = '';

        containerUser.appendChild( nameUser );
        containerUser.appendChild( emailUser );

        containerCard.appendChild(containerUser);

        listUser.appendChild(containerCard);
        
        
        
    });

}




const resetForm = () => {
    firstName.value = ''
    firstSurname.value = ''
    email.value = ''
}