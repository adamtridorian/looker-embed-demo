import React, { useState } from 'react'
import { Box, Card, CardContent, Stack, Typography, Avatar } from '@mui/material'
import Link from 'next/link'
import { login, signup } from './actions/actions'

export default function Login() {

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box
          component='img'
          src='/login/top-left.png'
          alt='Green Wave'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 195,
          }}
        />
        <Box
          component='img'
          src='/login/bottom-right.png'
          alt='Green Wave'
          style={{
            position: 'fixed',
            bottom: -5,
            right: 0,
            width: 195
          }}
        />
      </Box>

      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        <Card 
          sx={{ 
            minWidth: 300, 
            maxWidth: 480, 
            p: 3, 
            borderRadius: 4, 
            width: '100%', 
            border: 2,
            borderColor: '#CBD5E1', 
            boxShadow: 0
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt='Trination Logo'
                src='/trination-logo.png'
                sx={{ marginRight: 1, width: '20px' }}
              />
              <Typography 
                variant='trination' 
                component='div' 
                fontSize={22} 
                color='primary'
              >
                Looker Demo
              </Typography>
            </Box>

            <Stack
              sx={{
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'flex-start',
                mt: 4
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start' 
                }}
              >
                <Typography 
                  fontSize={40} 
                  fontWeight={600} 
                  component='div' 
                  color='primary'
                >
                  Smart
                </Typography>

                <Box
                  component='img'
                  alt='Trination Logo'
                  src='/login/stars.png'
                  sx={{ width: 24, objectFit: 'contain', ml: 1}}
                />
              </Box>

              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  flexWrap: 'wrap',
                }}
              >
                <Typography 
                  fontSize={40} 
                  fontWeight={500} 
                  component='div' 
                  color='secondary.light' 
                  sx = {{ mr: 1}}
                >
                  Embedded
                </Typography>

                <Typography 
                  fontSize={40} 
                  fontWeight={500} 
                  component='div' 
                  color='primary'
                >
                  Analytics
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mt: 8,
                mb: 10,
                background: '#fafafa',
                height: 40,
                borderRadius: 24,
                border: 1,
                borderColor: '#CBD5E1'
              }}
            >
              <Link 
                href='/dashboard'
                style={{ 
                  textDecoration: 'none',
                }}
              >
                Continue with Google
              </Link>
            </Box>
          </CardContent>
        </Card>

        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            mt: 4
          }}
        >
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
      </Box>
    </>
  )
}
