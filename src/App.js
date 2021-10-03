import './App.css';
import ProfileCard from './Profile/Profile';

function App() {
  const showAlert = () => {
    alert('Hello');
  }
  return (
    <div className="App">
      <ProfileCard fullName="wael" Profession="Profession" Bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." showAlert="showAlert">/pic.jpg</ProfileCard>
    </div>
  );
}

export default App;
