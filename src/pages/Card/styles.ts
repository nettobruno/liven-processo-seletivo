import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding-bottom: 100px;
  width: 100%;
  min-height: 100vh;

  h1 {
    color: #08012a;
    margin-top: 100px;
  }
`;

export const Header = styled.header`
  background-color: #08012a;

  height: 10vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
  }
`;

export const SectionProducts = styled.div`
  border: 1px solid red;
`;
