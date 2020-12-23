import styled from 'styled-components/native'

const color = '#121212'

export const Container = styled.View`
  width: 100%;
  padding-top: 3px;
`

export const Title = styled.Text`
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 10px 5px;
  background-color: #f8f8f8;
  color: ${() => color};
`

export const Description = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px 12px;
`

interface ContentProps {
  icon: boolean
}

export const Content = styled.Text<ContentProps>`
  font-size: 13px;
  color: ${() => color};
  padding-left: ${props => props.icon ? '3px' : '15px'};
`
