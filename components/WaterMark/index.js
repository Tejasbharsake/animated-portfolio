import React, { useEffect } from 'react'

const consoleMyName = () => {
    console.log(`
  Designed and Developed By Tejas Bharsake
  __________________________________________________
  
  T T T T T T T T T T T T T T T T T T T T T T T T T
                     T T T T T
                     T T T T T
                     T T T T T
                     T T T T T
                     T T T T T
                     T T T T T
                     T T T T T
                     T T T T T
                     T T T T T
  __________________________________________________
  `)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
