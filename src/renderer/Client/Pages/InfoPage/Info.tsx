import * as Styles from './Info.styles'

import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from 'react';

import instance from '../../Components/Axios/instance'

import Alert from '../../Components/AlertDelete/AlertDelete'

const Page = () =>{
    const navigate = useNavigate();
    const atualPath = window.location.href.split('/')[5]

    const [showingAlert, setShowingAlert] = useState(true)

    const closeWindow = () => {
      setShowingAlert(showingAlert ? false : true)
      return
    }

    const confirmouWindow = async () => {
      setShowingAlert(showingAlert ? false : true)

      await instance({
        url: `/casamento/arquivar/${atualPath}`,
        method: 'POST'
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })

      return
    }


    const setWindow = () => {
      setShowingAlert(showingAlert ? false : true)
      console.log(showingAlert)
      return 
    }

    const modificarButton = () => {
      navigate(`/modificar-casamento/${atualPath}`)
    }

    const arrayFunction = [closeWindow, confirmouWindow]

    ////////


    return (
      <Styles.InfoContainer>
        <Alert value={showingAlert} functionsSend={arrayFunction}/>
        <Styles.Header>
          <button className='voltarButton' onClick={() => navigate(-1)}><span className="material-symbols-outlined">chevron_left</span><span>Voltar</span></button>
          <div className='right'>
            <button className='deleteButton' onClick={setWindow}><span className="material-symbols-outlined"> delete </span></button>
            <button className='modificarButton' onClick={modificarButton}>Alterar Informações</button>
          </div>
        </Styles.Header>
        <Styles.InfoContent>
          <Styles.InfoUp>
            <Styles.InfoBanner>
              <img src="https://cdn.discordapp.com/attachments/1004462680582668341/1014706223976816701/bg3.png" />
            </Styles.InfoBanner>
            <Styles.AllInfos>
              {/* <Styles.InfoImg>
                <img src="https://cdn.discordapp.com/attachments/1004462680582668341/1004475677950619679/comandozinho.png"/>
              </Styles.InfoImg> */}
              <Styles.InfoText>
                <span>Casamento</span>
                <h1>Maria & João</h1>
              </Styles.InfoText>
            </Styles.AllInfos>
          </Styles.InfoUp>
          <Styles.InfoDown>
            <Styles.InfoObservacoes>
              <Styles.InfoObservacoesContent>
                <div className='dataContainer'>
                  <span className='data'>Dia: <span>20 de Março</span></span>
                </div>
                <div className='dataContainer'>
                  <span className='data'>Horário: <span>19h</span></span>
                </div>
                <div>
                  <span>Observações:</span>
                  <textarea disabled rows={10} placeholder="Nenhuma Observação Adicionada"></textarea>
                </div>
              </Styles.InfoObservacoesContent>
            </Styles.InfoObservacoes>
            <Styles.InfoEscalacao>
              <ul>
                <li>
                  <div className='separators'>
                    <h2>Padre Escalado para o dia:</h2>
                  </div>
                  <div className='pessoa'>
                    <div className='foto'>
                      <img src="https://www.arquidiocesedegoiania.org.br/tb.php?w=280&h=340&img=uploads/pe-joao-bosco-de-deus-cssr-02228338.jpg" />
                    </div>
                    <div className='nome'>
                      Pe. João Bosco
                    </div>
                  </div>
                </li>
              </ul>
            </Styles.InfoEscalacao>
          </Styles.InfoDown>
        </Styles.InfoContent>
      </Styles.InfoContainer>
    );
}

export default Page