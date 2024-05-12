import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 240px 130px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:8px;

  text-align: center;
  >div{
    text-align: left;
    > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_MEDIUM};
  }

  }

  > a {
    margin-top: 42px;
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    justify-content: center;
    gap: 8px;
    align-self: center;
    >span{
      display: block;
    }
  }

`

export const Background = styled.div`
  flex: 1;
  background: url('/images/cinema.jpg') no-repeat center center;
  background-size: cover;
`