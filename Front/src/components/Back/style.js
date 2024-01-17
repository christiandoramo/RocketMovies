import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    justify-content: center;
    gap: 8px;
    align-self: flex-start;
    cursor: pointer;
    >span {
      display: block;
    }
  `

