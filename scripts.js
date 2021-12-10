
myApp = {}
// namespace/function to add event listener  and get input from user
myApp.onSubmit = function () {
    const formElement = document.querySelector('form')
    formElement.addEventListener('submit', function (event) {
        event.preventDefault()

        //get input values
        let name = document.querySelector('.name').value
        let email = document.querySelector('.email').value
        let message = document.querySelector('.message').value
        formElement.reset()
        sendEmail(name, email, message)
    })

}

//connect to my email 
function sendEmail(name, email, message) {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'melissarichardsdesign@gmail.com',
        Password: 'dtrrziihuwcuzond',
        To: 'melissarichardsdesign@gmail.com',
        From: 'melissarichardsdesign@gmail.com',
        Subject: `${name} sent your a message`,
        Body: `Name ${name} Email: ${email} Message: ${message}`
    }).then((message) => alert('the e-mail has been sent'))
}

myApp.init = function () {
    myApp.onSubmit()
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        
        let displayMenu = false;

        const menu = document.getElementById("navHamburger");

        const hamburgerMenu = document.getElementById
        ("hamburger");

        hamburgerMenu.addEventListener("click", function () {
            displayMenu = !displayMenu;
            menu.style.display = displayMenu ? 'block' : 'none';
        });

        const navMenu = document.querySelectorAll('#navHamburger a')

        navMenu.forEach( (li) => {
            li.addEventListener('click', function () {
                displayMenu = !displayMenu;
                menu.style.display = 'none';
            })
        })
    }
}




myApp.init()