import HdContainer from './hd';
import './App.css';
import './bootstrap.min.css';
import Hd2Container from './hd2';
import NavBar from './navbar';
import { useState } from 'react';
import Movie from './movie';
import LeftBox from './leftbox';

//{ //width:398px;height:auto;}
function App() {
  
  let [Leftdata1, setLeftData1] = useState({
    boxHeader : false,
    boxHeaderSubject : '',
    backGroundColor : false,
    data : [
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/1949227467_hFNRkagI_d7f0ba99db8ab1b6d40ae3c47c4a8e59ac783edb.jpg",
        imgCSS : {
          imgWidth : '224px',
          imgHeight : '146px',
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-8'    
        },
        subject : "중소기업 살리기 지원 프로젝트  (주)보아비다 브랜드 전속모델 발탁 일자리창출 지원",
        content : "[LBMA STAR]모델 일자리 창출과 중소기업 우수브랜드 활성화 지원목적 사업의 일환으로 지난 가평군에 공식후원으로 개최된 제9회 럭셔리브랜드 모델어워즈 월드파이널 최종 우승자 러시아 국적의 톱 모델 마리(Anukova Mari)를 2021년도 디자..."
      },
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/1949227467_Eb09iszo_ea4d564e8f127cbff5bd8c33908e81b3b378f523.jpg",
        imgCSS : {
          imgWidth : '224px',
          height : '146px',
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-8'    
        },
        subject : "[여론조사]  이재명 34.7%·윤석열 45.7%…격차 11%p '오차범위 밖'",
        content : "캐스팅보트 쥔 청년층…20대 李 21.6%·尹 48.6%, 30대 李 31.2%·尹 45.4%지역별로 서울·인천·경기 '수도권' 박빙은 주목정당 지지도는 민주당 30.2%, 국민의힘 40.4%로 직전 조사보다 격차가 더 벌어져▲미디어리서치는 OB..."
      },
    ]
  });

  let [Leftdata2, setLeftData2] = useState({
    boxHeader : false,
    backGroundColor : true,
    boxHeaderSubject : '',
    data : [
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/1949227467_975BOIl1_ace2a9496a5c19d6269eaf369897fb9c5ae3f09d.jpg",
        imgCSS : {
          imgWidth : '168px', 
          imgHeight : '126px',
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-8'    
        },
        subject : "유럽패션스쿨모다랩 학장 안동연,국내 최초 스토리가 있는 키즈 영어미술 전시회를 기획하며.....",
        content : "국내 최초 스토리가 있는 키즈 영어미술 전시회를 기획하며...To educate a child is to turn walls into doors. ▲유럽패션스쿨모다랩 학장 안동연 ©LBMA STAR 아이를 교육하는 것은 벽을 문으로 바꾸는..."
      },
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/33480567_WD7qinSQ_18628f201d41348dbff66077e8936f00b540d209.jpg",
        imgCSS : {
          imgWidth : '168px', 
          height : '126px',
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-8'    
        },
        subject : "최춘식“2021년 12월 PCR 1742만건 1년 10개월새 126배 폭증”",
        content : "[LBMA STAR]국회 국민의힘 최춘식 의원(경기 포천시·가평군, 행정안전위원회)은 연일 대규모의 코로나19 확진자가 발생하고 있는 가운데, 지난해 12월 한 달 PCR 검사건수만 최초 검사 시작 이후 1년 10개월새 126배나 폭증했다고 밝혔다. ..."
      },
    ]
  });

  let [Leftdata3, setLeftData3] = useState({
    boxHeader : true,
    backGroundColor : false,
    boxHeaderSubject : 'fashion',
    data : [
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/1954098754_dLn4jKCE_af7017f7e274ad39a2c62557bb83a1ec337d4960.jpg",
        imgCSS : {
          imgWidth : '100px', 
          imgHeight : '68px', 
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-7'    
        },
        subject : "당신의 꿈과 열정을 응원하는 브랜...",
        content : "[LBMA STAR]당신의 꿈과 ..."
      },
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/33480567_RUA07olJ_a78c22e9ed515fe3be0bc3a543def84ce10bb285.jpg",
        imgCSS : {
          imgWidth : '100px',  
          height : '68px',
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-7'    
        },
        subject : "몽클레르 지니어스 2021 2 몽...”",
        content : "[LBMA STAR]이탈리아 럭셔..."
      },
    ]
  });

  let [Leftdata4, setLeftData4] = useState({
    boxHeader : true,
    backGroundColor : false,
    boxHeaderSubject : 'partner',
    data : [
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/1949227467_4RJXEuTo_0b7cfb552f000f67a2f854b796f7fb71935a222b.jpg",
        imgCSS : {
          imgWidth : '105px', 
          imgHeight : '', 
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-6'    
        },
        subject : "당신의 꿈과 열정을 응원하는 브랜...",
        content : "[LBMA STAR]당신의 꿈과 ..."
      }
    ]
  });

  let [Leftdata5, setLeftData5] = useState({
    boxHeader : true,
    backGroundColor : false,
    boxHeaderSubject : 'award',
    data : [
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/33480567_DfOik2cu_8820db74bad7dc3c321e46e4f2301114bf1337c7.jpg",
        imgCSS : {
          imgWidth : '100px',  
          imgHeight : '68px', 
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-6'    
        },
        subject : "제21회 이인성미술상’수상자 강요...",
        content : "[LBMA STAR]대구미술관은 ..."
      }
    ]
  });

  let [Leftdata6, setLeftData6] = useState({
    boxHeader : true,
    backGroundColor : false,
    boxHeaderSubject : 'travel',
    data : [
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/33480567_7l0zVm9q_d30debed6ba1606ee85acf72e446fe7a32413704.JPG",
        imgCSS : {
          imgWidth : '100px',   
          imgHeight : '68px', 
          imgCol : 'col-4'
        },
        contentCSS : {
          contentCol : 'col-6'    
        },
        subject : "가평군 자라섬 남도가 전하는 꽃의...",
        content : "[LBMA STAR]가을시즌, 가..."
      }
    ]
  });

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
          {/* 중간 1 시작 */}
          <div className='row body-contents mt-3order-bottom'>
            {/* left box (Leftdata1) 시작 */}
            <div className='col-8 '>
              <LeftBox data={Leftdata1}/>
            </div>
            {/* left box (Leftdata1) 끝 */}


            <div className='col-4 border-blue'>

            </div>
          </div>
          {/* 중간 1 끝 */}
          {/* 중간 2 시작 */}
          <div className='container border-red body-container '>
            <div className='row border-blue'>
              {/* 중간 2의 왼쪽 박스들 시작 */}
              <div className='col-6 '>
                <div className='container body-container m-0'>
                  <div className='row'>
                    {/* left box (Leftdata2) 시작 */}
                    <div className='col-12'>
                      <LeftBox data={Leftdata2}/>
                    </div>
                    {/* left box (Leftdata2) 시작 */}

                    {/* 광고 시작 */}
                    <div className='col-12'>
                      이미지
                    </div>
                    {/* 광고 끝 */}

                    {/* fassion box 시작 */}
                    <div className='col-6'>
                      <LeftBox data={Leftdata3}/>
                    </div>
                    {/* fassion box 끝 */}

                    {/* partner box 시작 */}
                    <div className='col-6'>
                      <LeftBox data={Leftdata4}/>
                      광고 이미지
                    </div>
                    {/* partner box 끝 */}

                    <div className='col-6'>
                      광고 이미지
                    </div>

                    {/* model box 시작 */}
                    <div className='col-12'>
                      
                    </div>
                    {/* model box 시작 */}

                    {/* award box 시작 */}
                    <div className='col-6'>
                      <LeftBox data={Leftdata5}/>
                    </div>
                    {/* award box 시작 */}

                    {/* travel box 시작 */}
                    <div className='col-6'>
                      <LeftBox data={Leftdata6}/>
                    </div>
                    {/* travel box 시작 */}
                  </div>
                </div>
              </div>
              {/* 중간 2의 왼쪽 박스들 끝 */}
              <div className='col-6 border-black'>

              </div>
            </div>
          </div>
          {/* 중간 2 끝 */}
        {/* 바디 */}
    </div>
  );
}

export default App;
