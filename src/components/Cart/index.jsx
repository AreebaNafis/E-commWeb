import { Fragment, useState } from "react"
import Modal from "../UI/modal";
import CartItems from "./CartItem";
import OrderSuccess from "../UI/OrderSuccess";

const Cart =({nItems, cartDataArray, handleEve})=>{
    const [showModal,setShowModal] = useState(0);
    const [orderModal, setOrderModal] = useState(false);

    const handleModal=()=>{
        setShowModal(previousState=>!previousState);
    }

    return(
        <Fragment>
             <button onClick={handleModal}>
                <span data-items={nItems}>Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
            {
                showModal &&
                <Modal onClose={handleModal} title="Checkout">
                    <div className="checkout-modal">
                        <div className="checkout-modal_list">
                        {
                            nItems> 0 ?
                                cartDataArray.map((data)=>{
                                    return(
                                        <CartItems data={data} key={data.id} 
                                        onEmitIncreaseItem={id=>handleEve(1,id)} 
                                        onEmitDecreaseItem={id=>handleEve(-1,id)}
                                        />
                                    )
                                })
                             :
                            <div className="empty-cart">Please add something in your cart!</div>
                        }
                    </div>
                       
                        { 
                            nItems>0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    <h4>{
                                        cartDataArray.reduce((pre, curr)=>{
                                            return pre + curr.discountedPrice*curr.quantity},0)
                                        }INR</h4>
                                </div>
                                <button onClick={()=>{setOrderModal(true);setShowModal(false)}}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
            {
                orderModal && <OrderSuccess onClose={()=>setOrderModal(false)}/>
            }

        </Fragment>
    )
}
export default Cart
