import styled from 'styled-components'

export const Container = styled.span`
margin-right: 8px;
padding: 5px 16px;
height: 24px;
border-radius: 8px;

font-size: 12px;
line-height: 14px;
text-align: center;
background-color: ${({ theme }) => theme.COLORS.BLACK_100};
color: ${({ theme }) => theme.COLORS.WHITE_600};
`