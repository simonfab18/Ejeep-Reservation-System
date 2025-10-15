const form = document.querySelector("form");
uField = form.querySelector(".user-id"), // Updated selector for user ID
uInput = uField.querySelector("input"), // Updated selector for user ID
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault(); // Preventing form submission
    // If user ID and password are blank, add the shake class; otherwise, call specified function
    (uInput.value == "") ? uField.classList.add("shake", "error") : checkUserID();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(()=>{ // Remove shake class after 500ms
        uField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    uInput.onkeyup = ()=>{checkUserID();} // Call checkUserID function on user ID input keyup
    pInput.onkeyup = ()=>{checkPass();} // Call checkPassword function on password input keyup

    function checkUserID(){ // checkUserID function
        let pattern = /^\d{3}-\d{4}$/; // Pattern for validating user ID
        if(!uInput.value.match(pattern)){ // If pattern not matched, add error and remove valid class
            uField.classList.add("error");
            uField.classList.remove("valid");//
            let errorTxt = uField.querySelector(".error-txt");
            // If user ID value is not empty, show "Enter a valid user ID"; otherwise, show "User ID can't be blank"
            (uInput.value != "") ? errorTxt.innerText = "Enter a valid User ID" : errorTxt.innerText = "User ID can't be blank";
        } else { // If pattern matched, remove error and add valid class
            uField.classList.remove("error");
            uField.classList.add("valid");
        }
    }

    function checkPass(){ // checkPass function
        if(pInput.value == ""){ // If password is empty, add error and remove valid class
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else { // If password is not empty, remove error and add valid class
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    // If uField and pField don't contain the error class, the user filled details properly
    if(!uField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = form.getAttribute("action"); // Redirect user to the specified URL inside action attribute of form tag
    }
}
