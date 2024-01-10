import { useEffect, useState } from 'react'
import Typography from '../common/Typography'
import useFetch from '../../hooks/useFetch';

function Listings() {

  const {items, loading, error} = useFetch({url:'https://passerelle-shop-api.julienpoirier-webdev.com/products'})

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


  
  return (
    <div>

      {loading ? <p>Chargement</p>:null}
      {error ? <p>{error}</p> : null}
   

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