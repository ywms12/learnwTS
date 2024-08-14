const opn = document.getElementById('showL');
const cls = document.getElementById('hideL');
const ul = document.getElementById('u1');
opn.addEventListener('click', function(){
    opn.style.display = 'none';
    ul.style.display = 'block';
});
cls.addEventListener('click', function(){
    ul.style.display = 'none';
    opn.style.display = 'block';
});