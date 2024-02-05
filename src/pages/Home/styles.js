import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  height: 100vh;
  margin: 0 120px;
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

  > a {
    text-decoration: none;
  section {
    margin-bottom: 24px;

    > svg {
      width: 12px;
      height: 12px;
    }

    > p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
`;

export const Title = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
  padding: 0 120px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_900};
    font-size: 32px;
    line-height: 42px;
    font-weight: 400;
  }

  > button {
   
    height: 48px;
    padding: 0 32px;
    display: flex;

    gap: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
    > svg {
      width: 16px;
      height: 16px;
    }

    > span {
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
