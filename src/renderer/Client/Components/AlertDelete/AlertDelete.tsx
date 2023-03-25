import { useEffect, useState } from 'react'
import * as Styles from './AlertDelete.styles'

const Component = (props: any) => {

  const [showingAlert, setShowingAlert] = useState(true)

  const showToggle = () => {
    setShowingAlert(showingAlert ? false : true)
  }

  const closeWindow = () => {
    console.log(props.functionsSend[0]())
  }

  const confirmouWindow = () => {
    console.log(props.functionsSend[1]())
  }

  useEffect(()=>{
    showToggle()
  }, [props.value])

  return (
    <Styles.AlertMain>
      <Styles.AlertBackground className={showingAlert ? 'windowOpen-alert' : 'windowClose-alert'}>
        <Styles.AlertContainer className='alert-animation'>
          <Styles.AlertContent>
            <span className="material-symbols-outlined icon"> delete </span>
            <span className='title'>Você realmente quer excluir isso ?</span>
            <button className='yes' onClick={confirmouWindow}><span>Sim, Desejo excluir este evento</span></button>
            <button className='cancel' onClick={closeWindow}><span>Não, cancelar esta ação</span></button>
          </Styles.AlertContent>
        </Styles.AlertContainer>
      </Styles.AlertBackground>
    </Styles.AlertMain>
  )
}

export default Component
