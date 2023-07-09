import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://ttsarmayeh.com/wp-content/uploads/2020/05/contactus.jpg);
    width: 100%;
    height: 81vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Contact Us!</Typography>    
                <Text variant="h5">
                    Reach out to us on LinkedIn
                    <Link href="https://www.linkedin.com/in/ekeshwar-aditya-2b5335234/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                    or send us an Email 
                    <Link href="mailto:ekeshwaraditya@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;