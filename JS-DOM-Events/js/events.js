console.log("This is form JS");

function red() {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
};

const bl = document.getElementById("blue");
bl.onclick = blueBtn;

function blueBtn() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.fontSize = '2.75rem';
    document.body.style.color = 'red';
}

const pr = document.getElementById("perple");
console.log(pr);
pr.onclick = function perpleBtn() {
    document.body.style.backgroundColor = 'purple';
};

const tomatoBtn = document.getElementById('tomato');
tomatoBtn.addEventListener('click', tomatoBG);
// console.log(tomatoBtn);
function tomatoBG() {
    document.body.style.backgroundColor = 'tomato';
}

document.getElementById('orange').addEventListener('click',function() {
    document.body.style.backgroundColor = 'orange';
})