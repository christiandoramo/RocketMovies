import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900} ;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: none;
  border-radius: 10px;
  padding: 32px;
  display:flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 223px;
  >p{
    color: theme.COLORS.GRAY;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
    ${'' /* word-wrap: break-word;
    overflow: hidden;
    ${'' /* white-space: nowrap;
    flex-grow: 1;
    max-width: 100%;
    max-height: 50%;
    text-overflow: ellipsis; */}
    max-width: 100%;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  >div{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;
    max-width: 100%;
  }

  > h1 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    ${'' /* flex: 1; */}
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    max-width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    max-width: 100%;
    margin-top: 16px;
    flex-grow:1;
  }
  
`