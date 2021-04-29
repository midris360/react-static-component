// import logo from './logo.svg';
import './App.css';
import './styles.css'
import Average from './components/Average'
import Reviews from './components/Reviews'
import Sentiment from './components/Sentiment'
import Sidebar from './components/Sidebar'
import Visitors from './components/Visitors'


function App() {
  return (
  <div className="container">
      <div className="sidebar-1"><Sidebar  /></div>
      <Reviews  /> 
      <Average  /> 
      <Visitors /> 
      <Sentiment />
    </div>

    );
 }

export default App;
