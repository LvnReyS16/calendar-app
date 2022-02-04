import React,{useState} from 'react';
import axios from 'axios';
import {Link,useHistory } from 'react-router-dom';
import {IoIosArrowBack, IoIosAddCircle } from "react-icons/io";
const CalendarForm = () => {

    let history = useHistory();

    const [post,setPost] = useState({
        title: "",
        date: "",
        status: "Pending"
    })

    const handleChange = (e)=>{
        const name = e.target.name;
        setPost(values=>({
            ...values, [name] : e.target.value,
            
        }))

    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/posts', post)
            .then(response=>{
                console.log(response);
                setPost({
                    title: "",
                    date: "", 
                    status: "",
                })
                history.push('/');
            })
            .catch(error =>{
                console.log(error);
            })
    }

    return (
        <div className=" relative pt-6 max-w-sm mx-auto min-h-screen overflow-hidden inline-block  w-10/12 bg-white rounded-xl shadow-lg">
        <div className="header flex justify-center ">
            <div className='absolute top-7 left-3 cursor-pointer'>
                <Link to="/"><IoIosArrowBack className='w-10 h-10'/></Link>
                </div>
            <div className="text-xl text-center font-medium text-black">Create</div>
        </div>

        <form className=" rounded px-8 pt-10 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <input name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   type="text" placeholder="Title" value={post.title} onChange={handleChange}/>
            </div>   
                <input name="date" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   type="date" value={post.date}
                 onChange={handleChange}/>

                <select className="shadow border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="status"  value={post.status} 
                onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="On-going">On-going</option>
                    <option value="Done">Done</option>
                </select>
                <div className="float-right m-6">
            <button type="submit">
                <IoIosAddCircle className='w-10 h-10'/>
            </button>
        </div>
        </form>
       
    </div>

    );
}

export default CalendarForm;
