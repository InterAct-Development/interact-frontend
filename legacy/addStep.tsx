import * as React from 'react';
import type { NextPage } from "next";
import { useRouter } from 'next/router'

import { Body } from '../layout/Body';

import {
    styled,
    Box,
    Paper,
    Grid,
    TextField,
    Skeleton,
    Stack,
    IconButton,
    Button
} from '@mui/material'

import {
    Add,
    AddPhotoAlternate,
    VideoLibrary
} from '@mui/icons-material';

const AddStep: NextPage = () => {
    const backRouter = useRouter()

    return (
        <Body>
            <Box sx={{ flexGrow: 1, margin: 1 }}>
                <Grid container>
                    <>
                        <Grid xs={12}>
                            <h1>Add Step Form</h1>
                        </Grid>

                        <Grid xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Step/Goal/Achievement"
                                id="fullWidth filled-basic"
                                variant="filled"
                            />
                        </Grid>

                        <Grid xs={12} style={{ marginTop: 20 }}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={8}
                                label="Write something..."
                                // defaultValue="Default Value"
                                id="fullWidth filled-multiline-static"
                                variant="filled"
                            />
                        </Grid>
                        
                        <Grid xs={12}>
                            <p>
                                Add Images

                                <IconButton aria-label="add" color="primary">
                                    <AddPhotoAlternate />
                                </IconButton>    
                            </p>
                        </Grid>
                        
                        <Grid xs={6} style={{ marginTop: -20 }}>
                            <Skeleton
                                sx={{ bgcolor: 'grey.700' }}
                                // animation="wave"
                                variant="rectangular"
                                // width='100%'
                                height={240}
                            />
                        </Grid>
                        
                        <Grid xs={6} style={{ marginTop: -20 }}>
                            <Skeleton
                                sx={{ bgcolor: 'grey.700' }}
                                // animation="wave"
                                variant="rectangular"
                                // width='100%'
                                height={240}
                            />
                        </Grid>
                        
                        <Grid xs={12}>
                            <p>
                                Add Video

                                <IconButton aria-label="add" color="primary">
                                    <VideoLibrary />
                                </IconButton>      
                            </p>
                        </Grid>
                        
                        <Grid xs={12} style={{ marginTop: -20 }}>
                            <Skeleton
                                sx={{ bgcolor: 'grey.700' }}
                                // animation="wave"
                                variant="rectangular"
                                // width='100%'
                                height={240}
                            />
                        </Grid>

                        <Grid 
                            xs={12} 
                            style={{ display: "flex", marginTop: 20, marginBottom: 20 }}
                        >
                            <Button 
                                onClick={() => backRouter.back()} 
                                variant="contained" 
                                style={{ marginLeft: "auto" }}
                            >
                                Back to Profile
                            </Button>
                        </Grid>
                    </>
                </Grid>
            </Box>
        </Body>
    );
}

export default AddStep;