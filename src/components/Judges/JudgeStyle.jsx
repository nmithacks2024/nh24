import styled from "styled-components";
export const CardWrapper = styled.div`
  border-color:grey;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height:auto;
  text-align: center;
  @media (min-width: 470px) and (max-width: 715px) {
    width:12rem;
    padding:25px 1px;
  }
  @media (min-width: 291px) and (max-width: 349px) {
    width:9rem;
    padding:25px 1px;
  }
  @media (min-width: 350px) and (max-width: 380px) {
    width:9rem;
    padding:25px 1px;
  }
  @media (min-width: 381px) and (max-width: 480px) {
    width:10rem;
    padding:25px 1px;
  }
`;

