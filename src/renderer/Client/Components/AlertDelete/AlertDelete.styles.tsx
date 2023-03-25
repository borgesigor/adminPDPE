import styled from 'styled-components'

export const AlertMain = styled.div`

  .windowClose-alert{
    visibility: hidden;

    .alert-animation{
      transform: scale(0);
    }
  }

  .windowOpen-alert{
    visibility: visible;

    .alert-animation{
      transform: scale(1);
      transition: .2s;
      transition-property: transform;
    }
  }
`;

export const AlertBackground = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(22,22,37, 0.5);
  z-index: 970;

  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlertContainer = styled.div`
  width: 350px;
  height: 450px;
  background: #161625;
  border-radius: 18px;
  color: white;
  position: relative;
`;

export const AlertContent = styled.div`
  color: white;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title{
    font-size: 24px;
    position: relative;
    margin-bottom: 50px;
    font-weight: 700;
  }

  button{
    width: 250px;
    height: 58px;
    border-radius: 12px;
    
    cursor: pointer;
  }

  .icon{
    font-size: 60px;
    margin-bottom: 20px;
  }

  .yes{
    background-color: rgba(255, 0, 63, 0.2);
    color: rgba(255, 0, 63, 1); // rgba(255, 0, 63, 1)
    border: 1px solid rgba(255,0,63,0.15);

    transition: .3s;
    transition-property: color, background-color;

    :hover{
      color: white;
      background-color: rgba(255, 0, 63, .5);
    }
  }

  .cancel{
    margin-top: 30px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(0, 131, 104, 1);
    color: white;
  }
`;
