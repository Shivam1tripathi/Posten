
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Filcard from './components/Filcard';


function App() {
  const [filter,setfilter]=useState([]);
  const [postes,setpost]=useState([]);
  const [search,setsearch]=useState("");

  //addfilter
  const addfilter=(item)=>{
    setfilter([...filter,item]);
    console.log(filter);
  }


  //deletefilter
  function deletefilter(id){
    let newListTodo = [...filter];
    newListTodo.splice(id,1)
    setfilter([...newListTodo])
  }



 


useEffect(()=>{
  const requestpost=async()=>{
    try{
    const post=await axios.get("https://dummyjson.com/posts");
    setpost(post.data.posts)
    }catch(error){
      alert("data retriving failed");
    }
  } 

requestpost();
// eslint-disable-next-line 
},[])




  return (
    <>
    <Navbar Addfilter={addfilter}/>
    <div className='min-h-0 w-full flex flex-wrap bg-slate-300'>
      <h1 className='font-bold text-2xl mr-5'>Filters</h1>
      {
        filter.map((e,i)=>{
          return <Filcard name={e} key={i} index={i} delete={deletefilter}/>
        })
      }
    </div>
    <div className='h-16 flex items-center justify-center bg-slate-300 border-gray-600'>
    <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search post here....' className='text-gray-800 shadow-inner bg-white rounded-md font-semibold pl-2 w-96 max-md:w-60 h-10' />
    </div>
    <main className='sc flex items-center flex-col bg-slate-300'>
      {
       search.length===0? 

        filter.length===0?
      postes.map((e)=>{
       return <Card title={e.title} body={e.body} key={e.id} tags={e.tags} />
      })
      :
      postes.map((e)=>{
        let l=e.tags.length;
        for (let i = 0; i < l; i++) {
          if(filter.includes(e.tags[i])){
            console.log(e.tags[i]);
            return <Card title={e.title} body={e.body} id={e.id} tags={e.tags}/>
          }
        }
      
      })

      :
      postes.map((e)=>{
          if(e.title.includes(search)){
            return <Card title={e.title} body={e.body} id={e.id} tags={e.tags}/>
          }
        
      
      })


      }
         
    </main>
      <Footer/>
      </>
  );
}

export default App;
