import React,{useEffect , useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import axios from 'axios';
import Calendar from './Calendar';
import {Link} from 'react-router-dom';
import { IoIosAddCircle } from "react-icons/io";
const Calendarlist = () => {
   
   const [values, setValues] = useState([]);
   const [search, setSearch] = useState("");
   const [filtered, setFiltered] = useState([]);
   const [selectFilter, setSelectFilter] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8000/posts')
            .then(response => {  
                setValues(response.data);
            })
            .catch(error => {
                console.log(error);
            })
          
    },[])

    useEffect(()=>{
            setFiltered(values.filter((data)=>{
                return Object.values(data.title).join("").toLowerCase().includes(search.toLowerCase())     
            }))
        
       
         
    },[search,values])
  
    useEffect(()=>{
        if(selectFilter === "All"){
            return setFiltered(values)
        }
        else if(selectFilter === "Pending"){
            setFiltered(values.filter((data)=>{
                return Object.values(data.status).join("").toLowerCase().includes(selectFilter.toLowerCase())
                
            }))
            
        } 
        else if(selectFilter === "On-going"){
            setFiltered(values.filter((data)=>{
                return Object.values(data.status).join("").toLowerCase().includes(selectFilter.toLowerCase())
            }))
        }
        else if(selectFilter === "Done"){
            setFiltered(values.filter((data)=>{
                return Object.values(data.status).join("").toLowerCase().includes(selectFilter.toLowerCase())
                
            }))
        }
    },[values,selectFilter])

    const handleSearch = (e) =>{
        setSearch(e.target.value);
        
    }

    const handleFilter = (e)=>{
        setSelectFilter(e.target.value);
    
    }

    return (
    
        <div className=" relative pt-6 max-w-sm mx-auto min-h-full overflow-hidden inline-block  w-10/12 bg-white rounded-xl shadow-lg">
            <div className="header flex justify-center ">
                <div className="text-xl text-center font-medium text-black">Calendar App</div>
            </div>
            <div className="pl-2 flex justify-between pt-6 ">
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><FiSearch/></svg>
                </span>
                <input onChange={handleSearch} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search " type="text" name="search"/>
                </label>
            <div className="pr-3">
                <select className='border border-slate-300 rounded-md w-full shadow-sm block h-full'  name="status" value={selectFilter} onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="On-going">On-going</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            </div>
            <div className=" h-96 overflow-y-auto">
                { 
                    filtered?.map((values) =>(
                        <Calendar key={values.id} id={values.id} title={values.title} date={values.date} status={values.status} />
                    ))
                }

                
            </div>
            <div className="float-right m-6">
             
               <Link to="/add">
                    <IoIosAddCircle className='w-10 h-10'/>
                </Link>
            
            </div>
        </div>
        
    );
}

export default Calendarlist;
