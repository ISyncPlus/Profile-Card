document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    
    const updateTime = () => {
        timeElement.textContent = Date.now();
    };
    updateTime();
    setInterval(updateTime, 1000);

    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    avatarImg.onerror = () => {
        avatarImg.src = 'https://via.placeholder.com/150';
    };
});