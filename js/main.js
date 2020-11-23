function headerAdd() {
        const header = document.querySelector('header');
    window.addEventListener('wheel',function(){
        if(document.documentElement.scrollTop>0)
        {
            header.classList.add("active");
            
        }
        else {
            header.classList.remove("active");
            
        }
    });
}
function radioChecked(){
    let rd = document.querySelectorAll('.radio');
    let fieldGroup = document.querySelector('.field--group');
    let rd1 = true;
    rd.forEach(i=>{
        i.addEventListener('change',function(){
            (rd1) ? false:  null;
            if(this !== rd1) {
                rd1 = this;
            }
            fieldGroup.classList.toggle("hidden");
        });
    });
}
radioChecked();
headerAdd();
const sliderWrap = document.querySelector('.banner .slider--wrap');
let flkty = new Flickity(sliderWrap, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 5000, 
    lazyLoad:1
});

const imgWrap = document.querySelector('.details .image-wrap');
var imgSlide = new Flickity(imgWrap, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    lazyLoad:1,
    on: {
        change: function(index) {
            let number = document.querySelector('.current');
            let indexPage = index +1;
            number.innerHTML = indexPage.toString().padStart(2,0);
        }
    }
});
const totalItem = document.querySelectorAll('.img--item');
const total = document.querySelector('.total');
total.innerHTML = totalItem.length.toString().padStart(2,0);
const prev = document.querySelector('.paging .prev');
const next = document.querySelector('.paging .next');

prev.addEventListener('click',() => {
    imgSlide.previous();
});
next.addEventListener('click',() => {
    imgSlide.next();
});

const accordion = document.querySelectorAll('.accordion');
accordion.forEach(i => {
    i.addEventListener('click',function(){
        this.classList.toggle("active");
    });
});

const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');
const value = document.getElementById('value');
let i =0;
btnIncrease.addEventListener('click',function(e) {
    e.preventDefault(); 
    i++;
    value.value = i;
});
btnDecrease.addEventListener('click',function(e){
    e.preventDefault();
    i--;
    if(value.value==0){
        i=0;
    } else {
        value.value = i;
    }
    
})

const cart = document.querySelector('.cart-item');
cart.addEventListener('click',function() {
    document.querySelector('.right').classList.toggle("active");
});






