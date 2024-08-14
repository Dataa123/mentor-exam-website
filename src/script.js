const form = document.getElementById('form');
const submit = form.elements.submit;
const main = document.getElementById('main');
const viewerDiv = document.getElementById('viewer');
const moderatorDiv = document.getElementById('moderator');
const plus = document.getElementById('plus');
const table = document.getElementById('table');

const obj = {};

submit.addEventListener('click', () => {
    if (form.elements.name.value == ""){
        form.elements.name.style.borderColor = "red";
    } else {
        form.elements.name.style.borderColor = "black";
    }

    if (form.elements.lastname.value == ""){
        form.elements.lastname.style.borderColor = "red";
    } else {
        form.elements.lastname.style.borderColor = "black";
    }

    if (form.elements.pass.value == ""){
        form.elements.pass.style.borderColor = "red";
    } else {
        form.elements.pass.style.borderColor = "black";
    }

    if(form.elements.name.value != "" && form.elements.lastname.value != "" && form.elements.pass.value != ""){
        Object.defineProperty(obj, "name", {value: form.elements.lastname.value})
        Object.defineProperty(obj, "lastname", {value: form.elements.name.value})
        Object.defineProperty(obj, "pass", {value: form.elements.pass.value})
        Object.defineProperty(obj, "role", {value: form.elements.role.value})
        main.style.display = "none";
        if (obj.role == "viewer"){
            viewerDiv.style.display = "block";
        } else if (obj.role == "moderator"){
            moderatorDiv.style.display = "block";
        }
        
    }

    console.log(obj);
})

plus.addEventListener('click', () => {
    console.log("ola");
    const row = table.insertRow();

    const td0 = row.insertCell(0);
    const td1 = row.insertCell(1);
    const td2 = row.insertCell(2);
    const td3 = row.insertCell(3);
    const td4 = row.insertCell(3);
    const td5 = row.insertCell(3);
    const td6 = row.insertCell(3);
    const td7 = row.insertCell(3);
    const td8 = row.insertCell(3);
    td0.innerText = 'None';
    td1.innerText = 'None';
    td2.innerText = 'None';
    td3.innerText = 'None';
    td4.innerText = 'None';
    td5.innerText = 'None';
    td6.innerText = 'None';
    td7.innerText = 'None';
    td8.innerText = 'None';
})