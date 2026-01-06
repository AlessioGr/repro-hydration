'use client'
import React from 'react'


export const ClientComponent: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props
  return (
    <div className="ClientComponent">
        {children}
    </div>
  )
}