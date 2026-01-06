'use client'
import React from 'react'


export const ClientComponent: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props
  return (
    <aside
      className="ClientComponent">
        {children}
    </aside>
  )
}