const registerButton =  document.getElementById('register');
const popUp = document.getElementById('pop-up');

registerButton.addEventListener('click', event =>  {
    event.preventDefault();
    popUp.classList.remove('hidden');
    popUp.classList.add('pop-it-up');
});

popUp.addEventListener('click', () => {
    
    if(popUp.classList.contains('pop-it-up')) {
        popUp.classList.remove('pop-it-up');
        popUp.classList.add('hidden');
    }
});
