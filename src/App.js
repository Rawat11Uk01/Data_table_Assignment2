
import './App.css';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import Table from './Component/Table';
function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();

      setApiData(data)
    }
    getData();
  }, [])
  console.log(apiData)
  return (
    <div >
      <table className='table'>
        <thead>
          <tr>
         
            <th className='s_no'>S.No</th>
            <th className='name'>Name</th>
            <th className='post'>Post Id</th>
            <th className='email'>Email</th>
            <th className='body'>Body</th>
           
          </tr>
        </thead>
      </table>
      {apiData.map((d) =>
    
        <tbody key={d.id}>
          <tr>
          <td className='s_no'>
              {d.id}
            </td>
            <td className='name'>
              {d.name}
            </td>
            <td className='post'>
              {d.postId}
            </td>
            <td className='email'>
              {d.email}
            </td>
            <td className='body'>
              {d.body}
            </td>
          </tr>
        </tbody>
     

      )}
    </div>
  );
}

export default App;
