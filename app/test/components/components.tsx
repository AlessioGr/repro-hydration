'use client'
import React from 'react'


export const NavWrapper: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props
  return (
    <aside
      className="navWrapper">
        {children}
    </aside>
  )
}