import styled from 'styled-components'

export const InfoContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  min-height: 2000px;
`;

export const InfoContent = styled.div`
  
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .modificarButton{
    /* padding: 10px 20px 10px 20px; */
    height: 45px;
    width: 200px;
    background: rgba(8,78,143,0.7);
    color: rgba(255,255,255,1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    cursor: pointer;

    .icon{
      position: relative;
      top: 2px;

      animation: spin 1.3s linear infinite;
    }

    @keyframes spin{
      100% {transform: rotate(360deg)}
    }
  }

  .active{
    background: #008368;
    color: white;
    cursor: pointer;
  }

  .right{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }

  .deleteButton{
    cursor: pointer;

    span{
      font-size: 30px;
      color: #FF003F;
    }

    display: flex;
    align-items: center;
    
    margin-right: 30px;

    background: none;
  }
`;

export const InfoUp = styled.div`
  position: relative;
`;

export const InfoBanner = styled.div`
  border-radius: 8px;
  /* height: 40vh; */
  height: 300px;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    
    background: linear-gradient(0deg, rgba(36,36,51,1) 0%, rgba(0,212,255,0) 100%);
  }
`;

export const AllInfos = styled.div`
  position: absolute;
  top: 150px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const InfoImg = styled.div`
  width: 220px;
  height: 220px;

  img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const InfoText = styled.div`
  

  h1{
    font-size: 26px;
    margin-top: -3px;
  }

  span{
    opacity: 0.6;
    
  }
  
  color: white;

`;

export const InfoDown = styled.div`
  position: relative;
  margin-top: 90px;
  padding: 0px;
  color: white;

  display: flex;
  gap: 20px;
`;


export const InfoObservacoes = styled.div`
  width: 300px;
  height: 400px;
  background: #161625;
  border-radius: 8px;
`;

export const InfoObservacoesContent = styled.div`
  padding: 20px;

  font-family: 'Source Code Pro', sans-serif;
  font-style: italic;

  font-size: 14px;

  textarea{
    opacity: 0.8;
    background: none;
    color: white;
    margin: 0px;
    padding: 0px;
    margin-top: 12px;
    resize: none;

    border-style: none; 
    border-color: Transparent; 
    overflow: auto;

    font-style: italic;

    ::placeholder{
      opacity: 0.6;
      color: white;
    }
  }

  .dataContainer{
    margin-bottom: 32px;
  }

  .data span{
    background: #242433;
    padding: 3px 5px 3px 5px;
    font-weight: 800;
    font-style: normal;
    border-radius: 4px;
  }
`;

export const InfoEscalacao = styled.div`
  .separators{
    width: 100%;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    opacity: 0.5;

    h2{
      padding-top: 0;
      color: white;
      font-size: 16px;
      /* min-width: 250px; */
      padding-left: 20px;
      padding-right: 20px;
    }

    ::before, ::after{
      flex: 1;
      display: block;
      position: relative;
      content: '';
      opacity: 1;
      width: 50%;
      height: 1px;
      background: white;
    }

  }

  ul{
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  li{
    .pessoa{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 30px;

      position: relative;

      left: -25px;

      .foto{
        width: 90px;
        height: 90px;
        border-radius: 100%;
        overflow: hidden;
        
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .nome{
        font-size: 24px;
      }
    }
  }


  width: 100%;
  height: 600px;
`;