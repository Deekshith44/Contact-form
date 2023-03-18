const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const messageInput=document.querySelector('#message');
const success=document.querySelector('#success');
const errorNode=document.querySelectorAll('.error');





function  validateForm()
{
     let errorFlag=false;
    clearMessages();

   if(nameInput.value==="")
   {
     errorNode[0].innerText="Enter valid name"
    nameInput.classList.add('error-border');
    errorFlag=true;
   }

   if(!emailValid(emailInput.value))
   {
     errorNode[1].innerText="Enter valid Email"
     emailInput.classList.add('error-border');
     errorFlag=true;
   }

   if(messageInput.value==="")
   {
     errorNode[2].innerText="Please enter the message"
    messageInput.classList.add('error-border');
    errorFlag=true;
   }

   if(!errorFlag)
   {
    success.innerHTML="Success..!";
   }
}


function clearMessages()
{
    for(let i=0;i<errorNode.length;i++)
    {
        errorNode[i].innerText="";
    }
    success.innerText="";
    nameInput.classList.remove('error-border');
    emailInput.classList.remove('error=border');
    messageInput.classList.remove('error-border');
}

function emailValid(emailInput)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(emailInput);

}