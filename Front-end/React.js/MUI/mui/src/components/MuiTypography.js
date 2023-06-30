import React from 'react' // rafc
import { Typography } from '@mui/material' // Imports mui typography

export const MuiTypography = () => { // MuiTypography component
    return (
        <div>
            <Typography variant='h1' gutterBottom>h1</Typography>
            <Typography variant='h2' component='h1'>h2</Typography>
            <Typography variant='h3' component='h2'>h3</Typography>
            <Typography variant='h4'>h4</Typography>
            <Typography variant='h5'>h5</Typography>
            <Typography variant='h6'>h6</Typography>
            <Typography variant='subtitle1'>subtitle1</Typography>
            <Typography variant='subtitle2'>subtitle2</Typography>
            <Typography variant='body1'>body1</Typography>
            <Typography variant='body2'>body2</Typography>
            <Typography variant='button'>button</Typography>
            <br />
            <Typography variant='caption'>caption</Typography>
            <br />
            <Typography variant='overline'>overline</Typography>
        </div>
    )
}
