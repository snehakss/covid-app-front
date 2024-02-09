import React, { useState } from 'react'
import NavCovid from './NavCovid'
import axios from 'axios'

const AddCovid = () => {
    const [input,setInput]=new useState(
        {
            "name":"",
            "phone":"",
            "address":"",
            "symptoms":"",
            "status":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/covid/add",input).then(
            (response)=>{
                console.log(response.data)
            }
        )
    }
  return (
    <div>
        <NavCovid/>
        <br />  <br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>
                            </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Symptoms</label>
                            <input type="text" className="form-control" name="symptoms" value={input.symptoms} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Status</label>
                            <input type="text" className="form-control" name="status" value={input.status} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCovid