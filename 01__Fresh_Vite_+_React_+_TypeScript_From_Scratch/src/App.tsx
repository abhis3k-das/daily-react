import './App.css'
import ProfileCard from './components/ProfileCard';

function App() {

  return <main>
    <h1>Profiles : </h1>
    <ProfileCard name="Test-1" role="Developer" experience={4}/>
    <ProfileCard name="Test-2" role="Product Manager" experience={6}/>
  </main>
}

export default App
