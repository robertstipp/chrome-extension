console.log("Hello from Injection")


  const body = document.querySelector('body')
  const highlight = document.createElement('div')
  highlight.setAttribute('id', 'highlight')

  const style = document.createElement('style') 
  style.type = 'text/css'
  style.innerHTML = `
    #highlight {
      position: absolute;
      background-color: rgba(255,0,0,10);
      opacity: 0.4;
      text-align: center;
      border: 2px solid red;
      box-sizing: border-box;
      pointer-events: none;
    }
  `
  document.head.appendChild(style)
  let currentHighlight = null
  function highlightElement(element) {
    if (currentHighlight == element) return; 
    let rect = element.getBoundingClientRect();
    highlight.style.left = (window.scrollX + rect.x) + "px";
    highlight.style.top = (window.scrollY+rect.y) + "px";
    highlight.style.width = rect.width + "px";
    highlight.style.height = rect.height + "px";
    body.appendChild(highlight);
    currentHighlight = element
  }
  body.addEventListener('mousemove',(e)=>{
    const target = e.target
    highlightElement(target)
    const targetStyles = window.getComputedStyle(target)
    // Send a message to background.js
    
    chrome.runtime.sendMessage({type: 'hover', 
    text: target.textContent, 
    fontFamily: targetStyles.fontFamily, 
    fontSize: targetStyles.fontSize,
    fontStyle: targetStyles.fontStyle,
    fontWeight: targetStyles.fontWeight,
    color: targetStyles.color
    })

  })


  body.addEventListener("mouseleave", function(e) {
    highlight.remove();
    currentHighlight = null;
  });