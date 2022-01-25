const dropDownBtn = document.querySelector('.sidebar-btn');
const dropDownList = document.querySelector('.sidebar-list');
let btnrotate=0;
dropDownBtn.addEventListener('click',()=>{
        dropDownList.classList.toggle('display-flex')
        btnrotate += 180
        dropDownBtn.style.transform=`rotate(${btnrotate}deg)`;
})

dropDownList.addEventListener('click',()=>{
    dropDownList.classList.toggle('display-flex');
})