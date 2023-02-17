// add click handler button with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    const emailAdd = document.getElementById('user-email');
    const userEmail = emailAdd.value;  

    // get password
    // set id on the html element
    // get the element
    // get the value from the element

    const passwordField = document.getElementById('user-password');
    const userPass = passwordField.value;

    if(userEmail === 'bank@gmail.com' && userPass === 'secret')
    {   
        window.location.href="bank.html";
        
    }
    else {
        alert('Invalid User');
    }    

})



