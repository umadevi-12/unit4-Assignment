import React ,{useEffect,useState} from "react";

function Users(){
    const[user , setUser] = useState([]);
    const[online,setOnline] = useState(navigator.onLine);

    useEffect (()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json();
                setUser(result);
            }
            catch(error){
                console.error('Failed to fetch users ;',error);
            }
        };
        fetchData();
    },[]);


    useEffect(()=>{
        const updateStatus = ()=>setOnline(navigator.onLine);
     
     window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

    return (
        <div style = {{padding:'20px',textAlign :'center'}}>
            <h2 style={{ color: online ? "green" : "crimson" }}>
            {online ? "✅ You are online" : "🔴 No internet connection"}</h2>
         
            <h3>User List:</h3>
            <ul>
                {user.map((user) =>(
                    <li key = {user.id} >{user.name}</li>
                ))}
            </ul> 
        </div>
    )
}
export default Users;