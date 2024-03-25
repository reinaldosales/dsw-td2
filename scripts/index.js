const contacts = Array();

const btnAdd = document.getElementById('Btn-Add');
const table = document.querySelector("#table > tbody")

const errorForNameElement = document.querySelector("#ErrorForName")
const errorForPhoneElement = document.querySelector("#ErrorForPhone")

// // initials contacts

// contacts.push({ name: "jose", phone: "88996546797" });
// contacts.push({ name: "reinaldo", phone: "88996546797" });
// contacts.push({ name: "sales", phone: "88996546797" });
// contacts.push({ name: "soares", phone: "88996546797" });


// Add contact
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    const nameElement = document.getElementById('Name');
    const phoneElement = document.getElementById('Phone');

    // Validations

    if (isNull(nameElement))
        errorForNameElement.innerHTML = 'Campo obrigatório'
    else
        errorForNameElement.innerHTML = '';

    if (isNull(phoneElement)) {
        errorForPhoneElement.innerHTML = 'Campo obrigatório'; return;
    }
    else
        errorForPhoneElement.innerHTML = ''

    if (btnAdd.getAttribute("isedit") != null) {
        const contactIndex = btnAdd.getAttribute("ContactEditIndex")

        contacts[contactIndex].name = nameElement.value;
        contacts[contactIndex].phone = phoneElement.value;

        btnAdd.innerHTML = 'Adicionar';
        btnAdd.style.backgroundColor = '#3DFF50';
        btnAdd.removeAttribute("IsEdit");
        btnAdd.removeAttribute("ContactEditIndex");

        nameElement.value = '';
        phoneElement.value = '';

        updateTable();

        return;
    }

    contacts.push({ name: nameElement.value, phone: phoneElement.value });

    nameElement.value = '';
    phoneElement.value = '';

    updateTable();
})

function isNull(obj) {
    return (obj == null || obj.value == null || obj.value == undefined || obj.value == '');
}

function updateTable() {

    // Reset table
    table.innerHTML = `
    <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Ações</th>
    </tr>`;

    //
    contacts.map((x, index) => {
        const trElement = document.createElement('tr');

        trElement.innerHTML = `
            <td> ${x.name} </td>
            <td> ${x.phone} </td>
            <td>
                <a href="#" onclick="editContact(${index})">
                    <img src="assets/tabler_edit.png" alt="">
                </a>
                <a href="#" onclick="deleteContact(${index})">
                    <img src="assets/clarity_remove-line.png" alt="">
                </a>
            </td>
        `;

        table.appendChild(trElement)
    })
}


function deleteContact(index) {
    contacts.splice(index, 1);
    updateTable();
}

function editContact(contactIndex) {
    const nameElement = document.getElementById('Name');
    const phoneElement = document.getElementById('Phone');

    let contact = contacts.find((x, index) => index == contactIndex);

    nameElement.value = contact.name;
    phoneElement.value = contact.phone;

    btnAdd.innerHTML = 'Editar';
    btnAdd.style.backgroundColor = '#00C2FF';
    btnAdd.setAttribute("IsEdit", true);
    btnAdd.setAttribute("ContactEditIndex", contactIndex);
}