import { View, Text } from 'react-native'
import React, { Children, PropsWithChildren, createContext, useContext, useState } from 'react'
import { Track } from '../types'

type playerContextType={
    track?:Track,
    setTrack:(track:Track)=>void
}
const PlayerContext=createContext<playerContextType>({
    track:undefined,
    setTrack:()=>{}
})
const PlayerProvider = ({children}:PropsWithChildren) => {
    const [track,setTrack]=useState<Track>()
  return (
    <PlayerContext.Provider value={{track,setTrack}}>
        {children}
    </PlayerContext.Provider>
  )
}
export const usePlayerContext=()=>useContext(PlayerContext)
export default PlayerProvider