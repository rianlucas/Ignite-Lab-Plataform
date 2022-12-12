import { gql } from '@apollo/client/core'
import { canUseLayoutEffect } from '@apollo/client/utilities'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { client } from './lib/apollo'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id 
      title
    }
  }
`

function App() {
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY
    }).then(response => {
      console.log(response.data)
    })
  }, [])

  return (
    <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
  )
}
 
export default App
