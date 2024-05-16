import styled from "styled-components";

export const CardWrapper = styled.div`
  border:1px solid;
  border-color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height:150px;
  padding:2px 10px;
  border-radius: 5px;
  background-color: #ffffff33;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  text-align: center;
  @media (min-width: 716px) and (max-width: 739px) {
    padding:10px 5px;
    width: 40vw;
    gap: 2px;
    height:40vh;
  }
  @media (min-width: 740px) and (max-width: 839px) {
    padding:20px 5px;
    width: 30vw;
    gap: 2px;
    height:22vh;
  }

  @media (min-width: 840px) and (max-width: 890px) {
    padding:10px 5px;
    width: 30vw;
    gap: 2px;
    height:20vh;
  }
  @media (min-width: 470px) and (max-width: 715px) {
    padding:10px 5px;
    width: 28vw;
    height:25vh;
  }
  @media (min-width: 291px) and (max-width: 469px) {
    width: 26vw;
    height:10vh;
  }
  @media (max-width: 290px) {
    padding:2px, 5px;
    width: 30vw;
    height:25vh;
  }
  @media (min-width: 891px) and (max-width: 1030px) {
    padding:2px 1px;
    width: 30vw;
    height:25vh;
  }

  @media (width: 1024px) and (height: 600px) {
    padding:2px 1px;
    width: 40vw;
    height:42vh;
  }

`;