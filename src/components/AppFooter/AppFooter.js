import React from 'react'
import styled from 'styled-components'

const AppFooter = () => (
  <AppFooter.Styled className='app-footer-component'>
    <span className='company-title'>Hilton</span>
    <span>Copyright &copy; 2019&nbsp;<strong>Hilton</strong>, LLC. All Rrights Reserved.</span>
  </AppFooter.Styled>
)

AppFooter.Styled = styled.footer`
  align-items: center;
  background-color: #031323;
  color: white;
  display: flex;
  flex-direction: row;
  height: 54px;
  padding-left: 100px;
  padding-right: 10px;

  .company-title {
    flex-grow: 1;
  }
`

export default AppFooter
