const validateForm = () => {
    const form1Name = document.getElementById('form1-name');
    const form1Email = document.getElementById('form1-email');
    const form1Phone = document.getElementById('form1-phone');
    
    const form2Name = document.getElementById('form2-name');
    const form2Email = document.getElementById('form2-email');
    const form2Phone = document.getElementById('form2-phone');
    const form2Message = document.getElementById('form2-message');

    const form3Name = document.getElementById('form3-name');
    const form3Email = document.getElementById('form3-email');
    const form3Phone = document.getElementById('form3-phone');

    form1Name.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/, '');
    });
    form1Email.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\w\@\-\.\!\~\*\']/, '');
    });
    form1Phone.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\d\-\(\)]/, '');
    });

    form2Name.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/, '');
    });
    form2Email.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\w\@\-\.\!\~\*\']/, '');
    });
    form2Phone.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\d\-\(\)]/, '');
    });
    form2Message.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/, '');
    });

    form3Name.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ ]/, '');
    });
    form3Email.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\w\@\-\.\!\~\*\']/, '');
    });
    form3Phone.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^\d\-\(\)]/, '');
    });
};
export default validateForm;
