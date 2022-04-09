import {Box, Container, Grid, Typography} from '@mui/material';

export default function Landing() {
    return (
        <Container maxWidth='md'>
            <Box my={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h4' component='h1'>
                            Brian Mwendwa
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1'>
                            I'm a software developer based in the United States.
                        </Typography>
                    </Grid>
                    </Grid>
            </Box>
        </Container>
    );
}
