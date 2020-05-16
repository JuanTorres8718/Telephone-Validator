const fun =()=>{
  const pResponse = document.querySelector('.response')
  pResponse.innerHTML= ``;
}

function telephoneCheck() {
  const str = document.querySelector('#phone').value
  let regex= /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
  const pResponse = document.querySelector('.response');
  if(regex.test(str)){
    pResponse.setAttribute('style','color:green');
    pResponse.innerHTML= `Correct, This is a Number valid from US`;
    setTimeout(fun ,5000);
  }else{
    pResponse.setAttribute('style','color:red');
    pResponse.innerHTML= `Sorry, but This is not a Number valid from US `;
    setTimeout(fun ,5000);
  }
}

// console.log(telephoneCheck("1 555)555-5555"));
const btn = document.querySelector('#send')

btn.addEventListener('click', telephoneCheck);