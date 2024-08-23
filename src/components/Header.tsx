'use client'

import * as React from 'react'
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Container, 
  Avatar, 
  Tooltip, 
  Stack,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material'
import SecurityIcon from '@mui/icons-material/Security'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import BuildIcon from '@mui/icons-material/Build'

interface HeaderProps {
  onViewChange: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onViewChange }) => {
  const [subview, setSubview] = React.useState('private-embedding')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newSubview: string,
  ) => {
    if (newSubview) {
      setSubview(newSubview)
      onViewChange(newSubview)
    }
  }

  return (
    <AppBar 
      position='fixed' 
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
      }}

    >
      <Container maxWidth='xl' disableGutters sx={{px: 4}}>
        <Toolbar 
          disableGutters
          sx={{
            gap: 2,
            justifyContent: 'space-between', 
          }}
        >
          <Stack
            sx={{
              width: '250px',
              flexShrink: 0
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}  
            >
              <Avatar
                alt='Trination Logo'
                src='/trination-logo.png'
                sx={{ marginRight: 1, width: '18px' }}
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

            <Typography 
              component='div' 
              fontSize={12} 
              fontWeight={600}
              color='primary'
            >
              Smart Embedded Analytics
            </Typography>
          </Stack>

          <Box
            sx={{
              width: '100%'
            }}
          >
            <ToggleButtonGroup
              color='secondary'
              value={subview}
              exclusive
              onChange={handleChange}
              aria-label='subview'
              
              sx={{
                '& .MuiToggleButton-root': {
                  textTransform: 'none',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50px',
                  border: 'none',
                  height: '50px',
                  '&.Mui-selected': {
                    backgroundColor: '#414141',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '& .MuiTypography-root': {
                      color: '#FFFFFF',
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'secondary',
                    },
                    '&:hover': {
                      backgroundColor: '#818181',
                    },
                  },
                },
              }}
            >
              <ToggleButton value="private-embedding" sx={{ marginRight: 1 }}>
                <SecurityIcon />
                <Typography
                  component='div'
                  fontSize={16}
                  fontWeight={500}
                  sx={{
                    ml:1,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Private Embedding
                </Typography>
              </ToggleButton>

              <ToggleButton value="signed-embedding" sx={{ marginRight: 1 }}>
                <FingerprintIcon />
                <Typography
                  component='div'
                  fontSize={16}
                  fontWeight={500}
                  sx={{
                    ml:1,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Signed Embedding
                </Typography>
              </ToggleButton>

              <ToggleButton value="embed-tool" sx={{ marginRight: 1 }}>
                <BuildIcon />
                <Typography
                  component='div'
                  fontSize={16}
                  fontWeight={500}
                  sx={{
                    ml:1,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Signed URL Tool
                </Typography>
              </ToggleButton>

            </ToggleButtonGroup>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header