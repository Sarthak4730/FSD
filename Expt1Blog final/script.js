function checkAge(age, validFields){
    if( age < 1 || age > 122 )
        alert("Enter valid age");
    else
        validFields++;
    return validFields;
}

function checkPhoneNumber(phonenumber, validFields){
    if( isNaN(phonenumber) )
        alert("Not a number, please enter a valid 10 digit number");
    else{
        if( phonenumber.length != 10 )
            alert("Enter a number of length exactly 10 digits");
        else
            validFields++;
    }
    return validFields;
}

function checkEmail(email, validFields){
    if( !email.includes("@gmail.com") )
        alert("Enter a valid Gmail address");
    else
        validFields++;
    return validFields;
}

function backEvent(){
    let form = document.querySelector("form");
    form.style.display = "flex";

    let result = document.querySelector(".result");
    result.style.display = "none";

    document.querySelector("#fullname").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#phonenumber").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#address").value = "";
}

function displayResult(fullname, age, phonenumber, email, address){
    let form = document.querySelector("form");
    form.style.display = "none";

    let result = document.querySelector(".result");
    result.style.display = "flex";
    result.style.flexDirection = "column";
    result.style.justifyContent = "center";
    result.style.alignItems = "center";
    result.style.textAlign = "center";

    result.innerHTML = `
    <h1> Congratulations !!! </h1>
    <h3> Your registration form has been submitted successfully </h3>
    <hr />
    <div class="data-div">
        <p> Hello <b>${fullname}</b> </p>
        <p> You are <b>${age}</b> years young </p>
        <p> You will pick up your phone, if we call the number <b>${phonenumber}</b> </p>
        <p> Google knows you as <b>${email}</b> </p>
        <p> On new years eve, you will be found at <b>${address} </p> 
    </div>
    `;

    let back = document.createElement("button");
    result.append(back);
    back.innerText = "Go Back";
    back.addEventListener("click", backEvent);
}

document.querySelector("#form-submit").addEventListener("click", (e)=>{
    let validFields = 0
    
    e.preventDefault();
    
    let fullname = document.querySelector("#fullname").value;
    let age = document.querySelector("#age").value;
    let phonenumber = document.querySelector("#phonenumber").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;

    validFields = checkAge(age, validFields);
    validFields = checkPhoneNumber(phonenumber, validFields);
    validFields = checkEmail(email, validFields);

    if( validFields == 3 )
        displayResult(fullname, age, phonenumber, email, address);
});