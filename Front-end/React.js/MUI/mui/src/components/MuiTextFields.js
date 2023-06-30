import React from 'react' // rafc
import { Stack, TextField, InputAdornment } from '@mui/material' // Imports mui button, stack, toggle button and toggle button group
import { useState } from 'react' // Imports react useState hook

export const MuiTextFields = () => { // MuiTextFields component
    const [value, setValue] = useState('') // Sets value to empty string
    return (
        <Stack spacing={2}>
            <Stack display='block' spacing={5} direction='row'>
                <TextField id='standard-basic' label='Standard' />
                <TextField id='filled-basic' label='Filled' variant='filled' />
                <TextField id='outlined-basic' label='Outlined' variant='outlined' />
            </Stack>
            <Stack display='block' spacing={5} direction='row'>
                <TextField id='standard-basic' label='Small' size='small' />
            </Stack>
            <Stack display='block' spacing={5} direction='row'>
                <TextField
                label='Required Input'
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required error={!value}
                helperText={!value ? 'Required' : 'This is a helper text'}
                 />
                <TextField label='Input with helper' helperText='This is a helper text' />
                <TextField label='Password' type='password' helperText='Enter your password here' />
                <TextField label='Disabled Input' disabled />
                <TextField label='Read Only Input' InputProps={{ readOnly: true }} />
            </Stack>
            <Stack display='block' spacing={5} direction='row'>
                <TextField label='Start Adornment' InputProps={
                    { startAdornment: <InputAdornment position='start'>$</InputAdornment> }
                } />
                <TextField label='End Adornment' InputProps={
                    { endAdornment: <InputAdornment position='end'>lb</InputAdornment> }
                } />
            </Stack>
        </Stack>
    )
}