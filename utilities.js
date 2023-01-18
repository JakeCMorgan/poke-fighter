export function renderEnemy(dataEnemy) {
    const newEnemyEl = document.createElement('li');
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

    newEnemyEl.classList.add('Enemy');

    newEnemyEl.append(hpEl, enemyImgEl, nameEl);

    return newEnemyEl;
}
