import React from 'react';
import { Grid, Text, Title, rem, useMantineTheme, } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import {
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconDiamond,
  IconArrowNarrowDown,
  IconAugmentedReality2,
  IconBrandUnity,
  IconBrandCSharp,
  IconHash,
  IconFlask,
  IconDatabase,
  IconBrandDocker,
  IconBrandAws,
  IconBrandTerraform,
} from '@tabler/icons-react';
import { BadgeCard } from '../BadgeCard/BadgeCard';
import classes from './ProjectGrid.module.css';
import FadingIcon from '../FadeIcon/FadeIcon';
import portfoliopic from '../../assets/portfolioSS.png'
import calmcompaniondog from '../../assets/calmCompanionDog.png'
import propertunitypic from '../../assets/Propertunitypic.png'
import { useMediaQuery } from '@mantine/hooks';

interface icon {
    emoji: JSX.Element;
    label: string;
}

export interface project {
    id: string;
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
      id: 'project1',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/774/237/datas/medium.png',
      title: 'ComfortFlow',
      description: 'This innovative mobile application revolutionizes personal health monitoring by accurately displaying vital medical statistics, including Body Temperature, Skin Conductance, Heart Rate, and Pressure Points. Developed using React Native and TypeScript, the app offers a seamless and intuitive user experience across various mobile platforms, ensuring wide accessibility and ease of use.',
      category: 'Hackathon Winner',
      icons: [
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandReactNative size="1.1rem" />, label: 'React-Native' },
        { emoji: <IconDiamond  />, label: 'Ruby' },
      ],
    },
    {
      id: 'project5',
      image: calmcompaniondog,
      title: 'Calm Companion',
      description: 'Developed a health and wellness platform for students, integrating SMU’s mental health resources. The system, built using TypeScript, Flask, and MongoDB, was containerized with Docker and deployed using AWS ECS and Terraform. Implemented real-time step tracking and a friends feature while securing global access through Cloudflare.',
      category: 'Hackathon Winner',
      icons: [
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        { emoji: <IconFlask  />, label: 'Flask' },
        { emoji: <IconDatabase  />, label: 'MongoDB' },
        { emoji: <IconBrandDocker  />, label: 'Docker' },
        { emoji: <IconBrandAws  />, label: 'AWS ECS' },
        { emoji: <IconBrandTerraform  />, label: 'Terraform' },
        // Add other badges
      ],
    },
    {
      id: 'project6',
      image: propertunitypic,
      title: 'Propertunity',
      description: 'Created an AI-driven property management platform using TypeScript, React, Next.js, Flask, and MongoDB. Designed predictive models to forecast maintenance needs, incorporating weather data for proactive planning. Implemented domain-based automatic user routing with Firebase for a seamless user experience.',
      category: 'Hackathon Winner',
      icons: [
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        // Add other badges
      ],
    },
    {
      id: 'project2',
      image: portfoliopic,
      title: 'Portfolio Website',
      description: 'This portfolio website is a sophisticated showcase of professional skills and projects, meticulously developed using React and TypeScript to ensure robust and scalable application architecture. Leveraging the power of Mantine, a modern and comprehensive React component library, the website boasts an elegant and responsive design, ensuring an exceptional user experience across all devices.',
      category: 'Personal',
      icons: [
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        // Add other badges
      ],
    },
    {
      id: 'project3',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/236/258/datas/medium.png',
      title: 'NuVu',
      description: 'This cutting-edge mobile application offers a revolutionary approach to the car buying experience, enabling users to visualize and interact with potential car purchases through advanced augmented reality (AR) technology. Developed in Unity and programmed in C#, the app harnesses the power of Google\'s ARCore to create immersive, realistic AR visualizations of cars, allowing users to explore various models and features in lifelike detail from the comfort of their own environment.',
      category: 'HackDFW Participant',
      icons: [
        { emoji: <IconAugmentedReality2  />, label: 'Augmented Reality' },
        { emoji: <IconBrandUnity  />, label: 'Unity' },
        { emoji: <IconHash  />, label: 'C#' },
      ],
    },
    // Add more projects as needed
  ];

function ProjectsGallery() {

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = projects.map((project) => (
    <Carousel.Slide key={project.id}>
      <BadgeCard project={project} />
    </Carousel.Slide>
    
  ));


  return (
    <>
    <div className='downArrow'>
      {/* <IconArrowNarrowDown size="15rem" /> */}
      <FadingIcon />
    </div>
    <Title className={classes.title} ta="right" mt={-50} mr={150} mb={50}>
        My {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'yellow', to: 'pink' }}>
          Projects
        </Text>
      </Title>


    {/* <Grid justify="center" >
      {projects.map((project, index) => (
        <Grid.Col key={index} span={{ base: 2, md: 6, lg: 5 }}>
        <BadgeCard project={project} />
      </Grid.Col>
      ))}
    </Grid> */}

    

  {/* return ( */}
  <div className='carouselContainer'>
    <Carousel
      // maw={rem(200)}
      withIndicators
      m={rem(100)}
      slideSize={{ base: '20%', sm: '10%', md: '10%', lg: '20%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 3}
      loop
      dragFree
    >
      {slides}
    </Carousel>
    </div>
  


    </>
  );
}

export default ProjectsGallery;
