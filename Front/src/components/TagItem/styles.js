import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink:0;

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.COLORS.GRAY_LIGHT}` : "none"};

  border-radius: 10px;
  padding: 16px;
  gap:16px;

  > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;


    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`