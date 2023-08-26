import logo from './logo.svg';
import './App.css';
import EmailForm from './shared/emailForm/EmailForm'
import AboutPage from './aboutPage/AboutPage'

function App() {
  return (
    <div className="App">
	<AboutPage/>
        <EmailForm/>
    </div>
  );
}

export default App;
