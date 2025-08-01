import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin-top: 20px;
  background-color: #ec6724cb;

  max-height: 370px; /* ajuste conforme necessário */
  overflow-y: auto;
  padding-right: 8px; /* espaço para scroll */
`;
