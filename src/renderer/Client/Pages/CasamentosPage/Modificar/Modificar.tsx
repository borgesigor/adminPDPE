import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from 'renderer/Client/Components/Axios/instance';
import * as Styles from './Modificar.styles'

const Page = () =>{
  const navigate = useNavigate();

  const initialValues = {
    pretendente01: "",
    pretendente02: "",
    telefone: "",
    whatsapp: "",
    padre: "",
    observacoes: "",
    data: "",
    horario: ""
  };

  const [inputValues, setInputValues] = useState(initialValues)

  // Inserir dados do input
  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Notificar sobre erros
  const faltamInformacoes = () => {
    console.log('Faltam Informações')
    return
  }

  // Verificar se possui inputs vazios
  const emptyInputs = () => {
    if(inputValues.pretendente01.length == 0 || inputValues.pretendente02.length == 0 ||inputValues.telefone.length == 0 ||inputValues.data.length == 0 || inputValues.horario.length == 0)
    {
      return true
    }
  }

  // Enviar formulário ao servidor
  const sendFormValues = () => {
    
    if(emptyInputs()){
      return faltamInformacoes()
    }

    // instance({
    //   url: '/casamento/adicionar',
    //   data: sendInputValues,
    //   method: 'POST'
    // })
    // .then((response)=>{
    //   console.log('ok')
    // })
    // .catch((err)=>{
    //   faltamInformacoes()
    // })

  }

  return (
    <Styles.MainContainer>
        <button className='voltarButton' onClick={() => navigate(-1)}><span className="material-symbols-outlined">chevron_left</span><span>Voltar</span></button>
        <Styles.FormContainer onSubmit={(e) => e.preventDefault()}>
          <div className="title">
            <h1>Adicionar Novo Evento</h1>
            <h2>Casamento</h2>
          </div>
          <div className='formMain'>

            <div className="data">
              <div className="inputNomes flexColumn">
                <span>Data</span>
                <input 
                  value={inputValues.data} 
                  onChange={handleInputChange} 
                  name="data"
                  type="date" />
              </div>
              <div className="inputNomes flexColumn">
                <span>Horário</span>
                <input 
                  value={inputValues.horario} 
                  onChange={handleInputChange} 
                  name="horario"
                  type="time"
                />
              </div>
            </div>

            <div className='nomes displayFlex'>
              <div className='inputNomes flexColumn'>
                <span>Pretendente 01</span>
                <input 
                  value={inputValues.pretendente01} 
                  onChange={handleInputChange} 
                  name="pretendente01"
                  type={'text'} 
                />
              </div>
              <div className='inputNomes flexColumn'>
                <span>Pretendente 02</span>
                <input 
                  value={inputValues.pretendente02} 
                  onChange={handleInputChange} 
                  name="pretendente02"
                  type={'text'} 
                />
              </div>
            </div>

            <div className='telefoneContato flexColumn'>
              <span>Telefone para contato</span>
              <input 
                value={inputValues.telefone} 
                onChange={handleInputChange} 
                name="telefone"
                type={'text'} 
              />
            </div>

            <div className='telefoneContato flexColumn'>
              <span>Whatsapp</span>
              <input 
                value={inputValues.whatsapp} 
                onChange={handleInputChange} 
                name="whatsapp"
                type={'text'} 
              />
            </div>

            <div className='observacoes flexColumn'>
              <span>Observações</span>
              <textarea
                value={inputValues.observacoes} 
                onChange={handleInputChange} 
                name="observacoes"
              />
            </div>

            <div className='selections'>

              <div className='selectionarPadre flexColumn'>
                <span>Padre:</span>
                <select 
                  onChange={handleInputChange} 
                  name="padre"
                >
                  <option value="1" >
                  Nenhum definido
                  </option>
                  <option value="2" >
                  Pe. João Bosco
                  </option>
                </select>
              </div>

            </div>

            <div className='buttonSend'>
              <button onClick={sendFormValues} className='active'>
                Enviar Dados
              </button>
            </div>

          </div>
        </Styles.FormContainer>
    </Styles.MainContainer>
  );
}

export default Page

{/* <div className='profileImg'>
      <label htmlFor="inputProfileImage">
        <div className='image'>
          <img src='https://cdn.discordapp.com/attachments/1004462680582668341/1022150185071157350/02_11_2.jpg'/>
        </div>
        <input className='sendProfileImage' id={"inputProfileImage"} type="file" name="image"/>
      </label>
    </div> */}