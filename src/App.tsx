import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import { Lesson } from './components/Lesson'
import { Sidebar } from './components/Sidebar'
import { Video } from './components/Video'
import { client } from './lib/apollo'

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Lesson/>
      <Video/>
    </div>
  )
}
 
export default App
