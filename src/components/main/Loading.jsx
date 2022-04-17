import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Loading = () => {
  return (
    <Box sx={{ width: '100%', position: 'absolute', top: 0, left: 0 }}>
      <LinearProgress />
    </Box>
  )
}
