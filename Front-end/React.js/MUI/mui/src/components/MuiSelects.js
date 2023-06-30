import { Box, TextField, MenuItem } from "@mui/material" // Imports mui box
import { useState } from "react" // Imports react useState hook

export const MuiSelects = () => {
    const [language, setLanguage] = useState('') // Declares state variable
    const handleLanguageChange = (event) => { // Declares handleLanguageChange function
        setLanguage(event.target.value) // Sets state variable
    }
    return (
        <Box width='400px'>
            <TextField
            label='Select a programming language'
            select value={language}
            on onChange={handleLanguageChange}
            fullWidth
            >
                <MenuItem value='Javascript'>Javascript</MenuItem>
                <MenuItem value='Python'>Python</MenuItem>
                <MenuItem value='Java'>Java</MenuItem>
                <MenuItem value='C++'>C++</MenuItem>
                <MenuItem value='C#'>C#</MenuItem>
                <MenuItem value='C'>C</MenuItem>
            </TextField>
        </Box>
    )
}
