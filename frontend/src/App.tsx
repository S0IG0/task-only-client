import {
    Box,
    CssBaseline,
    CssVarsProvider,
    GlobalStyles,
    List,
    ListItem,
    ListItemButton,
} from "@mui/joy";
import ModeToggle from "@ui/ModeToggle.tsx";
import NotFoundPage from "@page/public/NotFoundPage.tsx";
import {NamePages, Page, routes} from "@route/routes.tsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import DrawerAnchor from "@ui/DrawerAnchor.tsx";

function App() {

    const pages: Page[] = Object.keys(NamePages)
        .filter(key => !isNaN(Number(key)))
        .map(key => routes[Number(key) as NamePages])

    const navigate = useNavigate();

    return (
        <>
            <CssVarsProvider
                defaultMode="dark"
                disableTransitionOnChange={false}
            >
                <CssBaseline/>
                <GlobalStyles
                    styles={{
                        ':root': {
                            margin: 20,
                        },
                    }}
                />

                <DrawerAnchor>
                    <Box
                        sx={{m: 2}}
                    >
                        <ModeToggle/>
                        <List
                            variant="outlined"
                            sx={{borderRadius: 'sm',}}
                        >
                            {pages.map(page => (
                                <ListItem key={page.name}>
                                    <ListItemButton
                                        onClick={() => navigate(page.path)}
                                    >
                                        {page.name}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </DrawerAnchor>
            </CssVarsProvider>

            <Box>
                <Routes>
                    {pages.map(page => (
                        <Route
                            key={page.path}
                            path={page.path}
                            element={page.component}
                        />
                    ))}
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Routes>
            </Box>
        </>
    );
}

export default App;
