import React from 'react'


import { AfterNavLinks, NavHamburger, NavWrapper } from './components'

export const DefaultNav: React.FC = () => {
  return (
    <NavWrapper>
      <nav className={`nav__wrap`}>
        {Array.from({ length: 3000 }).map((_, index) => (
          <div key={index}>
            <AfterNavLinks />
          </div>
        ))}
      </nav>
      <NavHamburger />
    </NavWrapper>
  )
}
