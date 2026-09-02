import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const toggleDetails = () => {
    setIsOpen(prev => !prev);
  }
  return (
    <>
      <button aria-expanded={isOpen} onClick={toggleDetails}>{isOpen ? 'Hide' : 'Open' }</button>
      {isOpen && (
        <div>
          <p>Here are some additional details</p>
        </div>
      )}
    </>
  )
}

export default App
