const mobile = document.querySelector('.mobile');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.fa-close');



 mobile.addEventListener('click', ()=>{        
        navbar.classList.add('active');
    })
 closeBtn.addEventListener('click', ()=>{        
        navbar.classList.remove('active');
    })
