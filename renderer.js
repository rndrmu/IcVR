const {BrowserWindow} = require('electron').remote
const newWindowBtn = document.getElementById('frameless-window')
var plswork = document.getElementById("Spiderman").value
const url = require('url')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = url.join('https://videospider.in/getvideo?key=JhhbVDPq3GIdkhuE&title='+plswork)
  let win = new BrowserWindow({ frame: false })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})