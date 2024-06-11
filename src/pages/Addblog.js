import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Addblog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const post = () => {
        axios.post("https://apitest.reachstar.io/blog/add", {
            title: title,
            description: description,
        }).then (function(response){
            console.log(response);
            navigate("/main");
        }).catch(function(error){
            console.log(error);
        });
    };
    return(

        <React.Fragment>
          <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8">
                    
                      
                        <input type="text" className="addbloginpt mb-4" value={title} placeholder="სათაური" onChange={(event) => 
                            setTitle(event.target.value)} /><hr />
                
                <ReactQuill
                    theme="snow"
                    className='editor mt-5 h-100'
                    value={description}
                    onChange={(value) => setDescription(value)}
                  />

                  <button type="button" onClick={post} className="addBlogBtn2 w-100">ADD BLOG</button>
                    
                 
                </div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Addblog;