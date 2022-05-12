import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50vh;
  background-color: #159671;
  top: 0;
  z-index: -1;
`;

export const TableWrapper = styled.div`
  padding: 18px;
  background-color: #fff;
  border-radius: 10px;
  max-width: ${props => props.name === 'product' ? '1200px' : '800px'};
  margin: 30px auto;
  box-shadow: 2px 4px 32px rgba(21, 150, 113, .2);
  z-index: 2;

  @media screen and (max-width: 800px) {
    max-width: 95%;
    margin: 10vh auto;
  }

  .table_item {
    border-bottom: 1px solid #141272;
    padding: 5px 0 5px 13px;

    a {
      color: #141272;

      &:hover {
        color: #159671;
        text-decoration: none;
      }
    }
  }
`;

export const LoaderBox = styled.div`
  border: 1px solid red;
  width: calc(800px - 36px);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;