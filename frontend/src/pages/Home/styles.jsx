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
  width: 1100px;
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

const ContainerSection = styled.section`
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
  gap: 40px;
  width: 100%;
  padding: 40px 130px 60px;
    >h1{
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-family: 'Roboto Slab';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      }
`

export const Section = ({ children, title })=> {
  return (
    <ContainerSection>
      {title && <h1>{title}</h1>}
      {children}
    </ContainerSection>
  )
}