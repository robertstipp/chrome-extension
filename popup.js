const inputButtons = [...document.getElementsByName('input__button')]
const saveButton = document.getElementById('save-button')


inputButtons.forEach(button => {
  button.addEventListener('click',(e)=>{
    buttons.forEach(button=>{
      button.classList.remove('active')
    })
    e.target.classList.add('active')
  })
});

chrome.runtime.onMessage.addListener(function(message) {

      if (message.type === 'hover') {
        const activeField = document.querySelector('.active')
        if (!activeField.classList.contains('saved')) {
          activeField.nextElementSibling.textContent = message.text
        }
      }

      if (message.type === 'save') {
        const activeField = document.querySelector('.active')
        activeField.classList.add('saved')
      }
      
      
      // document.getElementById('hovered-text').textContent = message.fontFamily
      // document.getElementById('hovered-text-style').textContent = message.fontSize

      // document.getElementById('font-family').textContent = "font-family: " + message.fontFamily
      // document.getElementById('font-size').textContent = "font-size: " + message.fontSize
      // document.getElementById('font-style').textContent = "font-style: " + message.fontStyle
      // document.getElementById('font-weight').textContent = "font-weight: " + message.fontWeight
      // document.getElementById('color').textContent = "font-color: " + message.color
  // if (response && response.text) {
  //     document.getElementById('hovered-text').textContent = response.text;
  // } 
});
