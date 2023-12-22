import React from 'react';
import {Button, useColorScheme} from "@mui/joy";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ModeToggle = () => {
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <Button
            sx={{
                my: 1,
            }}
            variant="outlined"
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}
        </Button>
    );
};

export default ModeToggle;