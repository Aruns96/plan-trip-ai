import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from "axios"
import { useEffect,useState } from 'react'
import { FaClock } from "react-icons/fa";

const TripResults = () => {
    const {id} = useParams()
    const [data,setData] = useState([])
    const getTrip = async()=>{
        try{
            const res = await axios.get(`http://localhost:3000/trip/${id}`)
           console.log(res.data.tripData)
           let jsonData = JSON.parse(res.data.tripData)
           console.log(jsonData)
            setData(jsonData.itinerary)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
       id&&getTrip()
    },[id])
  
  return (
    <div className='sm:px-10 md:px-30 lg:px-56 xl:px-10 px-5 mt-10'>
          <h2 className='text-4xl font-bold mb-5'>Here is your Trip Plan</h2>
          <div>
            {data.map((item,index)=>(
                 <>
                 
                  <h2 className='font-medium text-lg mb-5'>Day-{item.day}</h2>
                <div  className='grid md:grid-cols-2 gap-5 sm:grid-cols-1 mb-5'>
                   
                    {item.plan.map((place,index)=>(
                        <div key={index} className='bg-blue-100 border rounded p-3 mt-2 flex flex-col gap-2 items-center
                        hover:scale-105 transition-all shadow-md '> 
                            
                                 <img className='w-[100px] h-[100px] object-cover rounded p-3 mt-2' src={place.placeImageURL} alt={place.placeName} />
                             
                            
                                <h2 className='font-bold text-lg'>{place.placeName}</h2> 
                                <p className='text-sm text-gray-700'>{place.placeDetails}</p>
                                <h2 className='text-md text-gray-700'><span className='text-black'>Best Time To Visit  :  </span>{place.bestTimeToVisit}</h2>
                               <h2 className='flex gap-2 items-center'> <FaClock /><span>Time to Travel : </span>{place.timeToTravel}</h2>
                        </div>
                    ))}
                </div>
               
               </>
            ))}
          </div>
    </div>
  )
}

export default TripResults