import React, { useState, useEffect } from 'react';

const Home = () => {

    const [query, setQuery] = useState("Panner");

    const [data, setData] = useState([]);

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=9b824484&app_key=a51461b1d0e10d02356c4c3044610afe&type=public`).then(
            (Response) => Response.json()
        ).then(
            (data) => {
                console.log(data.hits);
                const arrayData = data.hits;
                setData(arrayData);
            }
        )
 
    }, [isClicked])

    return (
        <div className="container">
         
            <input onChange={(e)=>{setQuery(e.target.value)}} type="text" className="input" placeholder="search recipes"></input>
            <button onClick={()=>{setIsClicked((prevState)=>!prevState)}} className="button">Search</button>
// react-hooks/exhaustive-deps
            <h5>Showing result for  {query}</h5>
            {
                data.map((item, i) => {
                    return <div key={i}>
                        <h3>{item.recipe.label}</h3>
                        <img className="img" src={item.recipe.image} alt="img" />
                    </div>
                })

            }

           
        </div>

    );
}

export default Home;
