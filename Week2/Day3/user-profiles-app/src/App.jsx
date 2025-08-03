import React,{useEffect ,useState} from "react";
import UserCard from "./components/UserCard";

const App = () =>{
  const[users,setUser] = useState([]);
  const[filteredUsers,setFilteredUsers] = useState([]);
  const[searchTerm,setSearchTerm] = useState('');
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null);

  useEffect(() =>{
     const fetchUsers = async () =>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) throw new error('Failed to fetch user data');
        const data = await response.json();
        setUser(data);
        setFilteredUsers(data);
      }
      catch(error){
        setError(error.message);
      }
      finally{
        setLoading(false);
      }
     };
     fetchUsers();
  }, []);

  useEffect (()=>{
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  },[searchTerm,users]);

  if(loading) return <p>Loading users...</p>
  if(error) return <p style={{color :'red'}}>{error}</p>;

  return(
    <div style = {{padding:'20px'}}>
      <h1>User Profiles</h1>
      <input type = 'text' placeholder="Search by name..." onChange={(e) => setSearchTerm(e.target.value)}
      style={{padding:'8px',width:'100%',marginBottom:'20px'}}/>

      {filteredUsers.map(user =>(
        <UserCard key = {user.id} name = {user.name} email = {user.email} city = {user.address.city}/>
     )) }
    </div>
  )
}
export default App;