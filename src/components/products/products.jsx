import ListItems from "../ListITems/listItems"
import Loader from "../UI/loader"
import { useState, useEffect } from "react"
import axios from "axios"



const Products =({onAdding, onRemoving, eventList})=>{

    const [items ,setItems] = useState([]);
    const [loader,setloader] =useState(true);

    useEffect(() => {
        //method1
        // try{
        //     (async () => {
        //         const resp = await fetch(`https://react-app-walks-default-rtdb.asia-southeast1.firebasedatabase.app/items.json`);
                
        //         const prods=  await resp.json();
        //         console.log(prods);
        //         setItems(prods);
        //     })();
        // }
        // catch(error){
        //     console.log(error);
        // }
        try{
                (async () => {
                    const resp = await axios.get(`https://react-app-walks-default-rtdb.asia-southeast1.firebasedatabase.app/items.json`);
                    const prods = resp.data;
                    const transformData = prods.map((item,index)=>{
                        return{
                            ...item,
                            id:index,
                            quantity:0
                        }
                    })
                    //console.log(transformData);
                    setItems(transformData);
                    setloader(false);
                })();
        }
        catch(error){
            setloader(false);
            console.log(error);
        }
        // finally {
        //     setloader(false);
        // }
        return () => {
            // this now gets called when the component unmounts
        };
    }, []);

    useEffect(()=>{
        if(eventList.id>-1){
            if(eventList.type===-1){
                handleRemove(eventList.id);
            }
            else if(eventList.type===1){
                handleAdd(eventList.id);
            }
        }
    },[eventList]);

    const handleAdd =(iD)=>{
        let data =[...items];
        let ind = data.findIndex(i=> i.id ===iD);
        if(ind>-1){ data[ind].quantity+=1;
        }
        setItems([...data]);
        onAdding(items[iD]);
    }

    const handleRemove =(iD)=>{
        let data =[...items];
        let ind = data.findIndex(i=> i.id ===iD);
        if(data[ind].quantity!==0){
            data[ind].quantity-=1;
        }
        setItems([...data]);
        onRemoving(items[iD]);   
    }

    return (
        <>
             { loader && <Loader/>}
            <div className="product-list">
                <div className="product-list--wrapper">
                    {
                        items.map((item)=>{
                            return(<ListItems key={item.id} data={item} onAdd={handleAdd} onRemove={handleRemove}/>)
                        })
                    }      
                </div>
            </div>
        </>
    )
}
export default Products