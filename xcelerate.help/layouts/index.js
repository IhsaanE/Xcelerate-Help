import React from 'react'
import { Footer } from 'components'
import { MenuBar } from 'components'

const DefaultLayout = ({ children }) => (
  <div>
    <main>{children}</main>
    <Footer />
  </div>
)

export default DefaultLayout
