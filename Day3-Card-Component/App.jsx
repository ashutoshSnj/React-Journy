import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'
import hashsetimg from './assets/HashSet.png'
import treesetimg from './assets/treeset.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card img={hashsetimg} name="HashSet" text="it used to store the non-Duplicate Data" click="https://www.linkedin.com/posts/ashutosh-fullstackdeveloper_hashset-collectionsframework-datastructures-activity-7343265384055099394-pROT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0rZqQBq1OIu6LwzNZj63GdbUFPe229gRo"/>
    <Card img={treesetimg} name="TreeSet"text="When you want to store data in sordet" click="https://www.linkedin.com/posts/ashutosh-fullstackdeveloper_treeset-activity-7344352593114034178-yogB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0rZqQBq1OIu6LwzNZj63GdbUFPe229gRo"/>
    </>
  )
}

export default App
