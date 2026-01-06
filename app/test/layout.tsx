import React from 'react'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => {
  return (
    <html>
      <body>
       {children}
      </body>
    </html>
  )
}

export default Layout
