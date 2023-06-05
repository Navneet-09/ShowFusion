import React from 'react';
import styles from "@/app/styles/common.module.css";
import Moviecard from "../components/MovieCard";

const Movie =async() =>{ 

  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;

  const options = {
  method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5e5d6cd953mshe0249c91cb5cb58p1e94e5jsn51cbed40a49b',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Web Series and Movies</h1>
          <div className={styles.card_section}>
          {
            main_data.map((curElem)=>{
              return <Moviecard key={curElem.id} {...curElem}/>
            })
          }
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Movie;