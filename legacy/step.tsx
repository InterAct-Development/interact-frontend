import * as React from 'react';
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Link from "next/link";

import { Body } from '../layout/Body';
import ImageList from './stepper/StepView/ImageList';

import {
    Box,
    Paper,
    Grid,
    Button,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';

// Text
// Images
// Video?

const ViewStep: NextPage = () => {
    const backRouter = useRouter()

    return (
        <Body>
            <Box sx={{ flexGrow: 1, margin: 1 }}>
                <Grid container>
                    <>
                        <Grid xs={6}>
                            <h2>Step/Goal Title</h2>
                        </Grid>

                        <Grid
                            xs={6}
                            style={{ display: "flex", marginTop: 20 }}
                        >
                            <Link passHref href="/editStep">
                                <Button
                                    variant="contained"
                                    style={{
                                        marginLeft: "auto",
                                        backgroundColor: deepOrange[500],
                                        height: '70%'
                                    }}
                                >
                                    Edit Achievement
                                </Button>
                            </Link>
                        </Grid>

                        <Grid xs={12}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                                voluptates distinctio illum unde iste. Suscipit, consequatur possimus?
                            </p>
                        </Grid>

                        <Grid xs={12}>
                            <ImageList />
                        </Grid>

                        {/* height=720 is to be "Facebook" style. height=240 is more of a default landscape format */}
                        <Grid xs={12} style={{ marginTop: 20 }}>
                            <iframe
                                width="100%"
                                height="720"
                                // height="240"
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

export default ViewStep;