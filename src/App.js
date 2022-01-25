import HdContainer from './hd';
import './App.css';
import './bootstrap.min.css';
import Hd2Container from './hd2';
import NavBar from './navbar';
import { useState } from 'react';
import Movie from './movie';

//{ //width:398px;height:auto;}
function App() {
  

  return (
    <div className='container body-container'>
        {/* 헤드 시작 */}
        <div className='row justify-content-start '>
          <HdContainer />
          <Hd2Container />
        </div>
        {/* 헤드 끝 */}
        {/* 헤드 메뉴 시작 */}
        <div className='row justify-content-center' style={ {backgroundColor : 'red'} }>
          <NavBar />
        </div>
        {/* 헤드 메뉴 끝 */}
        {/* 바디 시작 */}
          {/* 영상 wrap 시작*/}
          <div className='row body-contents mt-1 mb-1' >
            <Movie />
          </div>
          {/* 영상 wrap 끝*/}
        {/* 바디 */}
    </div>
  );
}

export default App;
