import './App.css';
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <div className='main-wrapper'>
        <Header/>
        <LeftSidebar/>
        <MainContainer/>
    </div>
  );
}

export default App;
