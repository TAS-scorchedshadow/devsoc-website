import React from 'react';
import {AspectRatio, Link, Skeleton, Stack} from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import Notangles from "../../../public/projects/notangles/logo.png"
import Unilectives from "../../../public/projects/unilectives/logo.png"
import Freerooms from "../../../public/projects/freerooms/logo.png"
import Structs from "../../../public/projects/structs/logo.png"
import Jobsboard from "../../../public/projects/jobsboard/logo.png"
import Chaos from "../../../public/projects/chaos/logo.png"

export default function AboutUsPage() {
    return (
        <>
            <PageSection title="System Status">
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                        <Image src={Notangles} alt="Notangles" width={50} height={50}/>
                        <Typography sx={{fontWeight: 700}}>
                            Notangles
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#FDFD96",
                        color: "black",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "2rem"
                    }}>
                        Non-Operational
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                        <Image src="https://circles.csesoc.app/assets/circlesLogo-f32e25a3.svg" alt="Notangles"
                               width={50} height={65}/>
                        <Typography sx={{fontWeight: 700}}>
                            Circles
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#77DD77",
                        color: "black",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "2rem"
                    }}>
                        Operational
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                        <Image src={Unilectives} alt="Notangles" width={50} height={50}/>
                        <Typography sx={{fontWeight: 700}}>
                            Unilectives
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#FDFD96",
                        color: "black",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "2rem"
                    }}>
                        Non-Operational
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                        <Image src={Freerooms} alt="Notangles" width={50} height={50}/>
                        <Typography sx={{fontWeight: 700}}>
                            Freerooms
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#FDFD96",
                        color: "black",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "2rem"
                    }}>
                        Non-Operational
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                        <Image src={Structs} alt="Notangles" width={70} height={70}/>
                        <Typography sx={{fontWeight: 700}}>
                            Structs.sh
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#FDFD96",
                        color: "black",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "2rem"
                    }}>
                        Non-Operational
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                        <Image src={Jobsboard} alt="Notangles" width={70} height={70}/>
                        <Typography sx={{fontWeight: 700}}>
                            Jobsboard
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#FDFD96",
                        color: "black",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "2rem"
                    }}>
                        Non-Operational
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                        <Image src={Chaos} alt="Notangles" width={70} height={70}/>
                        <Typography sx={{fontWeight: 700}}>
                            Chaos
                        </Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: "#FDFD96",
                        color: "black",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "2rem"
                    }}>
                        Non-Operational
                    </Box>
                </Box>
            </PageSection>
        </>
    )
}

export interface PersonProps {
    name: string;
    title: string;
    imgUrl?: string;
}

const Person: React.FC<PersonProps> = ({name, title, imgUrl}) => {
    return (
        <Stack
            direction='column'
            alignItems='center'
            width={{xs: "100%", sm: "30%", md: "23%"}}
            textAlign="center"
        >
            <AspectRatio ratio="1" sx={{width: {xs: "50%", sm: "80%"}, borderRadius: "50%", mb: 1}}>
                {imgUrl
                    ? (
                        <Image
                            fill
                            alt={`Photo of ${name}`}
                            src={imgUrl}
                        />
                    ) : (
                        <Skeleton variant="overlay">
                            <Image
                                fill
                                alt={`Placeholder for photo of ${name}`}
                                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            />
                        </Skeleton>
                    )
                }
            </AspectRatio>
            <Typography level="title-lg">
                {name}
            </Typography>
            <Typography>
                {title}
            </Typography>
        </Stack>
    )
};

