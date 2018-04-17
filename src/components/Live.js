
import React from 'react';


const Live = () =>{
    return (
<div id="content">
    <h1>Tour dates</h1>
    <table summary="when and where you can see the band">
      <thead>
      <tr>
        <th>Date</th>
        <th>City</th>
        <th>Venue</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>June 9th</td>
        <td>Portland, <abbr title="Oregon">OR</abbr></td>
        <td>Crystal Ballroom</td>
      </tr>
      <tr>
        <td>June 10th</td>
        <td>Seattle, <abbr title="Washington">WA</abbr></td>
        <td>Crocodile Cafe</td>
      </tr>
      <tr>
        <td>June 12th</td>
        <td>Sacramento, <abbr title="California">CA</abbr></td>
        <td>Torch Club</td>
      </tr>
      <tr>
        <td>June 17th</td>
        <td>Austin, <abbr title="Texas">TX</abbr></td>
        <td>Speakeasy</td>
      </tr>
      </tbody>
    </table>
  </div>
    )
}

export default Live;