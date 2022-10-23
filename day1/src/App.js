import './App.css';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import {useState} from 'react';

function App(props) {
  // 배열의 구조분해 할당

  const [mode, setMode] = useState('Home');
  const [selectedId, setSelectedId] = useState(null);
  let article = null;
  let datas = [
    {id: 1, title:'Html', desc:'하이퍼 텍스트 마크업 언어는 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다.'},
    {id:2, title:'Css', desc: '종속형 시트 또는 캐스케이딩 스타일 시트는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이고, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 기본 파일명은 style.css이다.'},
    {id:3, title: 'javaScript', desc: "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다."},
    {id:4, title:'react', desc:'리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다. 리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다.' }
  ];

  if(mode === 'Home') {
    article = (
      <Article title="Home" desc="월드 와이드 웹은 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간을 말한다. 간단히 웹이라 부르는 경우가 많다. 이 용어는 인터넷과 동의어로 쓰이는 경우가 많으나 엄격히 말해 서로 다른 개념이다." />
    )
  } else if(mode === "Page") {
    let filterList = datas.filter((datas)=>{
      return datas.id === selectedId;
    })
    console.log(filterList);

    // 배열로 들어오기 때문에 주의해야 함

    article = <Article title={filterList[0].title} desc={filterList[0].desc} />
  }

  return (
    <div className="wrap">
      <Header changeMode={() => {setMode("Home")}} />
      <Nav 
        datas={datas}  
        changeMode={(id) => {
          setMode("Page")
          setSelectedId(id);
        }}
      />
      {article}

    </div>
  );
}

export default App;
