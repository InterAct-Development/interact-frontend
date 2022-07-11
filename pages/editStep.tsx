import * as React from 'react';
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Link from "next/link";

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
                            <h1>Edit Step Form</h1>
                        </Grid>

                        <Grid xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Step/Goal/Achievement"
                                defaultValue="Step/Goal Title"
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
                                defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eligendi provident ipsa reiciendis! Facere perspiciatis culpa ratione beatae fuga tempora doloribus?
                                Excepturi impedit saepe officiis nemo, in neque ullam vel asperiores.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                                laboriosam cumque nemo culpa quis, natus dolores aliquid ad, optio quisquam eius similique eligendi.
                                Et pariatur vero delectus tenetur, illum vitae!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptatibus, perferendis ducimus quia quam sed, sint deleniti quod minus provident dicta obcaecati ad debitis at harum minima?
                                Ex quos nihil soluta.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Molestias quaerat ullam expedita animi reiciendis magni repudiandae, cumque cum, similique eos vitae nihil,
                                voluptates distinctio illum unde iste. Suscipit, consequatur possimus?"
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
                            <img
                                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                                width='100%'
                                height={240}
                            />
                        </Grid>

                        <Grid xs={6} style={{ marginTop: -20 }}>
                            <Skeleton
                                sx={{ bgcolor: 'grey.700' }}
                                variant="rectangular"
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
                            <iframe
                                width="100%"
                                height="240"
                                src="https://www.youtube.com/embed/LcKnx7I97yk"
                                frameBorder="0"
                                data-allow="autoplay; encrypted-media"
                                allowFullScreen
                            >
                            </iframe>
                        </Grid>

                        <Grid
                            xs={12}
                            style={{ display: "flex", marginTop: 20, marginBottom: 20 }}
                        >
                            <Link passHref href="/step">
                                <Button
                                    variant="contained"
                                    style={{ marginLeft: "auto" }}
                                >
                                    Back to Step Page
                                </Button>
                            </Link>
                        </Grid>
                    </>
                </Grid>
            </Box>
        </Body>
    );
}

export default AddStep;