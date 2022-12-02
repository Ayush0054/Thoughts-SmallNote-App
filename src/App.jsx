import Header from "./header.jsx";
import Footer from "./footer.jsx";
import  Note from "./note.jsx";
import CreateArea from "./CreateArea";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper";

// function createNotes(noteItem){
//   return <Note
//      title={noteItem.title}
//      content={noteItem.content}
//   />
// }
function App() {
  const [notes,Setnotes] = useState([]);


 function addNote(newnote){
  Setnotes(prevNotes => {
    return [...prevNotes,newnote];
  });
 }
function deleteNote(id){

Setnotes(prevNotes => {
 return  prevNotes.filter((noteItem,index)=> {
    return index !== id; 
  });
});

}





  return (
    <div>
    <Header/>
    <CreateArea onAdd={addNote}/>
    {/* <Note/> */}
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
    {notes.map((noteItem,index) => {
      return (

    <SwiperSlide>
   <Note
   key = {index}
   id = {index}
     title={noteItem.title}
     content={noteItem.content}
     onDelete={deleteNote}
  />
   </SwiperSlide>
      )
})}
    
</Swiper>
    <Footer/>
    </div>
  );
}

export default App;
