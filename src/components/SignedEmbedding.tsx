import React, { useState } from 'react' 
import { 
  TextField, 
  Button } 
from '@mui/material' 

function PrivateEmbedding() {
  const [embedUrl, setEmbedUrl] = useState('')
  const [displayUrl, setDisplayUrl] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmbedUrl(value)
  }

  const handleSubmit = () => {
    setDisplayUrl(true)
  }

  return (
    <>
      <TextField
        label="Embed URL"
        name="url"
        value={embedUrl}
        onChange={handleInputChange}
        required
        fullWidth
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
        sx={{
          mb: 2
        }}>
        Preview Link
      </Button>
      {displayUrl &&
        <iframe
          src={embedUrl}
          width='100%'
          height='1000px'
          style={{ border: '0px' }}>
        </iframe>
      }
    </>
  )
}

export default PrivateEmbedding