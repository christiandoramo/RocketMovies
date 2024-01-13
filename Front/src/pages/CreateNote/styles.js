import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    overflow-y: auto;
  }

  .tags {
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }
  .grade-title{
    display: flex;
    gap:56px;
    flex-shrink:1;
    margin-bottom: 49px;
  }
`

export const Form = styled.form`
  padding:40px 123px;

  > textarea{
    min-height:  273;
  }

  > section{
    margin: 0;
    margin-top: 40px;
    text-align: left;
    color:  ${({ theme }) => theme.COLORS.GRAY};

    >div{
      margin: 24px 0 40px 0;
      display:flex;
      padding: 16px;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 24px;
      background-color: ${({ theme }) => theme.COLORS.SUPER_BLACK};
      border-radius: 8px;
    }
  }

  > header {
    display: flex;
    align-items: flex-start;
    flex-direction:column;
    gap:24px;

    margin-bottom: 40px;
    > a {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    justify-content: center;
    gap: 8px;
    align-self: flex-start;
    >span {
      display: block;
      }
    }
  }
  .options{
    display:flex;
    align-items:center;
    gap:40px;
    > button:nth-child(1){
      color: ${({ theme }) => theme.COLORS.GRAY_DARK};
      background-color: ${({ theme }) => theme.COLORS.SUPER_BLACK};
    }
  }
`
