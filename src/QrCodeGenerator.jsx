import React from 'react'
import { useState } from 'react'

export const QrCodeGenerator = () => {
    const[img,setImg]=useState();
    const[loading,setLoading]=useState(false);
    const[qrData,setQrData]=useState("");
    function generateQrCode(){
        setLoading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${qrData}`;
            setImg(url);
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }
    
  return (
       <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {img && <img src={img} alt="" className='image'/>}
        <div>
            {loading && <p>loading.....</p>}
            <label htmlFor="dataInput" className='input-label'>Data for QR code:</label>
            <input type="text" id='dataInput' placeholder='Enter Data For QR Code' onChange={(e)=>setQrData(e.target.value)}/>
            <label htmlFor="sizeInput" className='input-label'>Image Size</label>
            <input type="text" id='sizeInput' placeholder='Enter the Size Of Image' />
            <button onClick={()=>generateQrCode()}>Generate QR Code</button>
            <button>Download QR code</button>
        </div>
       </div>
    
        
    
  )
}
