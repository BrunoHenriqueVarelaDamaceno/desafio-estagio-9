import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  > main {
    margin: 0 120px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK_100};
    border-radius: 8px;
  }

    > button {
      margin: 24px 0;
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

    > .title {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;

      h1 {
        color: ${({ theme }) => theme.COLORS.WHITE_800};
        font-weight: 500;
        font-size: 36px;
      }

      svg {
        width: 20px;
        height: 20px;
        margin: auto 4px;
      }
    }

    > .creator {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK_100};
      }

      p {
        color: ${({ theme }) => theme.COLORS.WHITE_800};
      }
    }

    > .tag {
      margin: 40px 0;
    }
    > .content{
    p {
      color: ${({ theme }) => theme.COLORS.WHITE_800};
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: justify;
      margin-bottom: 24px;
      margin-right: 8px;
    }
  }

  }
`;
