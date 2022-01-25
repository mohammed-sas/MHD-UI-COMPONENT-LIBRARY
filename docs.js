const dropDownBtn = document.querySelector('.sidebar-btn');
const dropDownList = document.querySelector('.sidebar-list');
const sectionsAnchor = document.querySelectorAll('.sidebar-list span a');

let btnrotate=0;
dropDownBtn.addEventListener('click',()=>{
        dropDownList.classList.toggle('display-flex')
        btnrotate += 180
        dropDownBtn.style.transform=`rotate(${btnrotate}deg)`;
})

dropDownList.addEventListener('click',()=>{
    dropDownList.classList.toggle('display-flex');
})

sectionsAnchor.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault(); 
        let query = link.getAttribute('href');
        console.log(query);
        let destination = document.querySelector(query);
        console.log(destination)
        destination.scrollIntoView({
            behavior:'smooth',
        })
})
})