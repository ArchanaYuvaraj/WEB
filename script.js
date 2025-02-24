document.getElementById('contactForm').
addEventListener('Submit'),function(event){
    Event.preventDefault();

    const name = document.getElementById
    ('name').value;
    const email = document.getElementById
    ('email').value;
    const message= document.getElementById
    ('message').value;
    if(!name || !email || !message ) {
        alert('please fill in all fields.');
        returns;
        alert('Form submittedsuccessfully!\name: '+ name +'\email: ' + email + '\message: '+message);
        document.getElementById,('contactForm')
        resize();
        console.log()
    }
}
