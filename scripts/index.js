let btnAdd = document.getElementById('Btn-Add');

var contacts = Array();

// initials contacts

contacts.push({ name: "jose", telefone: "88996546797" });
contacts.push({ name: "reinaldo", telefone: "88996546797" });
contacts.push({ name: "sales", telefone: "88996546797" });
contacts.push({ name: "soares", telefone: "88996546797" });

let table = document.querySelector("#table > tbody")



contacts.map(x => {
    let trElement = document.createElement('tr');

    let tdElement = document.createElement('td');
    tdElement.append('TESTE');
    trElement.appendChild(tdElement);

    table.appendChild(trElement)
})


btnAdd.addEventListener('click', (e) => {
    let nameElement = document.getElementById('Name');
    let phoneElement = document.getElementById('Phone');
})