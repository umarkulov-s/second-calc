// var a = +prompt("son").trim();
// var amallar = prompt("amal").trim();
// var b = +prompt("son").trim();

// var resultat;

// switch (amallar) {
//     case "+":
//         console.log(resultat = a + b);
//         break;
//     case  "-":
//         console.log(resultat = a - b);
//         break;
//     case "*":
//         console.log(resultat = a * b);
//         break;
//     case  "/":
//         console.log(resultat = a / b);
//         if (b == "0") {
//             console.log("0ga bolinmaydi");
//         }
//         break;
        

//     default:
//         console.log("Notog'ri amal kiritildi");
//         break;
    
// }



// var amal = prompt("Amalni yozing").trim().toLowerCase();
// alert(eval(amal));

var amal = prompt("Amalni yozing ").trim();

var res = amal.split(" ");

var a = +res[0];     
var oper = res[1];
var b = +res[2];     

switch (oper) {
    case "+":
        alert(a + b);
        break;

    case "-":
        alert(a - b);
        break;

    case "*":
        alert(a * b);
        break;

    case "/":
        if (b === 0) {
            alert("0 ga bo'linmaydi");
        } else {
            alert(a / b);
        }
        break;

    default:
        alert("Notogri amal kiritildi");
}