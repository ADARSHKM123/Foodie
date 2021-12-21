import  {Fragment}  from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Model.module.css';

const Backdrop= props=>{
  return <div className={classes.backdrop} onClick={props.onClosing}></div>
}
const ModelOverlay =props=>{
  return (
  <div className={classes.model}>
    <div className={classes.content}>{props.children}</div>
  </div>
  );
}

const portalElement = document.getElementById('overlays');

const Model = (props) => {
 return ( <Fragment>
 {ReactDOM.createPortal(<Backdrop onClick={props.onClosing}/>, portalElement)}
 {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay> , portalElement
 )}
</Fragment>
   
 );
  
};
 
export default Model;