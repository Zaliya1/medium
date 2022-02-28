const menu = () => {
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') ||  
        e.target.matches('a') || 
        e.target.closest('.menu') || 
        !e.target.matches('menu')) {
            handleMenu();
        }
    });

};
export default menu;