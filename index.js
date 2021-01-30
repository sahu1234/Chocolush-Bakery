// dynamically changing copyright year 
currentYear = new Date().getFullYear();
document.getElementsByClassName('footer-copyright')[0].innerText =  "© " + currentYear + " Copyright: Chocolush"


const $introSection = $("#intro-section");
let introVisible = $introSection.is(":visible");

const $featuresSection = $("#features-section");
let featuresVisible = $featuresSection.is(":visible");

const $section3 = $("#section-3");
let section3Visible = $section3.is(":visible");


$(document).scroll(function() {
    const y = $(this).scrollTop();
    //console.log(y);

    if (!(y <= 400 == introVisible))  { //this also means:  if not (y <= 400 && introVisible || y > 400 && !introVisible) return;

        introVisible = !introVisible;
        const opacity = +introVisible;
        $introSection.fadeTo(400, opacity);
    }

    if (!(y > 400 == featuresVisible))  { 

        featuresVisible = !featuresVisible;
        const opacity = +featuresVisible;
        $featuresSection.fadeTo(400, opacity);
    }

    if (!(y > 1200 == section3Visible))  { 

        section3Visible= !section3Visible;
        const opacity = +section3Visible;
        $section3.fadeTo(400, opacity);
    }
});

/* Log In Form Validation*/

const email = document.getElementById('emailAddress'); 
const password = document.getElementById('password');

var checkError = 0;

form.addEventListener('submit', function(e){
    if(checkError == 0){
        e.preventDefault();
        checkUserInputs();
    }

});

function checkUserInputs(){
    var flag=0;
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    //validate email
    if(emailVal === ''){
        setErrorFor(email, 'Email required');
    } else if(!isEmail(emailVal)){
        setErrorFor(email, 'Wrong Email format');
    } else {
        setSuccessFor(email);
        flag+=1;
    }
    //validate password
    if (passwordVal === '') {
        setErrorFor(password, 'Password required');
    } else {
        if(passwordVal.length <= 6){
            setErrorFor(password, 'Password cannot be less than 6 characters');
        }
        else if (passwordVal.length > 20){
            setErrorFor(password, 'Password cannot be more than 20 characters');
        }
        else{
            setSuccessFor(password);
            flag += 1;
        } 
    }
    if(flag == 2)
        checkError = 1;
    else
        checkError = 0;

}
//For error message
function setErrorFor(input, msg) {
    const formGrp = input.parentElement; //.form-group
    const sm = formGrp.querySelector('small');

    sm.innerText = msg;

    formGrp.className = 'form-group error';

}
//For Success Message
function setSuccessFor(input){
    const formGrp = input.parentElement; //.form-group
    formGrp.className = 'form-group success';
}
//Checks Email format
function isEmail(inputEmail){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(inputEmail);
}

//Login Form Validation Ends
