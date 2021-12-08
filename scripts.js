
myApp = {}
// namespace/function to add event listener  and get input from user
myApp.onSubmit = function () {
    const formElement = document.querySelector('form') 
    formElement.addEventListener('submit', function (event){
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

myApp.init = function (){
myApp.onSubmit()
}

myApp.init() 