import React from 'react';

import { IconBrandReact, IconBrandReactNative, IconBrandTypescript, IconDiamond } from '@tabler/icons-react';
import { BadgeCard } from '../BadgeCard/BadgeCard';

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
        { emoji: <IconBrandReact  />, label: 'React' },
        { emoji: <IconBrandReactNative  />, label: 'React-Native' },
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
    // Add more projects as needed
  ];

function ProjectsGallery() {
  return (
    <div>
      {projects.map((project, index) => (
        <BadgeCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectsGallery;
