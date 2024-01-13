import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    padding: 63px 128px 63px;
    width: 100%;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    > a {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    justify-content: center;
    gap: 8px;
    align-self: center;
    >span {
      display: block;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(3) {
    margin-top: 8px;
  }
  > div:nth-child(4) {
    margin-top: 24px;
  }
  > div:nth-child(5) {
    margin-top: 8px;
  }
  > button{
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`