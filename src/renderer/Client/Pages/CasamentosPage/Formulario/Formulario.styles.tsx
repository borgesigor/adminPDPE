import styled from 'styled-components';

export const MainContainer = styled.div`
    .voltarButton{
      margin-top: 10px;
      margin-bottom: 20px;
    }
`;

export const FormContainer = styled.div`
  width: 30%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  .inputTitle{
    font-size: 16px;
    font-weight: 600;
    color: white;
    opacity: 0.7;
  }

  input, .formInputButton{
    padding: 15px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.2);
    opacity: 1;
    font-size: 16px;
    font-weight: 600;
    color: #242433;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    white-space: nowrap;

    .material-symbols-outlined{
      position: relative;
      top: -1px;
      margin-right: 5px;


      font-variation-settings: 
      'FILL' 1, 
      'wght' 600, 
      'GRAD' 0, 
      'opsz' 48 
    }
  }

  .doubleInputs{
    width: 100%;
    display: flex;
    gap: 15px;

    .double{
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      input{
        width: 100%;
        box-sizing: border-box;
      }
    }
  }

  .singleInput{
    width: 100%;
    .single{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      input{
        flex: 1;
      }
    }
  }

  .separador{
    width: 100%;
    height: 1px;
    background: white;
    display: block;
    content: '';
    opacity: 0.2;
  }

  .adicionarObservacao{
    font-size: 12px;
    cursor: pointer;
    margin-top: 16px;
    padding: 5px 10px 5px 10px;
    background-color: rgba(15,64,115,0.7);
    width: fit-content;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.1);

    :hover{
      text-decoration: underline;
    }
  }

  .observacoes{
    /* margin-top: 12px; */
  }
`;