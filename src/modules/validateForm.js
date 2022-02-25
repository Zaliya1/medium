const validateForm = () => {
    const inputs = document.querySelectorAll('input');
    const formNames = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const formEmails = document.querySelectorAll('input[type=email]');
    const formPhones = document.querySelectorAll('input[type=tel]');
    const form2Message = document.getElementById('form2-message');
   
    inputs.forEach(item => {
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
            event.target.value = event.target.value.replace(/^[\s\-]/g, ''); // можно ли объединить со строкой 12?
            event.target.value = event.target.value.replace(/[\s\-]$/g, '');
        });
    });
    formNames.forEach(item => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/g, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/([а-яА-Я]){1}([а-яА-Я]){1,}]/g, ($1, $2)=> {
                return `${$1}`.toUpperCase() + `${$2}`.toLowerCase();
            });
            event.target.value = event.target.value.replace(/([а-яА-Я]){1,}/g, (str) => {
                // for (let i = 0; i<str.lenght; i++) {
                //     if (i === 0) {
                //         str += str[i].toUpperCase; 
                //     } else {
                //         str += str[i].toLowerCase;
                //     }
                // }
                // return str;
                return str[0].toUpperCase()+str[1].toLowerCase()+str[2].toLowerCase()+str[3].toLowerCase()+str[4].toLowerCase();
            });
            
        });

    });
    formEmails.forEach(item => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^\w\@\-\.\!\~\*\']/, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/[^\w\@\-\.\!\~\*\']/g, '');
            event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
        });
    });
    formPhones.forEach(item => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^\d\-\(\)]/, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/[^\d\-\(\)]/g, '');
            event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
        });
    });
    form2Message.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/, '');
    });
    form2Message.addEventListener('blur', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/g, '');
        event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
    });
};
export default validateForm;
