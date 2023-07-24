import React, { useState } from 'react';
import NavBar from './compontents/NavBar';
import Header from './compontents/Header';
import Category from './compontents/Category';
import ItemList from './compontents/ItemList';
import { Container } from 'react-bootstrap';
import {items} from './Data'

function App() {
  const [itemsData, setItemsData ] = useState(items)
  //get items category dynamic
  const getCategory = ['All', ...new Set(items.map((i) => i.category))]
  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "All"){
      setItemsData(items)
    } 
    else{
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }
   //filter by Search
   const filterbySearch = (keyword) => {
    if (keyword !== ""){
      const newArr = items.filter((item) => item.title === keyword)
      setItemsData(newArr)
    } 
   
  }

  return (
    <div className=" font">
      <NavBar filterbySearch={filterbySearch}/>

      <Container>
      <Header/>
      <Category filterbyCategory={filterbyCategory} getCategory={getCategory} />
      <ItemList itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
