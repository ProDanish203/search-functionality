import { useEffect, useState } from 'react';
import './App.css';
import { Users } from "./data/users";
import { Table } from './Components/Table';
import { ApiTable } from './Components/ApiTable';
import axios from "axios";

function App() {

  const [search, setSearch] = useState("");

  // Basic functionality of a filter method
  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("emilin")))

  
  // const filteredSeacrh = (data) => {
  //   return data.filter((item) => 
  //     item.first_name.toLowerCase().includes(search) || 
  //     item.last_name.toLowerCase().includes(search) || 
  //     item.email.toLowerCase().includes(search) 
  //   )
  // }
  
  // const keys = ["first_name", "last_name", "email"];

  // const filteredSeacrh = (data) => {
  //   return data.filter((item) => 
  //     keys.some((key) => item[key].toLowerCase().includes(search))
  //   )
  // }

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    const res = await axios.get(`http://localhost:4000?q=${search}`)
    // console.log(res.data)
    const resData = await res.data;
    setUsers(resData)
    setLoading(false);
  }

  useEffect(() => {

    // if(search.length === 0 || search.length >= 3) fetchUsers();
    fetchUsers();
    
  }, [search])  
  console.log(users)

  return (
    <>
    <div className="mcontainer">
      <input 
      type="text" 
      placeholder='Seacrh...' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='searchInp'
      />

    {/* Basic searching in the list for any one column */}
    {/* <ul>
      {
        Users.filter((user) => user.first_name.toLowerCase().includes(search.toLowerCase()))
        .map((user, index) => (
          <li key={user.id}>{user.first_name}</li>
        ))
      }
    </ul> */}

    {/* Dynamic searching in the table for several fields */}
    {/* <Table search={search} data={filteredSeacrh(Users)}/> */}
    {
      loading ? (
        <p>Loading...</p>
      ) : (
        <ApiTable data={users}/>
        // <>
        // </>
      ) 
    }


    </div>
    </>
  );
}

export default App;
