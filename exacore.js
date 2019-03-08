const electron = require('electron')

const {app, document, mainWindow, ipcMain, BrowserWindow, setTitle, title} = require('electron')

  let win

const {dialog} = require('electron')

const { } = require('electron')

const {Menu, shell} = require('electron')

let template = [{
  label: 'Stuff',
  submenu: [{
    label: 'Check for Update',
    click: () => {
      shell.openExternal('https://github.com/floprock/Exosphere/releases/latest')
    }
}, {
    label: 'Server Status',
    click: () => {
      shell.openExternal('https://status.duckforceone.gq/')
    }
  }, {
    label: 'About',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'info',
          title: 'About Exosphere',
          buttons: ['OK'],
          message: 'Exosphere v 2.2.2 \n Author: floprock (duckforceone)\n Used Libraries:\n Electron (https://electronjs.org)\n Node.js (https://nodejs.org/en/)\n \nInspired by: \nKodi (https://github.com/xbmc/xbmc)\nStreamBox (https://github.com/RedDuckss/StreamBox)\n  \n APIs used: \n ODB Movie Link Finder for the direct search (https://odb.to) \n Videospider for the IMDb search (https://videospider.in) \n scr.cr for the search (https://scr.cr/) \n'


        }
        dialog.showMessageBox(focusedWindow, options, function () {})
      }
    }
  }


 ]
 }, {
  	label: 'FAQ',
  	role: 'help',
  	submenu: [{
  		label: 'Why the name Exosphere?',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'info',
          title: 'About',
          buttons: ['Ok'],
          message: 'Because i really like space.'
        }
        dialog.showMessageBox(focusedWindow, options, function () {})
      }
    }
 }, {
    label: 'Is this legal?',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'warning',
          title: 'Legality Notice',
          buttons: ['Ok'],
          message: 'As long as you\'re not uploading or hosting anything yourself, you should be fine.'
        }
        dialog.showMessageBox(focusedWindow, options, function () {})
      }
    }
    }, {
    label: 'How can i support the Development?',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'info',
          title: 'Supporting',
          buttons: ['Ok'],
          message: 'Easy! As this is an open-source Project you can head over to GitHub and Fork this project or create a pull request\n\n'
        }
        dialog.showMessageBox(focusedWindow, options, function () {})
      }
    }
}]
}, {
  label: 'View',
  submenu: [{

    label: 'Toggle Full Screen',
    accelerator: (() => {
      if (process.platform === 'darwin') {
        return 'Ctrl+Command+F'
      } else {
        return 'F11'
      }
    })(),
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }, {
    type: 'separator'
  }, {
    label: 'Contributors',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'info',
          title: 'Contributors',
          buttons: ['Ok'],
          message: 'Main Developer: sineflex'
        }
        dialog.showMessageBox(focusedWindow, options, function () {})
      }
    }
}, {
  label: 'Legal Stuff',
  role: 'help',
  submenu: [{
    label: 'DMCA Policy',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'info',
          title: 'Digital Millennium Copyright Act - Policy',
          buttons: ['Ok'],
          message: 'Exosphere is not responsible for any content linked to or referred to from these pages.\n Exosphere does not host any content on its server.\n All video links point to content hosted and found on third party websites.\n Users who upload to these websites agree not to upload illegal content when creating their user accounts.\n Exosphere does not accept responsibility for content hosted on third party websites.\n Exosphere does not add any of links that can be found on this site manually.\n All links are collected from various websites across the internet by an automatic bot.\n All links on these websites are public and accessible by any internet user. \n If you believe that links accessible through this site lead to third parties who infringe your copyright,\n please send an email to the address below. \n DMCA takedown Procedure: \nPlease send a notice of claimed copyright infringement containing the following:\n A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed;\n Identification of the copyrighted works claimed to have been infringed, \nor if multiple copyrighted works at a single online site are covered by a single notification,\n a representative list of such works at that site; \nIdentification of the links that are claimed to be infringing and that are to be removed. \nContact information for the notifier, \nsuch as an address, telephone number and, if available, an e-mail address; \nA statement that the notifier has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;\n and A statement that the information in the notification is accurate,\n and under penalty of perjury, \nthat the notifying party is authorized to act on behalf of the owner of the copyright that is allegedly infringed.'
        }
        dialog.showMessageBox(focusedWindow, options, function () {})
      }
    }
}, {
label: 'Disclaimer',
    click: function (item, focusedWindow) {
      if (focusedWindow) {
        const options = {
          type: 'info',
          title: 'Disclaimer',
          buttons: ['Ok'],
          message: 'The information contained on Exosphere (the "Service") is for general information purposes only. assumes no responsibility for errors or omissions in the contents on the Service. In no event shall be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice. does not warrant that the website is free of viruses or other harmful components. Exosphere may contain links to external websites that are not provided or maintained by or in any way affiliated with. Please note that the does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.'
        }
        dialog.showMessageBox(focusedWindow, options, function () {})
      }
    }

  }]
}]
}]
function addUpdateMenuItems (items, position) {
  if (process.mas) return
require('update-electron-app')({
  repo: 'sineflex/Exosphere',
  updateInterval: '5 minutes'
})
  const version = app.getVersion()
  let updateItems = [{
    label: `Version ${version}`,
    enabled: false
  }, {
    label: 'Checking for Update',
    enabled: false,
    key: 'checkingForUpdate'
  }, {
    label: 'Check for Update',
    visible: false,
    key: 'checkForUpdate',
    click: () => {
      require('electron').autoUpdater.checkForUpdates()
    }
  }, {
    label: 'Restart and Install Update',
    enabled: true,
    visible: false,
    key: 'restartToUpdate',
    click: () => {
      require('electron').autoUpdater.quitAndInstall()
    }
  }]

  items.splice.apply(items, [position, 0].concat(updateItems))
}

function findReopenMenuItem () {
  const menu = Menu.getApplicationMenu()
  if (!menu) return

  let reopenMenuItem
  menu.items.forEach(item => {
    if (item.submenu) {
      item.submenu.items.forEach(item => {
        if (item.key === 'reopenMenuItem') {
          reopenMenuItem = item
        }
      })
    }
  })
  return reopenMenuItem
}

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [{
      label: `About ${name}`,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: `Hide ${name}`,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: 'Show All',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: () => {
        app.quit()
      }
    }]
  })

  // Window menu.
  template[3].submenu.push({
    type: 'separator'
  }, {
    label: 'Bring All to Front',
    role: 'front'
  })

  addUpdateMenuItems(template[0].submenu, 1)
}

if (process.platform === 'win32') {
  const helpMenu = template[template.length - 1].submenu
  addUpdateMenuItems(helpMenu, 0)
}

app.on('ready', () => {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

app.on('browser-window-created', () => {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = false
})

app.on('window-all-closed', () => {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = true
})




  function createWindow () {
    // Erstellen des Browser-Fensters.
   var win = new BrowserWindow({
   	width: 1660,
   	height: 900,
    title: 'Exosphere v 2.2.2'
   });
win.on('page-title-updated', (evt) => {
  evt.preventDefault();
});

    win.loadFile('./index.html')

    win.on('closed', () => {
 
      win = null
    })
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {

    if (win === null) {
      createWindow()
    }
  })


ipcMain.on('ready', async event => {
  const response = await got(`https://api.themoviedb.org/3/movie/now_playing?api_key=47206932c7a5e718453916349a089a65`);
  const movies = JSON.parse(response.body);

  event.sender.send('media-list', movies);
});