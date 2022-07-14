const chicken = document.querySelector('.chicken')
const nest = document.querySelector('.nest')
const eggnest = document.querySelector('.eggnest')
const egg = document.querySelector('.egg')
const hatch = document.querySelector('.hatch')
const chick = document.querySelector('.chick')


chicken.addEventListener('click', ()=> {if(nest.classList.contains('nest')){
nest.classList.add('active');
chicken.classList.remove('active');
}});


nest.addEventListener('click' , ()=>{ if(eggnest.classList.contains('eggnest')){
    eggnest.classList.add('active');
    nest.classList.remove('active');
}});

eggnest.addEventListener('click', () => {if(egg.classList.contains('egg')){
    egg.classList.add('active');
    eggnest.classList.remove('active');
}});

egg.addEventListener('click', ()=> { if(hatch.classList.contains('hatch')) {
    hatch.classList.add('active');
    egg.classList.remove('active');
}});

hatch.addEventListener('click', ()=> {if(chick.classList.contains('chick')){
    chick.classList.add('active');
    hatch.classList.remove('active');
}});

chick.addEventListener('click', () => {if(chicken.classList.contains('chicken')){
    chicken.classList.add('active');
    chick.classList.remove('active');
}});
