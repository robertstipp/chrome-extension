chrome.runtime.onMessage.addListener(function(message) {
      
      // document.getElementById('hovered-text').textContent = message.fontFamily
      // document.getElementById('hovered-text-style').textContent = message.fontSize
      document.getElementById('font-family').textContent = "font-family: " + message.fontFamily
      document.getElementById('font-size').textContent = "font-size: " + message.fontSize
      document.getElementById('font-style').textContent = "font-style: " + message.fontStyle
      document.getElementById('font-weight').textContent = "font-weight: " + message.fontWeight
      
      document.getElementById('color').textContent = "font-color: " + message.color

      

  
  // if (response && response.text) {
  //     document.getElementById('hovered-text').textContent = response.text;
  // } 
});
