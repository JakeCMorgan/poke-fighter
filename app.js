const enemiesEl = document.getElementById('enemies');
const starterHPEl = document.getElementById('starter-hp');
const starterImgEl = document.getElementById('starter-img');
const inputEl = document.getElementById('enemy-input');
const buttonEl = document.getElementById('enemy-button');
const winsCountEl = document.getElementById('wins-count');

let winsCount = 0;
let starterHP = 10;
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

function displayEnemies() {
    enemiesEl.textContent = '';

    for (let enemy of enemies) {
        const newEnemyEl = renderEnemy(enemy);

        newEnemyEl.addEventListener('click', () => {
            if (Math.random() > 0.3) {
                alert('charmander hit ' + enemy.name);
                enemy.hp--;

                if (enemy.hp === 0) {
                    winsCount++;
                    winsCount.textContent = `Pokémon defeated: ${winsCount}`;
                }
            } else {
                alert('the attack missed ' + enemy.name);
            }

            if (Math.random() > 0.8) {
                alert(enemy.name + 'used lick');
                starterHP--;

                if (playerHP <= 0) {
                    starterImgEl.classList.add('fainted-starter');
                }
            } else {
                alert(enemy.name + 'used lick, but it missed');
            }

            starterHPEl.textContent = starterHP;

            displayEnemies();
        });

        enemiesEl.append(newEnemyEl);
    }
}

displayEnemies();
