const menu = () => {
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', (e) => {
        if (!menu.classList.contains('active-menu') && !e.target.matches('menu')) {
            handleMenu();
        } else if 
            (menu.classList.contains('active-menu') && 
            (e.target.classList.contains('close-btn') ||
            e.target.matches('a') ||
            !e.target.closest('.active-menu'))) 
        {
            handleMenu();
        }
        
    });

};
export default menu;