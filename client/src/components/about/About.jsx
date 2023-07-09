import { 
    Box, 
    styled, 
    Typography, 
    Link, 
    Card, 
    CardContent, 
    Grid, 
    Container, 
    Button,
     CardActionArea,
     CardMedia,
     IconButton,
} from '@mui/material';
import { GitHub, Instagram, Email, CenterFocusStrong} from '@mui/icons-material';
// import {Grid, Container, Button} from "@material-ui/core"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom 0px;
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



const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Meet our Team</Typography>
                <Text variant="h5">Our team comprises two passionate individuals, bringing together a wide range of expertise and perspectives to collaborate and tackle challenges with creativity, dedication, and a shared commitment to excellence.<br />
                    {/* If you are interested, you can view some of my favorite projects here */}
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box> */}
                </Text>
                <Text variant="h5">
                    {/* Need something built or simply want to have chat? Reach out to me on */}
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>   */}
                        {/* or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>. */}
                </Text>
                <Box style={{display : 'flex', marginLeft:'20px', justifyContent : 'center'}}>
                    <Box width = '300px' display='flex' margin='20px' marginRight='30px' padding= '30px' alignItems='center'>
                        <Card variant='outlined'>
                            <CardActionArea>
                                <CardMedia 
                                    image={require('./ekeshwar.jpg')} style={{height:300}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' alignItems='center'>
                                        Ekeshwar Aditya
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' alignItems='center'>
                                    I am an IT sophomore at IIIT Allahabad, a full stack developer 
                                    with a passion for learning and creating new technologies.
                                    I also take keen interest in competitive programming.
                                    </Typography>
                                    <IconButton>
                                        <Link href="https://www.linkedin.com/in/ekeshwar-aditya-2b5335234/" color="inherit" target="_blank">
                                            <LinkedInIcon/>
                                        </Link>
                                    </IconButton>
                                    <IconButton>
                                        <Link href="https://github.com/ekeshwar247?tab=repositories" color="inherit" target="_blank">
                                            <GitHubIcon/>
                                        </Link>
                                    </IconButton>
                                    {/* <IconButton>
                                        <Link href="https://www.instagram.com/abhinavj821/" color="inherit" target="_blank">
                                            <InstagramIcon/>
                                        </Link>
                                    </IconButton> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box width = '300px' display='flex' margin='20px' marginLeft='90px' padding= '30px'>
                        <Card variant='outlined'>
                        <CardActionArea>
                                <CardMedia 
                                    image={require('./shreya.jpeg')} style={{height:300}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' alignItems='center'>
                                        Shreya Bharti
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' alignItems='center'>
                                    I am a full stack developer and an undergraduate in Information Technology at IIIT Allahabad. I also love designing. I'm also quite interested in programming competitions.
                                    </Typography>
                                    <IconButton>
                                        <Link href="https://www.linkedin.com/in/shreya-bharti-59049222a/" color="inherit" target="_blank">
                                            <LinkedInIcon/>
                                        </Link>
                                    </IconButton>
                                    <IconButton>
                                        <Link href="https://github.com/shreyaya22" color="inherit" target="_blank">
                                            <GitHubIcon/>
                                        </Link>
                                    </IconButton>
                                    {/* <IconButton>
                                        <Link href="https://www.instagram.com/sumanshekharbhardwaj/" color="inherit" target="_blank">
                                            <InstagramIcon/>
                                        </Link>
                                    </IconButton> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    
                </Box>
            </Wrapper>
        </Box>
    )
}

export default About;