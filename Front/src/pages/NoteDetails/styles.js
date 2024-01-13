import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    overflow-y: scroll;
    margin: 0 123px;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  overflow-y: auto;
  max-height: 500px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  margin: 40px 0;
  padding: 0 10px;

  > header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    > a {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    align-self: center;
    >span {
      display: block;
      }
    }
  }
 `
