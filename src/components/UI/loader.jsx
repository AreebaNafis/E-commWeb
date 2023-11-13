import ReactDom from "react-dom";
import { Fragment } from "react";
export const Backdrop =(props)=>{
    const handle=()=>{
        if(props.onClose){
           props.onClose();
        }
    }
    return(
        <div onClick={handle} className="loader-overlay"></div>
    )
}
const Loader =() => {
  return (
    ReactDom.createPortal(
       <Fragment>
            <Backdrop/>
            <div className="loading-dots">
                    <div>Loading</div>
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
            </div>
       </Fragment>
        ,
        document.getElementById("loader-root")
    )
  )
}
export default Loader;

// export const Backdrop = props => {
//     const handleClick = () => {
//         if(props.onClose) {
//             props.onClose();
//         }
//     }

//     return (
//         <div onClick={handleClick} className="loader-overlay"></div>
//     )
// }

// const Loader = () => {
//     return (
//         ReactDom.createPortal(
//             <>
//             <Backdrop/>
//             <div className="loading-dots">
//                 <div>Loading</div>
//                 <div className="loading-dots--dot"></div>
//                 <div className="loading-dots--dot"></div>
//                 <div className="loading-dots--dot"></div>
//             </div>
//             </>,
//             document.getElementById("loader-root")
//         )
//     )
// }

// export default Loader