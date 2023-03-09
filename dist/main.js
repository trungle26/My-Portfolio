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

const email = document.getElementById('email');
const call = document.getElementById('call');
email.addEventListener('click',function(){
    const email = 'leductrung8520@gmail.com';
    const subject = '';
    const body = '';
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
});
call.addEventListener('click',function(){
    const phoneNumber = '0948314812';
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
})