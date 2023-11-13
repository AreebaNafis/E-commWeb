import { Fragment } from "react"
import { Backdrop } from "./loader"
import ReactDom  from "react-dom"

const Modal = ({onClose,title, children})=>{
    return(
        ReactDom.createPortal(
            <Fragment>
                 <Backdrop onClose={onClose}/>
                 <div className="modal">
                    <h3>{title}</h3>
                    <button type="close" onClick={onClose}>X</button>
                    <div className="content">{children}</div>
                 </div>
                 
                 
            </Fragment>
             ,
             document.getElementById("modal-root")
    )
    )
}
export default Modal