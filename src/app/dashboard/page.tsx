"use client"

import React, { useState } from 'react'
import {
  Box,
  Typography,
  Container,
} from '@mui/material'
import PrivateEmbedding from '@/components/PrivateEmbedding'
import SignedEmbedding from '@/components/SignedEmbedding'
import EmbedTool from '@/components/EmbedTool'
import Header from '@/components/Header'

const Dashboard: React.FC = () => {
  const [subview, setSubview] = useState<string>('private-embedding')

  const handleViewChange = (newView: string) => {
    setSubview(newView)
  }

  return (
    <>
      <Header onViewChange={handleViewChange}/>
      <Container
        sx = {{mt: 12, zIndex: 5}}
      >
        <Box
          sx = {{
            width: '100%',
            minHeight: '90vh'
          }}
        >
          {subview === 'private-embedding' && <PrivateEmbedding />}
          {subview === 'signed-embedding' && <SignedEmbedding />}
          {subview === 'embed-tool' && <EmbedTool />}
          
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
            mb: 8,
            width: '100%'
          }}>

          <Typography 
            fontSize={18} 
            fontWeight={600} 
            component='div' 
            color='primary'
          >
            Mady By
          </Typography>

          <Box
            component='img'
            alt='Tridorian Logo'
            src='/tridorian-logo.png'
            sx={{ height: 22, objectFit: 'contain', ml: 1}}
          />
        </Box>
      </Container>
    </>
  )
}

export default Dashboard
