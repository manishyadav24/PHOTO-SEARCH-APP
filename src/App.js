import React, { useState } from 'react'
import axios from 'axios'

function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=A3M52x_6chF3VzYJAhXjUip7CdpQasHi9u7Ia_Q3mNk`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
    }

    const myStyle={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80')",
        height:'50vh',
        padding:'12vh 35vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const inp={
        borderRadius:'8px',
        height:'6vh',
        padding:'0px 0px 0px 25px'

    };

    const para={
        fontWeight: 'bold',
        color: 'white'

    };


    return (

        <>
            <div className='container text-center my-5' style={myStyle}>
            <div>
            <p style={para}>PhotoSearch</p>
            <input placeHolder="Search free high-resolution photos" type="text" className='form-control' style={inp} value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-light my-2'>Search</button>
            </div>
            </div>

            <div className="container">
            
                <div class="row text-center text-lg-start my-5">
                    {result.map((value) => {
                        return (                       
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-auto" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App