import { renderEnemy } from './utilities.js';

const enemiesEl = document.getElementById('enemies');
const starterHpEl = document.getElementById('starter-hp');
const starterImgEl = document.getElementById('starter-img');
const inputEl = document.getElementById('enemy-input');
const buttonEl = document.getElementById('enemy-button');
const winsCountEl = document.getElementById('wins-count');

let winsCount = 0;
let starterHp = 1;
const enemies = [
    {
        name: 'Steve',
        hp: 5,
    },
    {
        name: 'Susan',
        hp: 2,
    },
];

buttonEl.addEventListener('click', () => {
    const enemyName = inputEl.value;

    if (!enemyName) {
        return;
    }

    const newEnemy = {
        name: enemyName,
        hp: Math.ceil(Math.random() * 6),
    };

    enemies.push(newEnemy);

    inputEl.value = '';

    displayEnemies();
});

function disableButton() {
    const buttons = document.querySelectorAll('.newEnemy');
    for (let button of buttons) {
        button.disabled = true;
        button.classList.add('disable');
    }
}

function handler(e) {}

function displayEnemies() {
    enemiesEl.textContent = '';

    for (let enemy of enemies) {
        const newEnemyEl = renderEnemy(enemy, starterHp);
        // newEnemyEl.setAttribute('id', 'attack-button');
        newEnemyEl.addEventListener('click', () => {
            if (Math.random() > 0.5) {
                alert('charmander hit ' + enemy.name);
                enemy.hp--;

                if (enemy.hp === 0) {
                    winsCount++;
                    winsCountEl.textContent = `Pokémon defeated: ${winsCount}`;
                }
            } else {
                alert('the attack missed');
            }

            if (Math.random() > 0.5) {
                alert(enemy.name + ' used lick');
                starterHp--;

                if (starterHp === 0) {
                    starterImgEl.classList.add('fainted-starter');
                    disableButton();
                }
            } else {
                alert(enemy.name + ' used lick, but it missed');
            }
            if (starterHp === 0) {
                disableButton();
            }
            starterHpEl.textContent = starterHp;

            displayEnemies();
        });

        enemiesEl.append(newEnemyEl);
    }
}

displayEnemies();
