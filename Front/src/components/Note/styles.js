import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  ${'' /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; */}
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900} ;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: none;
  border-radius: 10px;

  padding: 32px;

  display:flex;
  flex-direction: column;
  gap: 12px;
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
    gap: 6px;
  }

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 16px;
  }
  
`