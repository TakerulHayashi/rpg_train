const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(type) {
    let maxDamage;
    if (type === 'Normal Attack') {
        maxDamage = ATTACK_VALUE;
    } else if (type === 'Strong Attack'){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage); 
    currentMonsterHealth -= damage;
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0 ) {
        alert('DRAW');
    }
}

function onAttack() {
    attackMonster('Normal Attack');
}

function stronAttackHandler() {
    attackMonster('Strong Attack');
}

attackBtn.addEventListener('click', onAttack);
strongAttackBtn.addEventListener('click', stronAttackHandler);