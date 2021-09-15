function changehtml() {
    document.getElementById("phone").innerHTML = "Success!";
}

function validateForm() {
    var x = document.forms["confirm"]["code"].value;
    if (x == "1") {
        alert("Sucessfully registered to Carshare");
    } else if (x == "2") {
        alert("Error: please checked details entered");
    }
}

function performOp() {
    var x = document.forms["practice"]["number"].value;
    var changedX = x * 27;
    alert(changedX);
}

function validateForm() {
    var x = document.forms["confirm"]["code"].value;
    if (x == "Subscribe") {
    alert("You have been successfully registered to Carshare");
    } else if (x != "Subscribe") {
        alert("Error: Subscribtion confirmation. Please check your spelling and try again");
    }
}