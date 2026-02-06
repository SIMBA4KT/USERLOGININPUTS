document.querySelectorAll('button') = forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked the ${button.textContent} button!`);
    });})