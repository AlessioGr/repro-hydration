'use client'
import React from 'react'

export const NavHamburger = () => {
  return (
      <span>hamburger</span>
  )
}

export const NavWrapper: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props
  return (
    <aside
      className={'nav'}>
      <div className={`nav__scroll`} >
        {children}
      </div>
    </aside>
  )
}

export const AfterNavLinks = () => {
  return (
    <div>
      <h4 className="nav__label">
        Label
      </h4>
    </div>
  )
}
