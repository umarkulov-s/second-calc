var name = prompt("Введите свое имя :").trim();

if (name) {
    if (name[0] == name[0].toLowerCase()){
        alert(name[0].toUpperCase() + name.slice(1))
    }
    else {
        alert(name[0].toLowerCase() + name.slice(1));
    }
}
else {
    alert("Введено неверное имя")
}