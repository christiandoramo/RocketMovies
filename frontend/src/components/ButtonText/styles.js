import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.GRAY_DARK : theme.COLORS.GRAY_MEDIUM};

  border: none;
  font-size: 16px;
`