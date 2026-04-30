function validate(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const mesg=document.getElementById("messagebox").value;
    let message = "";
    if (name===""){
        message="Please enter name!!!";
        mesg.style.color="red";
    }
    else if (email===""){
        message="Please enter email!!!";
        mesg.style.color="red";
    }
    else if (pass===""){
        message="Please enter password!!!";
        mesg.style.color="red";
    }
    else{
        message="Login Successful";
        mesg.style.color="green";
    }
    mesg.innerHTML=message;
}
document.getElementById("loginForm").onsubmit=validate;