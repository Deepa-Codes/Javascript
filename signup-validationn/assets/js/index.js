document.querySelectorAll('.toggle-eye').forEach(eye=>{
    eye.addEventListener('click', function(){
        let element = eye.dataset.target;
        let input = document.querySelector(`[name="${element}"]`)
        let icon = eye.querySelector('i')

        if(input.type == 'password'){
            input.type='text';
            icon.classList.replace('fa-eye','fa-eye-slash')
         }else{
            input.type='password';
            icon.classList.replace('fa-eye-slash','fa-eye')
         }
     })
})

// let arrInputs = ['username', 'email', 'password', 'confirm_password']
let errStr = {
    'username' :'User Name is required', 
    'email': 'Email is required', 
    'password':'Password is required', 
    'confirm_password':'Confirm Password is required'
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

function validateForm(){
    let inputVal = {}
    let passwordVal = '';
    let hasError = { 
        username: true,
        email: true,
        password: true,
        confirm_password: true
    };

 document.querySelectorAll('input').forEach(input=>{
    const value =input.value.trim()
    inputVal[input.name] = input.value;
    let success = document.querySelector('.success');
    let element = input.closest('.form-group').querySelector('.err');
    element.innerText="";
    hasError[input.name]=false;
    // console.log(element, value, value.length);
     
        if(value===''){
        element.innerText = errStr[input.name];
        hasError[input.name]=true;
        return;
        } 
    
        if(input.name==='username' && value.length < 5){
        element.innerText ="User Name must contain 5 characters";
        hasError[input.name]=true;
        return;
        }

        if(input.name=='password'){
        passwordVal = value;
            if(!passwordRegex.test(value)){
            element.innerText = 'Password must contain one (uppercase, special char, number) & 6 chars minimum';
            hasError[input.name]=true;
            return
            }

        }

        if(input.name=='email' && !emailRegex.test(value)){
        element.innerText = 'Email is invalid';
        hasError[input.name]=true;
        return
        }

        if(input.name=='confirm_password' && passwordVal !== value ){
        element.innerText="Confirm Password and Password didn't match"; 
        hasError[input.name]=true;
        console.log(hasError);
        return
        }

        let isValid = Object.values(hasError).every(val=>val==false)
        console.log(isValid, hasError, 'error');
        // let errLen = Object.keys(hasError).length; 
        if(isValid){
            success.innerText="Form Validated successfully!"
            document.querySelectorAll('input').forEach(input=>{
                input.value='';
            })
            setTimeout(()=>{
                success.innerText=''
            }, 2000)
        }
        
      //no error
     }
    
)

}
   
 


window.validateForm = validateForm