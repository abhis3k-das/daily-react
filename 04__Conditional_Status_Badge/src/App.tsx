import './App.css'
import Badge from './components/Badge';

function App() {

  const count = 0;
  return <>
    <Badge status='idle' />
    <Badge status='error' />
    <Badge status='loading' />
    <Badge status='success' />
    {/* Bug demo: this renders 0 when count is 0. */}
    {/* {count && <Badge status='success' />} */}
    {count === 0 && <Badge status='loading' compact={true}/>}
    
  </>
}

export default App
