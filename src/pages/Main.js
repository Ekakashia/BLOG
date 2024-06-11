import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Main() {

   const [data, setData] = useState([]);

   useEffect(function () {
      axios.get("https://apitest.reachstar.io/blog/list").then(function (response) {
         setData(response.data);
      }).catch(function (error) {
         console.log(error);
      });
   });

   return (
      <React.Fragment>
         {/** CTRL K F */}
         <Navbar></Navbar>
         <div className="container mt-5 pt-5">
            <div className="row justify-content-center mt-5">
               <div className="col-10">
                  {
                     data.map((item, index) => <div className="card maincard" key={index}>
                        <div className="card-header">
                           <h1 className="card-title" dangerouslySetInnerHTML={{ __html: item.title }}></h1>
                        </div>
                        <div className="card-body">
                           <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        </div><br></br><br></br><br></br><br></br>v<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br>
                        </br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <div className="card-footer">
                           <Link to={"/detalebi/" + item.id} className="btn btn bg-danger">დეტალურად</Link>
                        </div>
                     </div>)
                  }

               </div>

            </div>
            <Footer></Footer>
         </div>
         
      </React.Fragment>

   )
}

export default Main;