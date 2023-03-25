import * as Style from './Header.styles'

const Header = () => {

  const closeApp = () => {
    window.electron.ipcRenderer.sendMessage('closeApp');
    return
  }

  const maximizeApp = () => {
    window.electron.ipcRenderer.sendMessage('maximizeApp');
    return
  }

  const minimizeApp = () => {
    window.electron.ipcRenderer.sendMessage('minimizeApp');
    return
  }

  return(
    <Style.Header>
      <Style.HeaderContent>
        <Style.HeaderLeft>
          <div className="headerLeftLogo">
            <img src="https://cdn.discordapp.com/attachments/1004462680582668341/1014967755092537444/logo.png" />
          </div>
        </Style.HeaderLeft>
        <Style.HeaderCenter>
          <span>PDPE</span>
        </Style.HeaderCenter>
        <Style.HeaderRight>
          <button onClick={minimizeApp}><span className="material-symbols-outlined"> horizontal_rule </span></button>
          <button onClick={maximizeApp}><span className="material-symbols-outlined"> crop_square </span></button>
          <button onClick={closeApp}><span className="material-symbols-outlined">close</span></button>
        </Style.HeaderRight>
      </Style.HeaderContent>
    </Style.Header>
  )
}

export default Header