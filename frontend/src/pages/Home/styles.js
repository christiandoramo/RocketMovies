import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`



export const Content = styled.div`
  ${'' /* padding: 0 64px; */}
  overflow-y: auto;
  max-height:500px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  ${'' /* theme.COLORS.GRAY_DARK}; */}
`
export const CreateNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 13.5px 32px;
  border-radius: 8px;

  svg {
    margin-right: 8px;
  }
`