import styled from 'styled-components'
import Backgroundimg from '../../assets/backgroundimg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-weight: 700;
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.WHITE_800}
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE_700};
  }

  > button {
    margin-top: 16px;
  }

  > a {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    text-decoration: none;
  }
`

export const Background = styled.div`
flex: 1;
background: url(${ Backgroundimg }) no-repeat center center;
background-size: cover;
`