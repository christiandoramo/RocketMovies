import styled from 'styled-components'

export const Container = styled.section`
    >h1{
      color: ${({theme}) => theme.COLORS.GRAY};
      font-family: 'Roboto Slab';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    >div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 50px 123px 40px;
    > h2 {
    ${'' /* border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; */}

    ${'' /* padding-bottom: 16px;
    margin-bottom: 28px; */}

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  }


`