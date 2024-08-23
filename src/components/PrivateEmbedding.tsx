import React from 'react'

function PrivateEmbedding() {
  return (
    <iframe
      src='https://tridorian.cloud.looker.com/embed/dashboards/thelook::business_pulse?Timeframe=14+day'
      width='100%'
      height='1000px'
      style={{ border: '0px' }}>
    </iframe>
  )
}

export default PrivateEmbedding