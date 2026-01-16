const timeButtons = document.querySelectorAll('.time-bar button');
const heats = document.querySelectorAll('.heat');

function updateHeatmap(time) {
    heats.forEach(heat => {
        heat.classList.toggle(
            'active',
            heat.dataset.time === time
        );
    });
}

timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        timeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedTime = btn.dataset.time;
        updateHeatmap(selectedTime);
    });
});

// 초기 상태
updateHeatmap("10:00");