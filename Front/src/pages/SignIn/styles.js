import styled from 'styled-components';

export const Container = styled.div`
  height: 100dvh;

  display: flex;
  align-items: stretch;
  text-align: left;
`

export const Form = styled.form`
  padding: 240px 134px ;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap:8px;

  text-align: center;

  > div{
    text-align: left;
    > h1 {
    wrap: nowrap;
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_MEDIUM};
  }
  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url('/images/cinema.jpg') no-repeat center center;
  background-size: cover;
`