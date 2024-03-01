import React from 'react';
import { Grid, Text, Title } from '@mantine/core';
import { IconBrandReact, IconBrandReactNative, IconBrandTypescript, IconDiamond, IconArrowNarrowDown } from '@tabler/icons-react';
import { BadgeCard } from '../BadgeCard/BadgeCard';
import classes from './ProjectGrid.module.css';

interface icon {
    emoji: JSX.Element;
    label: string;
}

export interface project {
    image: string;
    title: string;
    description: string;
    category: string;
    icons: icon[];
}

interface badgeCardProps {
    projects: project[];
}

const projects: project[] = [
    {
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/774/237/datas/medium.png',
      title: 'ComfortFlow',
      description: 'Built a mobile app which accurately displays medical statistics such as Body Temperature, Skin Conductance, Heart Rate, and Pressure Points on the body using piezoelectric sensors built into bed sheets. Then generates mobility exercises based off current data and diagnosis',
      category: '#1 Overall Hackathon Winner',
      icons: [
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandReactNative size="1.1rem" />, label: 'React-Native' },
        { emoji: <IconDiamond  />, label: 'Ruby' },
      ],
    },
    {
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/774/237/datas/medium.png',
      title: 'ComfortFlow',
      description: 'Built a mobile app which accurately displays medical statistics such as Body Temperature, Skin Conductance, Heart Rate, and Pressure Points on the body using piezoelectric sensors built into bed sheets. Then generates mobility exercises based off current data and diagnosis',
      category: '#1 Overall Hackathon Winner',
      icons: [
        { emoji: <IconBrandReact />, label: 'React' },
        { emoji: <IconBrandReactNative />, label: 'React-Native' },
        // Add other badges
      ],
    },
    {
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/774/237/datas/medium.png',
      title: 'ComfortFlow',
      description: 'Built a mobile app which accurately displays medical statistics such as Body Temperature, Skin Conductance, Heart Rate, and Pressure Points on the body using piezoelectric sensors built into bed sheets. Then generates mobility exercises based off current data and diagnosis',
      category: '#1 Overall Hackathon Winner',
      icons: [
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandReactNative size="1.1rem" />, label: 'React-Native' },
        { emoji: <IconDiamond  />, label: 'Ruby' },
      ],
    },
    // Add more projects as needed
  ];

function ProjectsGallery() {
  return (
    <>
    <div className='downArrow'>
      <IconArrowNarrowDown size="15rem" />
    </div>
    <Title className={classes.title} ta="right" mt={-50} mr={150} mb={50}>
        My {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'yellow', to: 'pink' }}>
          Projects
        </Text>
      </Title>
    <Grid justify="center" >
      {projects.map((project, index) => (
        <Grid.Col key={index} span={{ base: 2, md: 6, lg: 5 }}>
        <BadgeCard project={project} />
      </Grid.Col>
      ))}
    </Grid>
    </>
  );
}

export default ProjectsGallery;
