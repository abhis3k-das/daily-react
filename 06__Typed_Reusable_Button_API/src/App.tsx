import type React from 'react';
import './App.css'
import Button from './components/Button/Button';

function App() {

  const formSubmit = (e : React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Form");
  }

  const testFn = () => {
    console.log("Button Clicked");
  }
  return <form onSubmit={formSubmit}>
    <Button type="submit" tone="primary" loading={false}>Submit</Button>
    <Button type="button" tone="danger" disabled={false} onClick={testFn}>Click</Button>
  </form>
}

export default App;