import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: max-content;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 16px;
  gap: 16px;
  margin-right: 8px;
  
  > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE_800};
  }

  > p {
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
