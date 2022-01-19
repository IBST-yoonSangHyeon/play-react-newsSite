import HdContainer from './hd';
import './App.css';
import './bootstrap.min.css';
import Hd2Container from './hd2';
import NavBar from './navbar';

//{ //width:398px;height:auto;}
function App() {
  return (
    <div className='container body-container'>
        {/* 헤드 시작 */}
        <div className='row justify-content-start border-red '>
          <HdContainer />
          <Hd2Container />
        </div>
        {/* 헤드 끝 */}
        {/* 헤드 메뉴 시작 */}
        <div className='row justify-content-center border-blue'>
          <NavBar />
        </div>
        {/* 헤드 메뉴 끝 */}
    </div>
  );
}

export default App;
