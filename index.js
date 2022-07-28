const registerButton =  document.getElementById('register')
const popUp = document.getElementById('pop-up')

registerButton.addEventListener('click', () =>  {
    popUp.classList.remove('hidden')
    popUp.classList.add('pop-up')
})
popUp.addEventListener('click', () => {
    if(popUp.classList.contains('pop-up')) {
        popUp.classList.remove('pop-up')
        popUp.classList.add('hidden')
    }
})
