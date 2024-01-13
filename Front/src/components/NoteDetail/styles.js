import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE_SHINY};
  font-family: 'Roboto Slab';
  max-height: 581px;
  display:flex;
  flex-direction: column;
  gap: 12px;
  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
  }
  .user-date-info {
    font-family: 'Roboto';
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:10px;
    margin-bottom: 48px;
  }
  
  >div{
    display: flex;
    gap: 6px;
  }

   h1 {
    text-align: left;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 36px;
    font-style: normal;
    font-weight: 500;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-bottom: 48px;
  }

  .title-rating{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:10px;
    margin-bottom: 24px;
  }
  .rating{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  p{
    font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: justify;
  }
`