const  yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('te quiero flaquis <3 ahora invitate un ceviche pe')
});

const noBtn  =  document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function ()  {
    const  randomX  =  parseInt(Math.random()*100);
    const  randomY  =  parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})