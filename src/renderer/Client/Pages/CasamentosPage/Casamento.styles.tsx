import styled from 'styled-components';

export const MainContainer = styled.div`
    .adicionarNovo{
        padding: 20px;
        border: 1px solid rgba(255,255,255,0.1);
        padding-top: 15px;
        padding-bottom: 15px;
        cursor: pointer;
        text-align: left;
        background: rgba(255,255,255,0.05);
        border-radius: 8px;

        width: fit-content;

        display: flex;
        align-items: center;
        gap: 10px;

        transition: .3s background;

        :hover{
            background: rgba(255,255,255,0.1);
        }
    }

    .header{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 32px;
        margin-bottom: 30px;
        width: 50%;

        input{
            border-radius: 8px;
            padding-left: 10px;
            padding-right: 10px;
            width: 250px;
            height: 35px;
            font-family: 'Poppins', sans-serif;
            border: none;
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.05);
            color: white;

            ::placeholder{
              color: white;
              opacity: 0.5;
            }
        }
    }
`;