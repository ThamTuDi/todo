import React from 'react'
import { useState } from 'react';
import Todo from './Todo';


function Todolist(props){
    const [job, setJob] = useState('')
   

    const [jobs, setJobs] = useState(()=>{
        const jobArray = JSON.parse(localStorage.getItem('jobs'))
        return jobArray ??[]
    });

     const handleSubmit = (event)=>{
        setJobs(prev => {
            const newJob = [...prev, {name: job, isDisable: true }]
            const jsonJob = JSON.stringify(newJob);
            localStorage.setItem('jobs', jsonJob);
            return newJob
        });
        // setJobs(prev => [...prev,job])
        setJob('')
    }

    const handleClear = () =>{
        setJobs([]);
        localStorage.clear();
    }

 

    return (
        <div  className = "danhsach" style = {{width:400, padding:40}}>
            <h2> Danh sách công việc</h2>
            <div className='form-group'  style={{ display: 'flex', flexDirection: "flex-row"}}>
              <input type='text' style={{margin: 2}}
              className='form-control' value = {job} onChange= {(e) => setJob(e.target.value)}/>
                <button type='button' className='btn btn-primary' style={{margin: 2}} onClick = {handleSubmit}>Thêm </button>
                <button type="button" className="btn btn-danger" style={{margin: 2}} onClick = {handleClear}>Xóa</button>
            
            </div>
            <Todo jobs = {jobs} />
           
        </div>
    )
}

export default Todolist;