import React from 'react'

export default function Nav(props) {
  
  let datas = props.datas;

  const clickHandler = (e) => {
    e.preventDefault();
    props.changeMode(parseInt(e.target.id));
  }


  /*
    const lists = []; 
    for (let i=0; i<datas.length; i++) {
    let li = datas[i];
    lists.push(<li key={li.id}><a href={'./'+li.id}>{li.title}</a></li>);
    } 
  */



  return (
    <>
      <nav>
        <ul>{
        datas.map(function(datas) {
          return(
            <li key={datas.id}><a href={'./'+datas.id} id={datas.id} onClick={clickHandler}>{datas.title}</a></li>
            )
        })
        }</ul>
      </nav>
    </>
  )
}
