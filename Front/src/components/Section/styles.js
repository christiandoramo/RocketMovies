import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 60px;
  width: 100%;

  ${'' /* padding: 40px 130px 60px; */}
    >h1{
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-family: 'Roboto Slab';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      text-align: left;
      line-height: normal;
      width: 100%;
      }
`