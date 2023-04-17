import { Link,BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { useEffect } from "react";

export default function App() {

  return  (
    <BrowserRouter>
      <>  
        <div>
          <ul>
            <li><Link to='/client'>Client</Link></li>
            <li><Link to='/dashboard'>DashBoard</Link></li>
          </ul>
          <hr />
          <Main />       
        </div>   
      </>
    </BrowserRouter>
 )
}