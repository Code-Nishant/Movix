import React, { useState } from 'react'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const Upcoming= ()=>{
    
    const [endPoint,setEndPoint]=useState("movie");

    const {data,loading}=useFetch(`/${endPoint}/upcoming`);
    
    const onTabChange=(tab)=>{
        setEndPoint(tab==="Movies"?"movie":"tv")
    }

  return (

    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Upcoming Movies</span>

            <SwitchTabs data={["Movies"]} onTabChange={onTabChange}/>
        </ContentWrapper>

        <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  )
}

export default Upcoming