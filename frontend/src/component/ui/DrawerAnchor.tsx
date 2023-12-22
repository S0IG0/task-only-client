import React from "react";

import Drawer from '@mui/joy/Drawer';
import {Button} from "@mui/joy";
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    children?: React.ReactNode
}


const DrawerAnchor = ({children}: Props) => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer =
        (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setOpen(inOpen);
        };

    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon/>
            </Button>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
            >
                {children}
            </Drawer>
        </>
    );
};

export default DrawerAnchor;