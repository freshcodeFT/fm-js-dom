const btn = document.querySelector('#unique');

const btnHandler = ()=>{
  alert('success');
  //btn.removeEventListener('click', btnHandler);
}

btn.addEventListener('click', btnHandler, {once: true});
