import styled from "styled-components";

export const Container = styled.header`

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLACK_200};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 120px;
  gap: 64px;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
  
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > a img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BLACK_200};
    margin-left: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    

    button {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      background: none;
      border: none;
      display: grid;
      place-content: end;
    }

    strong {
      width: max-content;
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE_800};
    }
  }
`;
