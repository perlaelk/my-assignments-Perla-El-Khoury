const buildBtn = document.getElementById('buildBtn');
const appendBtn = document.getElementById('appendBtn');
const destroyBtn = document.getElementById('destroyBtn');
const stairContainer = document.getElementById('stairContainer');
const stepsInput = document.getElementById('steps');

buildBtn.addEventListener('click', () => {
    if (stairContainer.children.length === 0) {
        const steps = parseInt(stepsInput.value);
        if (steps >= 1 && steps <= 5) {
            createStairs(steps);
            buildBtn.classList.add('hidden');
            appendBtn.classList.remove('hidden');
            destroyBtn.classList.remove('hidden');
        }
    }
});

appendBtn.addEventListener('click', () => {
    const steps = parseInt(stepsInput.value);
    if (steps >= 1 && steps <= 5) {
        createStairs(steps, true);
    }
});

destroyBtn.addEventListener('click', () => {
    stairContainer.innerHTML = '';
    buildBtn.classList.remove('hidden');
    appendBtn.classList.add('hidden');
    destroyBtn.classList.add('hidden');
});

function createStairs(num, append = false) {
    const existingSteps = stairContainer.children.length;
    for (let i = 0; i < num; i++) {
        const step = document.createElement('div');
        step.classList.add('step');
        if (append) {
            step.classList.add('appended');
        }
        step.style.width = `${20 * (existingSteps + i + 1)}px`; // Incremental width for staircase effect
        stairContainer.appendChild(step);
    }
}