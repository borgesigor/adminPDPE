import styled from 'styled-components';

export const Header = styled.header`
  height: 100vh;
  width: 200px;
  background: #161625;
  position: fixed;
  color: white;
  top: 0;
  z-index: 998;
`;

export const HeaderContent = styled.div`
  margin-top: 42px;
  width: 100%;
  display: flex;
  justify-content: left;
  font-size: 14px;

  width: 100%;

  ul{
    width: 100%;
    li{
      padding: 20px;
      padding-right: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      opacity: 0.8;
      cursor: pointer;

      position: relative;

      :hover{
        opacity: 1;

        .arrow{
          transform: translateX(5px);
        }
      }

      ::after{
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        height: 1px;
        background: white;
        opacity: 0.1;
        margin-top: 70px;
      }

    }
  }

  .icon{
    font-size: 32px;
  }

  .left{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 8px;
  }

  .title{
    position: relative;
    top: 1px;
  }

  .arrow{
    font-size: 14px;
    opacity: 0.7;
    transition: .2s;
  }
`;