import React from 'react'
import Sidebar1 from './components/sidebar/Sidebar1'
import Main from './components/mainPage/Main'
import ContextProvider from './context/Context'

const App = () => {
  return (
    <ContextProvider>
      <Sidebar1 /> 
      <Main/>
    </ContextProvider>
  )
}
export default App
 