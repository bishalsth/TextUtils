import React from 'react'

function Alert(props) {
    const captilize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);

    }
  return (
   props.Alert&& <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
      <strong> {captilize(props.Alert.type)}</strong> : <strong> {props.Alert.msg}</strong> 
  
</div>
  )
}

export default Alert
