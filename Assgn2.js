let email=prompt(' Enter your email ')
let pass=prompt(' Enter password ')
//----------------------------------------------
if( email == 'abc@gmail.com' && pass =='12345')
{
    alert(' SignIn Successful ! ')
}
else
{
    alert(' Wrong Email or Password !')
}
//----------------------------------------------
email == 'abc@gmail.com' && pass =='12345'
  ?  alert(' SignIn Successful ! ')
  :  alert(' Wrong Email or Password !');
//----------------------------------------------
switch (email && pass) {
    case ('abc@gmail.com' && '12345'):
        alert(' SignIn Successful ! ')
        break;

    default:
        alert(' Wrong Email or Password !')
        break;
}


