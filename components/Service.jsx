import React from 'react'
import Image from "next/image";
const med = "/image9.png"
const Service = () => {
  return (
    <div className=' flex flex-row justify-around'>
        <div>
            <Image src={med} width={500} height={500}/>
        </div>
        <div className=' flex items-start flex-col'>
            <h1 className=' text-4xl font-bold py-10'>
                Services
            </h1>
            <div className='px-4 py-2 font-bold text-2xl'>
                Buy Medicine an essentials
            </div>
            <div className=' flex flex-row'>
                <button>
                    Book Lab Tests
                </button>
                <button>
                    View Health Records
                </button>
            </div>

        </div>
    </div>
  )
}

export default Service