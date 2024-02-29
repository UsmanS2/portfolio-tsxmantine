import { IconHeart, IconBrandPython, IconBrandTypescript, IconBrandReact, IconBrandReactNative, IconDiamond, TablerIconsProps, IconBrandGithub, IconGitBranch } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { project } from '../ProjectGrid/ProjectGrid';



// const mockdata = {
//   image:
//     'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/774/237/datas/medium.png',
//   title: 'ComfortFlow',
//   country: '',
//   description:
//     'Built a mobile app which accurately displays medical statistics such as Body Temperature, Skin Conductance, Heart Rate, and Pressure Points on the body using piezoelectric sensors built into bed sheets. Then generates mobility exercises based off current data and diagnosis',
//   badges: [
//     { emoji: <IconBrandPython  />, label: 'Python' },
//     { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
//     { emoji: <IconBrandReact  />, label: 'React' },
//     { emoji: <IconBrandReactNative  />, label: 'React-Native' },
//     { emoji: <IconDiamond  />, label: 'Ruby' },
//   ],
// };

interface badgeCardProps {
    project: project
}
//   const { image, title, description, country, badges } = mockdata;

export function BadgeCard({ project }: badgeCardProps) {
  
  const features = project.icons.map((icon) => (
    <Badge variant="light" key={icon.label} leftSection={icon.emoji}>
      {icon.label}
    </Badge>
  ));
  

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={project.image} alt={project.title} height={180} width={450}/>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {project.title}
          </Text>
          <Badge size="sm" variant="light">
            {project.category}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {project.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Technologies used
        </Text>
        <div className="badgeContainer">
        <Group gap={7} mt={5}>
          {features}
        </Group>
        </div>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconBrandGithub className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}