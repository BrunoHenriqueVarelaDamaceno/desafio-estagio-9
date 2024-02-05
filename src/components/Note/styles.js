import styled from "styled-components";

export const Container = styled.div`
  > svg {
    margin-bottom: 16px;
    margin-right: 4px;
    width: 12px;

    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  > svg:nth-child(6) {
    margin-right: 4px;
    width: 11px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`