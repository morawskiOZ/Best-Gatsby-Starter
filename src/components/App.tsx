import * as React from 'react'
import { ReactElement } from 'react'
import { ContactInput } from './Input/Input'

export const App = (): ReactElement => {
  return <ContactInput onSearch={() => console.log('test')} />
}
