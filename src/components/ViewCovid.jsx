import React from 'react'
import NavCovid from './NavCovid'

const ViewCovid = () => {
  return (
    <div>
        <NavCovid/>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Symptoms</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>fg</td>
      <td>gd</td>
    </tr>
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCovid