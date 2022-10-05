import './App.css';
import Profile from './profile/Profile';
function App() {
  const handleName= () => { return alert("hello") };
  return (
    <div className="App">
      <Profile FullName="Aymen" bio="i'm a developer" profession="student" handleName={handleName}>
        <img src="https://pic.clubic.com/v1/images/2025258/raw?fit=max&width=1200&hash=13aba7d67b5813a711b921461303d0768e5feac9" alt="noimage" />
      </Profile>

    </div>
  );
}

export default App;
