import React from 'react'


import {  NavWrapper } from './components'

export const DefaultNav: React.FC = () => {
  return (
    <NavWrapper>
      <nav className={`nav`}>
        {Array.from({ length: 3000 }).map((_, index) => (
          <div key={index}>
             Label
          </div>
        ))}
      </nav>
    </NavWrapper>
  )
}
