import User from './components/User';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      
      <User 
      name="Takasi Nyande"
      uni="Coventry University"
      profession="Fullstack Developer"
      skills="HTML, CSS, Bootstrap, JQuery, MongoDB, JavaScript, React"
      />

      <Button name="Login"/>
      <Button name="Signin"/>
      
    </div>
  );
}

export default App;
