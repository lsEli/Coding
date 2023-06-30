import React from 'react' // rafc
import { Button, Stack, IconButton } from '@mui/material' // Imports mui button, stack and icon button
import ShareIcon from '@mui/icons-material/Share' // Imports mui share icon

export const MuiButtons = () => { // MuiButtons component
    return (
        <Stack spacing={2}>
            <Stack display='block' spacing={5} direction='row'>
                <Button variant='text' href=''>Text</Button>
                <Button variant='outlined' href=''>Outlined</Button>
                <Button variant='contained' href=''>Contained</Button>
            </Stack>
            <Stack display='block' spacing={5} direction='row'>
                <Button variant='text' href='' color='error'>Error</Button>
                <Button variant='outlined' href='' color='warning'>Warning</Button>
                <Button variant='contained' href='' color='success'>Success</Button>
                <Button variant='text' href='' color='primary'>Primary</Button>
                <Button variant='outlined' href='' color='secondary'>Secondary</Button>
                <Button variant='contained' href='' color='info'>Info</Button>
            </Stack>
            <Stack display='block' spacing={5} direction='row'>
                <Button variant='text' href='' disabled>Disabled</Button>
                <Button variant='outlined' href='' disabled>Disabled</Button>
                <Button variant='contained' href='' disabled>Disabled</Button>
            </Stack>
            <Stack display='block' spacing={5} direction='row'>
                <Button variant='contained' href='' size='small'>Small</Button>
                <Button variant='contained' href='' size='medium'>Medium</Button>
                <Button variant='contained' href='' size='large'>Large</Button>
            </Stack>
            <Stack display='block' spacing={5} direction='row'>
                <Button children startIcon={<ShareIcon />} disableRipple disableElevation>Share</Button>
                <Button variant='contained' endIcon={<ShareIcon />} onClick={() => alert('Button clicked!')}>Share</Button>
                <IconButton color='primary'><ShareIcon /></IconButton>
            </Stack>
        </Stack>
    )
}
