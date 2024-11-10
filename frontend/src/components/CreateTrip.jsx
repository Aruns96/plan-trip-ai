import React, { useState } from 'react'
import { PROMPT } from '../service/gemini-file'
import {chatSession} from "../service/gemini-file"
import axios from "axios"
import { AiOutlineLoading } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
useHistory
const CreateTrip = () => {
    const [place,setPlace] = useState("")
    const [day,setDay] = useState("")
    const [budget,setBudget]= useState("low")
    const [trip,setTrip]= useState("solo")
    const[loading,setLoading] = useState(false)
    const history = useHistory()
   
    const handleSubmit = async(e)=>{
        e.preventDefault()
         setLoading(true)
         //console.log(place,day,budget,trip)
         const input = PROMPT.replace('{location}',place)
         .replaceAll('{totalDays}',day)
         .replace('{budget}',budget)
         .replace('{traveler}',trip)
     
         //console.log(input)
         const res = await chatSession.sendMessage(input)
         //console.log(res?.response?.text())
        setLoading(false)
         saveTrip(res?.response?.text())
    }

    const saveTrip = async(tripData)=>{
        setLoading(true)
        try{
            const res =await axios.post("http://localhost:3000/trip",{tripData:tripData})
           // console.log(res)
           const id =(res.data._id)
        
            setLoading(false)
            history.push("/trips/"+id)
        }catch(e){
            console.log(e)
        }
       
    }
  return (
    <div className='sm:px-10 md:px-30 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='text-4xl font-bold mb-5'>Plan a Trip</h2>
        <p className='text-2xl font-semibold'>please provide some details to generate your trip plan</p>
         
         <form className='mt-20' onSubmit={handleSubmit}>
            <div className='mt-5'>
                <h2 className='text-xl font-medium'>Your Destination</h2>
                <input className='mt-2 text-2xl outline w-[50%]' placeholder='enter location' type="text" value={place}  onChange={e=>setPlace(e.target.value)} required/>
            </div>
            <div className='mt-5'>
                <h2 className='text-xl font-medium'>No of Days</h2>
                <input className='mt-2 text-2xl outline w-[50%]' placeholder='enter no of days' type="number" value={day}  onChange={e=>setDay(e.target.value)} required/>
            </div>
            <div className='mt-5'>
                <h2 className='text-xl font-medium'>Budget Type</h2>
                <select className='mt-2 text-2xl outline  w-[50%]' value={budget} onChange={e=>setBudget(e.target.value)} >
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
            </div>
            <div className='mt-5'>
                <h2 className='text-xl font-medium'>Type of Trip</h2>
                <select className='mt-2 text-2xl outline  w-[50%]' value={trip} onChange={e=>setTrip(e.target.value)} >
                    <option value="solo">solo</option>
                    <option value="couple">couple</option>
                    <option value="family">family</option>
                    <option value="friends">friends</option>
                </select>
            </div>
            <div className='mt-5'>
                <button disabled={loading} className='font-bold bg-black text-white px-2 py-3 rounded-lg'>{loading ? <AiOutlineLoading className='animate-spin w-7 h-7'/>:"Generte Trip Plan"}</button>
                
            </div>
         </form>
            
    </div>
  )
}

export default CreateTrip