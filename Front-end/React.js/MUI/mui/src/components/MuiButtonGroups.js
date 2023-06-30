import React from 'react' // rafc
import { Button, Stack, ButtonGroup } from '@mui/material' // Imports mui button, stack and button group

export const MuiButtonGroups = () => { // MuiButtonGroups component
    return (
        <Stack spacing={2}>
            <Stack display='block' spacing={5} direction='row'>
                <ButtonGroup variant="contained" color='warning' orientation='vertical'>
                    <Button href='' onClick={() => alert('Button clicked!')}>Text</Button>
                    <Button href=''>Outlined</Button>
                    <Button href=''>Contained</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    )
}
