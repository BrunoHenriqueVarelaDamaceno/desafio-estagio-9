import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};

  border-radius: 10px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    margin-right: 16px;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    margin-right: 16px;
  }

  > input {
    height: 56px;
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE_900};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
