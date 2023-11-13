import Atc from "../../assets/ATC.svg"
import { Fragment, useState } from "react"
import Modal from "../UI/modal";

const ListItems = ({data, onAdd, onRemove})=>{
    const nOfImages = data.extras.length;

    const [counter ,setCounter] = useState(0);
    const[index,setIndex] = useState(-1);
    const [showModal,setShowModal]= useState(false);

    const handlePreviousImage = () => {
        const newIndex = index - 1;
        setIndex(newIndex <= 0 ? nOfImages - 1 : newIndex);
    };

    const handleNextImage = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= nOfImages ? 0 : newIndex);
    };

    function addCart(){
        onAdd(data.id);
        setCounter (counter + 1);
    }
    function increment(){
        if (counter>=10) return;
        onAdd(data.id);
        setCounter (counter + 1);
    }
    function decrement(){
        if(counter<=0) return;
         onRemove(data.id);
        
        setCounter (counter - 1);
    }

    function handleModal(){
        setShowModal(previousState => !previousState);
    }
    return(
       <Fragment>
         <div className={"item-card"}>
            <img src={"/p_assets/" + data.thumbnail} alt="prod1" onClick={handleModal} />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                  <span>₹{data.discountedPrice}</span>
                  <small><strike>{data.price}</strike></small>
                </div>
                <div className={"title"}><h3>{data.title}</h3>
                </div>
            </div>
                {
                    counter<1 ?
                    <button className={"cart-add"} onClick={addCart}>
                        <span>Add to Cart</span>
                        <img   src={Atc} className={"atc-Icon"} alt={"Add to Cart Icon"} />
                    </button>
                :
                    <div className="hidden flex1"> 
                        <button className={"counterbtn"} onClick={decrement}>
                        <strong>-</strong>
                        </button>
                        <span>{counter}</span>
                        <button className={"counterbtn"} onClick={increment}>
                        <strong>+</strong>
                        </button>
                    </div>
                }  
        </div>
        { showModal && 
            <Modal onClose={handleModal} title = {data.title}>
                <div className="carouselContainer">
                    <img   src={index>=0?"/p_assets/" + data.extras[index]:"/p_assets/" + data.thumbnail} className={"carousel img"} alt={"Product-Images"} />
                    <button className="btn btn-next" onClick={handleNextImage}>
                        <span className="material-icons-outlined">
                            navigate_next
                        </span>
                    </button>
                    <button className="btn btn-prev" onClick={handlePreviousImage}>
                        <span className="material-icons-outlined">
                            navigate_before
                        </span>
                    </button>
                </div>
                
                <div className={"item-card__information"}>
                    <div>
                        <span  className={"pricing"}>₹{data.discountedPrice}</span>
                        <small><strike>₹{data.price}</strike></small>
                     </div>
                    <div className="descrip">{data.description}</div>
                    <div className="availableSizes">
                    Available Sizes:
                    <input type="checkbox" />
                </div>
                    
                </div>
                {
                    counter<1 ?
                    <button className={"cart-add"} onClick={addCart}>
                        <span>Add to Cart</span>
                        <img   src={Atc} className={"atc-Icon"} alt={"Add to Cart Icon"} />
                    </button>
                :
                    <div className="hidden flex1"> 
                        <button className={"counterbtn"} onClick={decrement}>
                        <strong>-</strong>
                        </button>
                        <span>{counter}</span>
                        <button className={"counterbtn"} onClick={increment}>
                        <strong>+</strong>
                        </button>
                    </div>
                }  
            </Modal>
        }
       </Fragment>
    )
} 
export default ListItems 