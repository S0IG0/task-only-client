import {Box, Typography} from "@mui/joy";

interface Props {
    text: string
}

const CenterInformation = ({text}: Props) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="100wh"
        >
            <Typography level="h1">
                {text}
            </Typography>
        </Box>
    );
};

export default CenterInformation;