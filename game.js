var player = document.getElementById("player");
function moveLeft(){
    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        player.style.left = left + "px";
    }
}
function moveRight(){
    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    left += 100;
    if(left<300){
        player.style.left = left + "px";
    }
}
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});
var enemy = document.getElementById("enemy");
enemy.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    enemy.style.left = left + "px";
});

setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    var enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
    if(characterLeft == enemyLeft && enemyTop<500 && enemyTop>300){
        alert("Game Over");
        enemy.style.animation = none;
    }
},1);

document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);
