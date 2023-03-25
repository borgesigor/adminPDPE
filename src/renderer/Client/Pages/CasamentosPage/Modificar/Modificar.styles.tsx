import styled from 'styled-components';

export const MainContainer = styled.div`
    .voltarButton{
      margin-top: 10px;
      margin-bottom: 20px;
    }
`;

export const FormContainer = styled.form`

    color: white;

    h1{
      font-size: 30px;
    }

    h2{
      font-size: 20px;
      opacity: 0.5;
      margin-bottom: 30px;
    }

    .formMain{
      width: 600px;
    }

    .data{
      display: flex;
      gap: 36px;
    }

    .data input{

      font-family: 'Poppins', sans-serif;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      padding: 8px;
      width: 100%;
    }

    input[type="text"]{
      width: 100%;
      border: none;
      padding: 0px;
      margin: 0px;

      padding-left: 15px;
      padding-top: 15px;
      padding-bottom: 15px;

      border-radius: 8px;

      font-size: 16px;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
    }

    .inputNomes{
      width: 100%;
    }

    .nomes{
      width: 100%;
      display: flex;
      gap: 32px;
    }

    .formMain{
      display: flex;
      flex-direction: column;
      gap: 28px;
    }

    .flexColumn{
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      span{
        opacity: 0.7;
      }
    }

    .buttonSend{
      button{
        height: 55px;

        background: rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.5);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 8px;
        margin-top: 20px;
        width: calc(100% + 15px);
      }

      .active{
        background: #008368;
        color: white;
        cursor: pointer;
      }
    }

    .selections{
      margin-top: 8px;
      display: flex;
      gap: 16px;

      select{
        padding: 16px;
        border-radius: 8px;
        border: none;
      }

      
    }

    .observacoes{
      width: 100%;

      textarea{
        resize: vertical;
        width: 100%;
        min-height: 70px;
        height: 100px;
        border-radius: 8px;
        padding-left: 10px;
        padding-top: 10px;
      }
    }

`;