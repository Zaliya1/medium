const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const btnClose = modal.querySelector('.popup-close');
    const width = screen.availWidth;
    console.log(width);

    if(width >= 768) {
        modal.style.transition = "all 3s ease ";
        modal.style.opacity = 0;
        modal.style.width = 'auto';
        modal.style.display = "block";
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // modal.style.display = "block";
                modal.style.opacity = 1;
                modal.style.width = '100%';
            });
        });
        btnClose.addEventListener('click', () => {
            // modal.style.display = "none";
            modal.style.opacity = 0;
            modal.style.width = 'auto';
        });
    } else {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = "block";
                
            });
        });
        btnClose.addEventListener('click', () => {
            modal.style.display = "none";
            
        });
    }
};
export default modal;