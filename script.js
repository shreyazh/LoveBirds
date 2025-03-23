document.addEventListener('DOMContentLoaded', () => {
    const proposeBtn = document.getElementById('proposeBtn');
    const loveList = document.getElementById('loveList');

    if (proposeBtn) {
        proposeBtn.addEventListener('click', () => {
            const response = confirm('Will you be mine forever?');
            if (response) {
                alert('You\'ve made me the happiest person alive! I love you!');
                confetti();
            } else {
                alert('I understand. My love for you will never change.');
            }
        });
    }

    if (loveList) {
        const moreReasons = [
            'Your compassion for others is inspiring',
            'You make me want to be a better person',
            'Your strength in difficult times amazes me',
            'The way you see the world is beautiful',
            'Your love fills my heart with joy',
            'Your laughter is music to my ears',
            'Your kindness inspires me to be a better person',
        ];

        const addReason = () => {
            if (moreReasons.length > 0) {
                const newReason = document.createElement('li');
                newReason.textContent = moreReasons.pop();
                newReason.style.opacity = '0';
                loveList.appendChild(newReason);
                setTimeout(() => {
                    newReason.style.transition = 'opacity 1s ease-in';
                    newReason.style.opacity = '1';
                }, 10);
            }
        };

        setInterval(addReason, 5000);
    }
});

function confetti() {
    const colors = ['#ff1a1a', '#ffb6c1', '#ffffff'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '1000';
        document.body.appendChild(confetti);

        const animation = confetti.animate(
            [
                { transform: 'translateY(0) rotate(0)', opacity: 1 },
                { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ],
            {
                duration: Math.random() * 3000 + 4000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }
        );

        animation.onfinish = () => confetti.remove();
    }
}
