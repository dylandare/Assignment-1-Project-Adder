function Add(){
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var firstNumberInteger = parseInt(firstNumber, 10);
    var secondNumberInteger = parseInt(secondNumber, 10);

    if((firstNumber = "") || (secondNumber = "")){
        console.log('if');
        ons.notification.alert("Please enter two numbers");
    }

    else{
        console.log('else');
    ons.notification.alert("Your Number is " + (firstNumberInteger + secondNumberInteger));
    // ons.notification.toast('Hello ' + myname, {timeout:2000}
    }
}

function Clear(){
    console.log("function success");
    document.getElementById('firstNumber').value = "";
    document.getElementById('secondNumber').value = "";
}