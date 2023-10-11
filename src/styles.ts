import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {margin: 0 auto;
  padding: 0;
  font-family: sans-serif;
  list-style-type: none;
}`

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #130f40;
  z-index: -1;
  overflow: auto;
`
export const Titulo = styled.h2`
  color: #fff;
  text-align: center;
  background-color: #171717;
  padding: 16px;
  border-radius: 20px;
  margin-left: 20%;
  margin-right: 20%;
`
export default GlobalStyle
