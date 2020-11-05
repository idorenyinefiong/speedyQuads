
// document.querySelector('.bg-blue').addEventListener('click', function(){
//     document.querySelector('.row').style.background = '#0392bf';
//     document.querySelector('.row').style.color = '#fff';
// })

// document.querySelector('.bg-pink').addEventListener('click', function(){
//     document.querySelector('.row').style.background = '#ed48ba';
//     document.querySelector('.row').style.color = '#fff';
// })

// document.querySelector('.bg-yellow').addEventListener('click', function(){
//     document.querySelector('.row').style.background = '#fbec06';
//     document.querySelector('.row').style.color = '#000';
// })

// document.querySelector('.bg-grey').addEventListener('click', function(){
//     document.querySelector('.row').style.background = '#b3e4d0';
//     document.querySelector('.row').style.color = '#000';
// })

function setColors(background, font){
    const row = document.querySelector('.row');
        row.style.background = background;  
        row.style.color = font;

}
document.querySelector('.bg-blue').addEventListener('click', () => setColors('#0392bf', '#fff'));
document.querySelector('.bg-pink').addEventListener('click', () => setColors('#ed48ba', '#fff'));
document.querySelector('.bg-yellow').addEventListener('click', () => setColors('#fbec06', '#000'));
document.querySelector('.bg-grey').addEventListener('click', () => setColors('#b3e4d0', '#000'));
