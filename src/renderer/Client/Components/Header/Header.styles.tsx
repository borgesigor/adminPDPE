import styled from 'styled-components';

export const Header = styled.header`
  -webkit-user-select: none;
  -webkit-app-region: drag;
  height: 32px;
  background: #161625;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;

export const HeaderContent = styled.div`
  padding: 0 0 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const HeaderLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;

  opacity: 0.9;

  .headerLeftLogo{
    display: flex;
    align-items: center;

    img{
      width: 28px;
    }
  }

`;

export const HeaderCenter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  opacity: 0.4;

  span{
    font-size: 11px;
    margin-left: 8px;
    position: relative;
    top: 1px;
  }

`;

const windowFunctionPadding = "16px"

export const HeaderRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  flex: 1;

  button{

    cursor: pointer;

    -webkit-app-region: none;

    display: flex;
    align-items: center;

    height: 100%;
    padding-left: ${windowFunctionPadding};
    padding-right: ${windowFunctionPadding};
    background: #0F0F1E;

    span{
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 15px;
    }

    :nth-child(2){
      span{
        font-size: 12px;
      }
    }

    :nth-child(1), :nth-child(2){
      span{
        position: relative;
        top: 1px;
      }

      :hover{
        background: #2F2F3E;
      }
    }

    :nth-child(3){
      :hover{
        background: #FF003F;
      }
    }
  }

`;
