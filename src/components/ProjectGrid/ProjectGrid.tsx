import React from 'react';
import { Grid, Text, Title, rem, useMantineTheme, } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import {
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTypescript,
  IconDiamond,
  IconAugmentedReality2,
  IconBrandUnity,
  IconHash,
  IconFlask,
  IconDatabase,
  IconBrandDocker,
  IconBrandAws,
  IconBrandTerraform,
  IconApi,
} from '@tabler/icons-react';
import { BadgeCard } from '../BadgeCard/BadgeCard';
import classes from './ProjectGrid.module.css';
import FadingIcon from '../FadeIcon/FadeIcon';
import portfoliopic from '../../assets/portfolioSS.png'
import calmcompaniondog from '../../assets/calmCompanionDog.png'
import propertunitypic from '../../assets/Propertunitypic.png'
import spotifyLeaderboardpic from '../../assets/SpotifyLeaderboardpic.png'
import tftpic from '../../assets/tftTitle.jpg'
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
    githubLink: string;
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
      githubLink: 'https://github.com/UsmanS2/AxxessApp2024',
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
      githubLink: 'https://github.com/vvyn/hacksmu24',
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
      githubLink: 'https://github.com/UsmanS2/realhackUNT24',
    },
    {
      id: 'project2',
      image: spotifyLeaderboardpic,
      title: 'Spotify Leaderboard',
      description: 'This app showcases the top-streamed songs on Spotify, allowing users to view detailed statistics for each track. The project involves the creation of a custom API connected to a database, which stores and serves real-time data about each song\'s performance across various platforms like Spotify, YouTube, and TikTok. The API was developed using Node.js with TypeScript, and the frontend is built using React and Mantine for a modern and responsive user interface. This project demonstrates full-stack development skills, including API development, database management, and seamless integration between the backend and frontend.',
      category: 'Personal',
      icons: [
        { emoji: <IconApi size="1.1rem" />, label: 'Api' },
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        // Add other badges
      ],
      githubLink: 'https://github.com/UsmanS2/SpotifyLeaderboard',
    },
    {
      id: 'project4',
      image: portfoliopic,
      title: 'Portfolio Website',
      description: 'This portfolio website is a sophisticated showcase of professional skills and projects, meticulously developed using React and TypeScript to ensure robust and scalable application architecture. Leveraging the power of Mantine, a modern and comprehensive React component library, the website boasts an elegant and responsive design, ensuring an exceptional user experience across all devices.',
      category: 'Personal',
      icons: [
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        // Add other badges
      ],
      githubLink: 'https://github.com/UsmanS2/portfolio-tsxmantine',
    },
    {
      id: 'project5',
      image: tftpic,
      title: 'TFT Stats and AI App',
      description: 'Developed a web application that enables users to search for a Teamfight Tactics summoner and view detailed information about their last 5 matches. The app integrates with the Riot API to fetch match data and displays key details such as match placement, team compositions, and player performance. Leveraging AI, the app analyzes historical match data to predict future outcomes and likely team compositions, providing users with actionable insights. Built with React and Mantine on the frontend, and powered by an Express.js backend for handling API requests and AI model deployment.',
      category: 'Personal',
      icons: [        
        { emoji: <IconApi size="1.1rem" />, label: 'Api' },
        { emoji: <IconBrandReact size="1.1rem" />, label: 'React' },
        { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
        // Add other badges
      ],
      githubLink: 'https://github.com/UsmanS2/tft-stat-checker',
    },
    {
      id: 'project6',
      image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/236/258/datas/medium.png',
      title: 'NuVu',
      description: 'This cutting-edge mobile application offers a revolutionary approach to the car buying experience, enabling users to visualize and interact with potential car purchases through advanced augmented reality (AR) technology. Developed in Unity and programmed in C#, the app harnesses the power of Google\'s ARCore to create immersive, realistic AR visualizations of cars, allowing users to explore various models and features in lifelike detail from the comfort of their own environment.',
      category: 'HackDFW Participant',
      icons: [
        { emoji: <IconAugmentedReality2  />, label: 'Augmented Reality' },
        { emoji: <IconBrandUnity  />, label: 'Unity' },
        { emoji: <IconHash  />, label: 'C#' },
      ],
      githubLink: 'https://devpost.com/software/nuvu-dhewks'
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
      slideGap={{ base: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
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
