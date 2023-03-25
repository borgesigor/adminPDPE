import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import instance from 'renderer/Client/Components/Axios/instance';
import { useNavigate } from 'react-router-dom';
import * as Styles from './Formulario.styles'

const Page = () =>{
  const navigate = useNavigate();

  //////

  const Input: object = () => {
    return <input placeholder="Your input here" />;
  };

  const [inputList, setInputList] = useState([]);

  const observacaoAdd = (event: object) => {
    
  };

  return (
    <>
      <Styles.MainContainer>
          <button className='voltarButton' onClick={() => navigate(-1)}><span className="material-symbols-outlined">chevron_left</span><span>Voltar</span></button>
      </Styles.MainContainer>
      <Styles.FormContainer>
        <div className='singleInput'>
          <div className='single'>
            <span className='inputTitle'>Pretendente 1</span>
            <input type="text"/>
          </div>
        </div>

        <div className='singleInput'>
          <div className='single'>
            <span className='inputTitle'>Pretedente 2</span>
            <input type="text"/>
          </div>
        </div>

        <span className='separador'></span>

        <div className='doubleInputs'>
          <div className='double'>
            {/* <span className='inputTitle'>Marcar dia</span> */}
            <button className='formInputButton blueBackground'><span className="material-symbols-outlined">calendar_month</span> Ver Dias Disponíveis</button>
          </div>
          <div className='double'>
            {/* <span className='inputTitle'>Marcar dia</span> */}
            <button className='formInputButton blueBackground'><span className="material-symbols-outlined">schedule</span>Ver Horários Disponíveis</button>
          </div>
        </div>

        <span className='separador'></span>

        <div className='singleInput'>
          <div className='single'>
            <span className='inputTitle'>Celular Para Contato (Obrigatório)</span>
            <InputMask mask={"(99) 99999-9999"} />
          </div>
        </div>

        <div className='singleInput'>
          <div className='single'>
            <span className='inputTitle'>Whatsapp (Opcional)</span>
            <InputMask mask={"(99) 99999-9999"} />
          </div>
        </div>

        <div className='singleInput'>
          <div className='single'>
            <span className='inputTitle'>Telefone Fixo: (Opcional)</span>
            <InputMask mask={"(99) 9999-9999"} />
          </div>
        </div>

        <span className='separador'></span>

        <div className='singleInput observacoes'>
          <div className='single'>
            <span className='inputTitle'>Observações Adicionais: (Opcional)</span>
            {inputList}
            <span className='adicionarObservacao' onClick={observacaoAdd}>Adicionar outra observação +</span>
          </div>
        </div>

        {/* <div className='singleInput'>
          <div className='single'>
            <span className='inputTitle'>Pretedente 2</span>
            <InputMask mask={"99:99"} />
          </div>
        </div> */}
      </Styles.FormContainer>
    </>
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