import $ from 'jquery';
import {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
function Article(props){
  return <article>
  <div className="Content">
    <br></br>
  <h2>{props.title}</h2>
  <a>{props.body}</a>
  <div><img className="ArtPho" src={props.photo}></img></div>
  <a>{props.date}</a>
  </div>
  </article>
}
function Create(props){
  
  return <article><div className="CC">
    <h2>Create</h2>
    <form id="data" onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      const date = event.target.date.value;
      props.onCreate(title,body,date);
      
    }}>
      <p><input id="input" type="text" name="title" placeholder="title"/></p>
      <p><input id="input" type="text" name="date" placeholder="date"/></p>
      <p><textarea id="text" name="body" placeholder="body"></textarea></p>
      <span id="left"><input type="submit" value="Create"></input></span> 
    </form>
    </div>
  </article>
}
function Circle(props){
return <div>
  <div className="Circles1">
      <div className="Circle Circle1"></div>
      <div className="Circle Circle2"></div>
      <div className="Circle Circle3"></div>
      <div className="Circle Circle4"></div>
      <div className="Circle Circle5"></div>
      <div className="Circle Circle6"></div>
      <div className="Circle Circle7"></div>
      <div className="Circle Circle8"></div>
      <div className="Circle Circle9"></div>
      <div className="Circle Circle10"></div>
      </div>
  <div className="Circles2">
      <div className="Circle Circle1"></div>
      <div className="Circle Circle2"></div>
      <div className="Circle Circle3"></div>
      <div className="Circle Circle4"></div>
      <div className="Circle Circle5"></div>
      <div className="Circle Circle6"></div>
      <div className="Circle Circle7"></div>
      <div className="Circle Circle8"></div>
      <div className="Circle Circle9"></div>
      <div className="Circle Circle10"></div>
      </div>
  <div className="Circles3">
      <div className="Circle Circle1"></div>
      <div className="Circle Circle2"></div>
      <div className="Circle Circle3"></div>
      <div className="Circle Circle4"></div>
      <div className="Circle Circle5"></div>
      <div className="Circle Circle6"></div>
      <div className="Circle Circle7"></div>
      <div className="Circle Circle8"></div>
      <div className="Circle Circle9"></div>
      <div className="Circle Circle10"></div>
      </div>    
  <div className="Circles4">
      <div className="Circle Circle1"></div>
      <div className="Circle Circle2"></div>
      <div className="Circle Circle3"></div>
      <div className="Circle Circle4"></div>
      <div className="Circle Circle5"></div>
      <div className="Circle Circle6"></div>
      <div className="Circle Circle7"></div>
      <div className="Circle Circle8"></div>
      <div className="Circle Circle9"></div>
      <div className="Circle Circle10"></div>
      </div>    
 <div className="Circles5">
      <div className="Circle Circle1"></div>
      <div className="Circle Circle2"></div>
      <div className="Circle Circle3"></div>
      <div className="Circle Circle4"></div>
      <div className="Circle Circle5"></div>
      <div className="Circle Circle6"></div>
      <div className="Circle Circle7"></div>
      <div className="Circle Circle8"></div>
      <div className="Circle Circle9"></div>
      <div className="Circle Circle10"></div>
      </div>    
  <div className="Circles6">
      <div className="Circle Circle1"></div>
      <div className="Circle Circle2"></div>
      <div className="Circle Circle3"></div>
      <div className="Circle Circle4"></div>
      <div className="Circle Circle5"></div>
      <div className="Circle Circle6"></div>
      <div className="Circle Circle7"></div>
      <div className="Circle Circle8"></div>
      <div className="Circle Circle9"></div>
      <div className="Circle Circle10"></div>
      </div>       
</div>
}

function App() {

  
      
  let MAIN,main1,CREATE,create,CONTENT = null;
  const [mode,setMode] = useState(MAIN);
  const [size,setSize] = useState(1);
  const [id, setId] = useState(null);
  const [nextId,setNextId] = useState(1);
  const [moving,setMoving] = useState([Math.random()*100-3,5,5,5,5,5,5,5,5])
  const [topics, setTopics] = useState([
   /*{id:1, title:'1. 숫자 맞추기',date:'2022.12.13',
    body:'가장 처음 만들었던 게임으로서 친구와 업다운 게임을 하다가 간단하게 구현가능 할 것 같아서 만든 게임입니다.\n\n jquery를 이용하여 이벤트 발생시 텍스트를 변경하였고 React의 핵심 키워드인 Usestate에 난수를 생성해서 넣은 후 맞추는 식으로 만들었습니다.',
    //photo:'R0001756.PNG'
  },
    {id:2, title:'2. 공 키우기',
    body:'처음으로 간단한 숫자 맞추기 게임을 만든 후 좀 더 복잡한 매커니즘을 가진 게임을 만들어볼까 생각을 했습니다.\n\n 캐릭터를 강화하여 싸우는 RPG 게임에서 착안하여 간단하게 머리를 써서 골드와 확률에 의해 업그레이드하는 식으로 만들어 보았습니다.\n\n 그래픽 이미지를 다루는 본격적인 게임은 아니지만 충분히 죽독성있는 게임으로 UI에 사용된 이미지와 일러스트레이션은 저작권이 없는 것들을 찾아 사용하였습니다.\n\n 다른 것보다 Usestate를 이용해 변수를 다루는 것을 많이 공부할 수 있었고 중간중간 발생하는 오류들을 대처하는 데 시간이 소요되었습니다.' 
    ,photo:'gong.png'},
    {id:3, title:'3. 공 맞추기',
    body:'두 번째 공 키우기 게임을 만들고 또 다른 걸 만들어볼까 생각하다 만든 게입입니다. 앞에서 사용한 usestate를 주로 사용하였는데 이전보다 변수를 다루는 능력이 많이 좋아졌습니다.\n\n 또한 애니메이션을 적절하게 정지시키고 다시 작동시키는 법과 클릭이 중복되게 작용하지 않도록 하는 방법을 익혔습니다.  '
    ,photo:'shoot.png'}*/
  ]);
  
  useEffect(() => {
    for(let j=1; j<7; j++){
      for(let i=1; i<11; i++){
        $('.Circle'+i).css({'left':i*147-142+'px'});
        
        $('.Circles'+j+" "+'.Circle'+i).mouseenter(function(){
          var ran1 = Math.random()*256;
          var ran2 = Math.random()*256;
          var ran3 = Math.random()*256;
          $('.Circles'+j+" "+'.Circle'+i).css({'background-color':'rgb('+ran1+','+ran2+','+ran3+')'})
          $('.Circles'+j+" "+'.Circle'+i).css({'opacity':'1'})
          $('.Circles'+j+" "+'.Circle'+i).css({'transition':'opacity'})
          $('.Circles'+j+" "+'.Circle'+i).css({'width':'130px','height':'130px'})  
      });
      $('.Circle'+i).mouseout(function(){
        $('.Circle'+i).css({'opacity':'0'})
        $('.Circles'+j+" "+'.Circle'+i).css({'transition':'opacity 2s ease-in'})
        $('.Circles'+j+" "+'.Circle'+i).css({'width':'100px','height':'100px'})  
    }); 
  }
  for(let j=1; j<10; j++){
  $('.Photo'+j).hover(function(){
    $('.Photo'+j).css({'opacity':'1','width':'260px','height':'300px'})
    $('.Photo').not('.Photo'+j).css({'opacity':'0','width':'65px','height':'75px'})
  },function(){
    $('.Photo').css({'opacity':'1','width':'130px','height':'150px'})
  })}}
},[]);

  if(mode === MAIN){

    main1 = <div className="PhotosF">
      <div className="Photos" onClick={(event)=>{
        event.preventDefault();
        for(let i=1;i<10;i++){
        $('.Photo'+i).css({'right':Math.random()*20-10+'px'});
        $('.Photo'+i).css({'top':Math.random()*20-10+'px'});
        $('.Photo'+i).css({'transform':'rotate('+(Math.random()*20-10)+'deg)'});
        
      }
      }}>
        <div className="row1">
          <div className="Photo Photo1" onClick={(event)=>{
            event.preventDefault();
            
            setMode(CONTENT);
            setId(1);
          }}><div className="Pic"></div>
          </div>
          <div className="Photo Photo2"onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(4);
          }}><div className="Pic"><div className="Pin"></div></div></div>
          <div className="Photo Photo3" onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(7);
          }}><div className="Pic"><div className="Pin"></div></div></div>
        </div>
        <div className="row2">
          <div className="Photo Photo4" onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(2);
          }}><div className="Pic"><div className="Pin"></div></div></div>
          <div className="Photo Photo5" onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(5);
          }}><div className="Pic"><div className="Pin"></div></div></div>
          <div className="Photo Photo6" onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(8);
          }}><div className="Pic"><div className="Pin"></div></div></div>
        </div>
        <div className="row3">
          <div className="Photo Photo7" onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(3);
          }}><div className="Pic"><div className="Pin"></div></div></div>
          <div className="Photo Photo8" onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(6);
          }}><div className="Pic"><div className="Pin"></div></div></div>
          <div className="Photo Photo9" onClick={(event)=>{
            event.preventDefault();
            setMode(CONTENT);
            setId(9);
          }}><div className="Pic"><div className="Pin"></div></div></div>
        </div>
        
      </div>
    </div>
  }
  if(mode === CONTENT)
  {
   
    //let set = Object.values(JSON.parse(localStorage.getItem('settings')).name);
    
    
    let title, body, photo, date = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
        photo = topics[i].photo;
        date = topics[i].date;
      }
    }
    main1=null;
    create = <div className="Contents">
      <div className="Create">
    <Create onCreate={(_title, _body, _date)=>{
      const newTopic = {id:nextId, title:_title, body:_body, date:_date}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      var b = JSON.stringify(newTopics)
      window.localStorage.setItem('aaa',b);
      setId(nextId);
      setNextId(nextId+1);
      var c = JSON.stringify(nextId+1)
      window.localStorage.setItem('Id',c);
      
      var a = localStorage.getItem('aaa');
      setTopics(JSON.parse(a));
      var b = localStorage.getItem('Id');
      setNextId(JSON.parse(b));   

      setMode(MAIN);
    }}></Create>
      </div>
      <Article title={title} body={body} date={date}></Article>
      <li className="Crup"><input type="button" value="Delete" onClick={()=>{
        var a = localStorage.getItem('aaa');
        localStorage.setItem('Id',localStorage.getItem('Id')-1);
        var b = JSON.parse(a);
        b.pop();
        setTopics(b);
        setNextId(nextId-1);
        var c = JSON.stringify(b);
        alert(b);
        window.localStorage.setItem('aaa',c);
        
      }} /></li>
      <div>
      <div className="Write" onClick={(event)=>{
        event.preventDefault();
        $('.Create').css({"display":"inline"});
        $('.Content').css({"display":"none"});
      }}></div>
    
    </div>
    </div>
    const settings = {
      age: '18',
      name: 'SeungMin',
      sex: 'male'
  };
  
  
  
  
}
  return (
    
<div className="FullScreen">
<div className="Header">
  <div className="Icon Insta"><a href="https://www.instagram.com/me_or_no/" target="_blank"><img src="insta.png"></img></a></div>
  <div className="HomeF">
    <div className="Home" onClick={(event)=>{
  event.preventDefault();
  setMode(MAIN);
  var a = localStorage.getItem('aaa');
  setTopics(JSON.parse(a));
  var b = localStorage.getItem('Id');
  setNextId(JSON.parse(b));  
}}>Miary</div>
  </div>
  <div className="Icon Blog"><a href="https://velog.io/@magnacut" target="_blank"><img src="velog.jpg"></img></a></div>
</div>
<Circle></Circle>
<Circle></Circle>   
{main1}
{create}
<div className="BottomF">
<div className="Bottom Bottom1">
  <div className="BottomCon">사이트 소개</div>
  <div className="BottomCon">사이트 소개</div>
  <div className="BottomCon">사이트 소개</div>
  <div className="BottomCon">사이트 소개</div>
</div>
<div className="Bottom Bottom2">
<div className="BottomCon">Copyright © miary.net All rights reserved.</div>

</div>
</div>
</div>
    /*
    <div classNameName="App">
      <header classNameName="App-header" onClick={event=>{
          event.preventDefault();
          var i = Math.floor(Math.random()*255);
          var j = Math.floor(Math.random()*255);
          var p = Math.floor(Math.random()*255);
          if(size===0){  
          setSize(1);
            $('.App-logo').css({'left':'-100px'});
            $('.App-header').css({'background-color':'rgb('+i+','+j+','+p+')'});
          }
          else if(size===1){  
            setSize(0);
              $('.App-logo').css({'left':'100px'});
              $('.App-header').css({'background-color':'rgb('+i+','+j+','+p+')'});
            }
          }
         
        }>
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {size}
        </a>
      </header>
      
    </div>
   */
   
  ); 
}

export default App;
