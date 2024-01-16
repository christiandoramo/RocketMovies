import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  .top-section{
        >h2{
          display:flex;
          wrap: nowrap;
          font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;
        }
        width:100%;
        display: flex;
        align-items: space-between;
        justify-content: space-between;
      }
`



export const Content = styled.div`
  overflow-y: auto;
  display: flex;
  gap: 25px;
  flex-direction: column;
  height:400px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const CreateNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 13.5px 32px;
  border-radius: 8px;

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

  svg {
    margin-right: 8px;
  }
`