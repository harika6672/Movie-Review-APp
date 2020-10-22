import {useState} from 'react'

const AlertDisplay=()=>{
    const [alertdisplay, setAlert]=useState(false)
    return(
        <div className="alert alert-primary" role="alert" >
  User got deleted!!
</div>
    )
}
