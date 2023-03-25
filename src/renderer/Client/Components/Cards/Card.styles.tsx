import styled from 'styled-components';

export const CardContainer = styled.div`
  
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 32px;
  height: 100%;
  color: white;

  .semResultado{
    opacity: 0.5;
  }
`;

export const CardObject = styled.div`
  color: white;
  min-width: 230px;
  min-height: 300px;
  width: 230px;
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  position: relative;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0px 10px 10px -3px rgba(0,0,0,0.18);
  cursor: pointer;
  transition: .2s;
  /* background: red; */

  overflow: hidden;
  
  display: flex;
  flex-direction: column;

  :hover{
    transform: translateY(-3px);
  }

  :active{
    transform: scale(1.0);
  }

  span{
    position: relative;
    left: 16px;
    font-weight: 600;
  }

  .infos-card{
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: left;
    flex-direction: column;
  }

  .title{
    font-size: 20px;
  }

  .desc{
    font-size: 14px;
    margin-top: 4px;
    opacity: 0.5;
    font-weight: 500;
    line-height: 17px;
  }

  .padre{
    font-size: 12px;
  }

  .img-card{
    height: 200px;
    position: relative;
    overflow: hidden;
  }

  img{
    height: 100%;
    width: 100%;

    transition: .1s;
    transition-property: transform;

    object-fit: cover;
  }
`;
