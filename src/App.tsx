import { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section.tsx'
import Counter from './components/Counter.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="React + TypeScript" />
      <Section title="This is TypeScript">
        Hello my friend...!
      </Section>
      <Counter />
    </>
  )
}

export default App
