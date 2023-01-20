export function renderEnemy(dataEnemy, playerHP) {
    const newEnemyEl = document.createElement('button');
    const nameEl = document.createElement('p');
    const enemyImgEl = document.createElement('img');
    const hpEl = document.createElement('p');

    nameEl.textContent = dataEnemy.name;
    hpEl.textContent = dataEnemy.hp;

    if (dataEnemy.hp > 0) {
        enemyImgEl.src = './assets/enemy-gastly.png';
    }
    if (dataEnemy.hp <= 0) {
        enemyImgEl.src = './assets/enemy-gastly.png';
        enemyImgEl.classList.add('fainted-enemy');
    }

    if (playerHP <= 0) newEnemyEl.disabled = true;

    newEnemyEl.classList.add('Enemy');

    newEnemyEl.append(hpEl, enemyImgEl, nameEl);

    return newEnemyEl;
}
