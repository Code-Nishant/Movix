import React from 'react'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosection/VideoSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'

function Details() {

  const {mediaType,id}=useParams()
  const {data, loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits, loading: creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      {/* {console.log(data)} */}
      {/* {console.log(credits?.cast)} */}
      <DetailsBanner  video={data?.results[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}></Cast>
      <VideosSection data={data}loading={loading}></VideosSection>
      <Similar mediaType={mediaType} id={id}></Similar>
      <Recommendation mediaType={mediaType} id={id}></Recommendation>
    </div>
  )
}

export default Details