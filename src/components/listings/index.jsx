import React, { useEffect, useState } from 'react'
import Typography from '../common/Typography'

function Listings() {

  const [items, setItems] = useState([])

  let figurines = [];
  let voitures = [];

  if(items.length > 0) {
    figurines = items.filter((item) => {
      if(item.category.name === "Figurines et Collectibles")
      {
        return item
      }
    } )
  }

  
  if(items.length > 0) {
    voitures = items.filter((item) => {
      if(item.category.name === "Voitures miniatures")
      {
        return item
      }
    } )
  }

  console.log(figurines);


  useEffect(() => {
    const controller = new AbortController();

    const fetchData =  (controller) => {


      try {

        setTimeout(async() => {

          const signal = controller.signal

          const response = await fetch('https://passerelle-shop-api.julienpoirier-webdev.com/products', {signal})
          const data = await response.json()
          setItems(data)
          console.log(data);  
        }, 3000)
    
      }
      catch (error) {
        console.log(error)
      }
    }

    fetchData(controller)


    return (() => {
      controller.abort("cleanup")
      // cleanup (pas obligatoire)
    })
  }, [])

  
  return (
    <div>
   

        {voitures.length > 0 ?
        
        <>
            <Typography tag="h3">Voiture</Typography>

            <div>
              { voitures.map((item) => {
                  return (<div key={item.name}>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.description}</Typography>
                    <img src={item.mainImageURL} alt="" />
                  </div>)
                })}
            </div>

            </>


          :null}


          {figurines.length > 0 ?
                  
                  <>
                      <Typography tag="h3">Figurines</Typography>

                      <div>
                        { figurines.map((item) => {
                            return (<div key={item.name}>
                              <Typography>{item.name}</Typography>
                              <Typography>{item.description}</Typography>
                              <img src={item.mainImageURL} alt="" />
                            </div>)
                          })}
                      </div>

                      </>


                    :null}


      </div>

  )
}

export default Listings