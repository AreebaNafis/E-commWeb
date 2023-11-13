import Products from "./components/products/products";
import Header from "./components/Layouts/Header.jsx";
import Subheader from "./components/Layouts/Subheader.jsx";
import { useState } from "react";

const App= ()=>{
  const [nOfUniqueItemsObj, setnOfUniqueItemsObj] = useState([]);
  const [handleEventQue, sethandleEventQue]= useState({
    type:"",
    id:""
  })

  const incCart =(item)=>{
    let cartItems =[...nOfUniqueItemsObj];
   let index= cartItems.findIndex(i=> i.id=== item.id);
   
    if(index>-1){
      cartItems[index]= item;
    }
    else{
      cartItems.push(item);
    }
    setnOfUniqueItemsObj([...cartItems]);
  }

  const decCart= (item)=>{
    let cartItems =[...nOfUniqueItemsObj];
    let index= cartItems.findIndex(i=> i.id=== item.id);
    if(cartItems[index].quantity === 0) {
      cartItems.splice(index, 1)
    }
    else {
      cartItems[index] = item
    }
    setnOfUniqueItemsObj([...cartItems]);

  }

  const handleEve=(type,id)=>{
    sethandleEventQue({
      type,
      id
    });
  }
  return (
    <div>
      <Header nItems ={nOfUniqueItemsObj.length} item ={nOfUniqueItemsObj} handleEve={handleEve}/>
      <Subheader/>
      <Products onAdding={incCart} onRemoving={decCart} eventList ={handleEventQue}/>
    </div>
  );
}

export default App;
