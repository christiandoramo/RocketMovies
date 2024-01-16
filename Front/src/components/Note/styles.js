import styled from 'styled-components'

export const Container = styled.button`
  ${'' /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; */}
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900} ;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: none;
  border-radius: 10px;
  padding: 32px;
  display:flex;
  width: 100%;
  flex-direction: column;
  flex:1;
  gap: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  >p{
    color: theme.COLORS.GRAY;
    font-family: 'Roboto';
    text-overflow: ellipsis;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: justify;

display: -webkit-box;
  -webkit-line-clamp: 3; /* número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${'' /* min-height: 60px;
  max-height: 60px;  */}
  }
  
  >div{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;
  }

  > h1 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 16px;
  }
  
`