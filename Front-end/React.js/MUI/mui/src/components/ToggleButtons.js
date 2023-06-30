import React from 'react' // rafc
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material' // Imports mui button, stack, toggle button and toggle button group
import FordmatBoldIcon from '@mui/icons-material/FormatBold' // Imports mui format bold icon
import FormatItalicIcon from '@mui/icons-material/FormatItalic' // Imports mui format italic icon
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined' // Imports mui format underlined icon
import { useState } from 'react' // Imports react useState hook

export const MuiToggleButtons = () => { // MuiToggleButtons component
    const [formats, setFormats] = useState([]) // Declares state variable
    const handleFormatChange = (event, updatedFormats) => { // Declares handleFormatChange function
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={2}>
            <Stack display='block' spacing={5} direction='row'>
                <ToggleButtonGroup aria-label='text formatting' value={formats} size='small' onChange={handleFormatChange}>
                    <ToggleButton value='bold' aria-label='bold'>
                        <FordmatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}