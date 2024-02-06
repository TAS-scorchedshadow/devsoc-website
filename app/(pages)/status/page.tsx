import React from 'react';
import {AspectRatio, Link, Skeleton, Stack} from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import type {Metadata} from 'next'
import Statuses from "./status.json"

import Notangles from "../../../public/projects/notangles/logo.png"
import Circles from "../../../public/projects/circles/logo.png"
import Unilectives from "../../../public/projects/unilectives/logo.png"
import Freerooms from "../../../public/projects/freerooms/logo.png"
import Structs from "../../../public/projects/structs/logo.png"
import Jobsboard from "../../../public/projects/jobsboard/logo.png"
import Chaos from "../../../public/projects/chaos/logo.png"

interface StatusBubbleProps {
    status: boolean;
}

type ProjectNames = "Notangles" | "Circles" | "Unilectives" | "Freerooms" | "Structs" | "Jobsboard" | "Chaos"

export const metadata: Metadata = {
    title: 'Status | DevSoc UNSW',
    description: 'Real-time status information on DevSoc\'s apps',
}

export default function StatusPage() {
    return (
        <>
            <PageSection title="System Status">
                {
                    Statuses.map((item, idx) => {
                        return (
                            <Box key={idx} sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "2rem"
                            }}>
                                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                                    {
                                        renderProjectLogo(item.project)
                                    }
                                    <Typography sx={{fontWeight: 700}}>
                                        {item.project}
                                    </Typography>
                                </Box>
                                <StatusBubble status={item.status == "Operational"}/>
                            </Box>
                        )
                    })
                }
            </PageSection>
        </>
    )
}

const StatusBubble = (props: StatusBubbleProps) => {
    const {status} = props
    if (status) {
        return (
            <Box sx={{
                backgroundColor: "#2e7d32",
                color: "white",
                padding: "0.3rem 0.7rem",
                borderRadius: "2rem"
            }}>
                Operational
            </Box>
        )
    } else {
        return (
            <Box sx={{
                backgroundColor: "rgb(253, 237, 237)",
                color: "black",
                padding: "0.3rem 0.7rem",
                borderRadius: "2rem"
            }}>
                Unavailable
            </Box>
        )
    }
}

function renderProjectLogo(name: ProjectNames) {
    switch (name) {
        case "Notangles":
            return <AspectRatio
                ratio="1" variant="plain" objectFit="contain" sx={{
                width: "3rem"
            }}>
                <Image src={Notangles} alt={name} fill/>
            </AspectRatio>
    }
}