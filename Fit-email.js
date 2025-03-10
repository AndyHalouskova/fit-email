const firstName = prompt('Zadejte sve krestni jmeno: ');
const editedFirstName = firstName.trim().toLowerCase().slice(0, 3);
const lastName = prompt('Zadejte sve prijmeni: ');
const editedLastName = lastName.trim().toLowerCase().slice(0, 5);

function removeDiacritics(editedFirstName) {
    return editedFirstName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const email = removeDiacritics(editedFirstName);
const email2 = removeDiacritics(editedLastName);
const empty = "";

if (email === "" && email2 === "") {
    document.body.innerHTML += `<p>Nezadali jste jmeno ani prijmeni.</p>`;
} else if (email2 === ""){
    document.body.innerHTML += `<p>Nezadali jste prijmeni.</p>`;
} else if (email === "") {
    document.body.innerHTML += `<p>Nezadali jste jmeno.</p>`;
} else {
    document.body.innerHTML += `<p>${email2}.${email}@fit.cvut.cz</p>`;
}