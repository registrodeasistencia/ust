document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('snowflakes-container');
    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 10 + 5; // Tamaño aleatorio entre 5 y 15 px
        const position = Math.random() * 100; // Posición aleatoria entre 0 y 100%
        const delay = Math.random() * 10; // Retraso aleatorio entre 0 y 10s
        const duration = Math.random() * 5 + 5; // Duración aleatoria entre 5 y 10s

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${position}%`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationDuration = `${duration}s`;

        container.appendChild(snowflake);

        setTimeout(() => container.removeChild(snowflake), duration * 1000);
    };

    setInterval(createSnowflake, 200); // Crear una nueva copo cada 200ms
});
