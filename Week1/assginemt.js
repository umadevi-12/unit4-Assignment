import React from "react";
import parent from './parent';

function App(){
    return <parent user = "john "/>
}
export default appendFile;


//parent.js
import React from "react";
import child from '/child';

function App(){
    return <child user = {user}/>
}

//child.js

import React from "react";
import grandchild from './grandchild';


function App(){
    return <grandchild user = {user}/>
}

//grandchild

import React from "react";

function grandchild (){
    return <div>Hello {user}</div>
}

import { useContext } from "react";

export const useContext = useState()