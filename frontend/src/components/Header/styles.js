import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`

  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  padding: 24px 123px;
  align-items: center;
  gap: 64px;
  
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap:10px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    cursor: pointer;
  }


  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
      text-align:right;
      cursor: pointer;
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      cursor: pointer;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${'' /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; */}

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  }
`

export const Search = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`