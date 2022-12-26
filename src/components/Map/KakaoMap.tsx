import React, { useEffect, useState } from "react"
import { MapMarker, Map, } from "react-kakao-maps-sdk";
import styled from "styled-components";
import CardLayout from "../CardLayout";


const KakaoMap = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=47d3f3c1fe507b0de68c2e8f6a3b24eb&autoload=false`
    document.head.appendChild(script)
    script.addEventListener('load', ()=>{
      window.kakao.maps.load(()=>{
        const mapContainer = document.getElementById('map')!;
        const mapOption = {
          center : new window.kakao.maps.LatLng(37.2715326, 126.9953603),
          level : 5
        }
        const markerPosition  = new kakao.maps.LatLng(37.2715326,  126.9953603); 
        const marker = new kakao.maps.Marker({
          position : markerPosition
        })

        const map = new window.kakao.maps.Map(mapContainer, mapOption)
        marker.setMap(map)
      })
    })
  },[])
  return(
    <CardLayout>
    <StyledMap id='map' />
</CardLayout>
  )
  }

const StyledMap = styled.section`
  height: 200px;
  width:400px;
  text-align : center;
  #marker{
    width: 100%;
    height:100%;
    margin-left: 65%;
    margin-top: 13%;
  }
`


export default KakaoMap