import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin: 48px 120px;
  }
`;

export const Form = styled.form`
  width: 100%;

  > header {
    button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      
      a {
        text-decoration: none;
      }

      span {
        color: ${({ theme }) => theme.COLORS.PINK_100};
        margin-left: 8px;
        font-size: 16px;
      
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK_100};
        font-size: 16px;
      }
    }

    > h1 {
      margin-top: 24px;
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      color: ${({ theme }) => theme.COLORS.WHITE_800};
      margin-bottom: 40px;
    }
  }

  > div {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  > section {
    background-color: transparent;
    padding: 0;
    margin: 0 0 40px 0;

    > h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      margin-bottom: 24px;
      font-size: 20px;
      line-height: 26px;
    }

    > div {
      border-radius: 8px;
      gap: 24px;
      padding: 12px;
      display: flex;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  > #button {
    > button:first-child {
      color: ${({ theme }) => theme.COLORS.PINK_100};
      background-color: ${({ theme }) => theme.COLORS.BLACK_100};
      margin-bottom: 40px;
    }
  }
`;
