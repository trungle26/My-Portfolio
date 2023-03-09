const fb = document.querySelectorAll('.facebook');
const github = document.querySelectorAll('.github');
const twitter = document.querySelectorAll('.twitter');
const linkedin = document.querySelectorAll('.linkedin');
fb.forEach(button=>{
    button.addEventListener("click",function(){
        window.location.href = 'https://facebook.com/mrleductrung';
    });
});
github.forEach(button=>{
    button.addEventListener("click",function(){
        window.location.href = 'https://github.com/trungle26';
    });
});
twitter.forEach(button=>{
    button.addEventListener("click",function(){
        window.location.href = 'https://twitter.com/letrung26';
    });
});
linkedin.forEach(button=>{
    button.addEventListener("click",function(){
        window.location.href = 'https://linkedin.com';
    });
});

