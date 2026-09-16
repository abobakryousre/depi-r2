const welcomeButton = document.querySelector('#welcomeButton');
const message = document.querySelector('#message');

welcomeButton.addEventListener('click', () => {
    const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    message.textContent = `Hello from Omar's page! It is ${time}.`;
    welcomeButton.textContent = 'Say hello again';
});
