import {
  IconHeart,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandReactNative,
  IconDiamond,
  TablerIconsProps,
  IconBrandGithub,
  IconGitBranch,
} from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, rem } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { project } from '../ProjectGrid/ProjectGrid';

interface badgeCardProps {
  project: project;
}

export function BadgeCard({ project }: badgeCardProps) {
  const features = project.icons.map((icon) => (
    <Badge variant="light" key={icon.label} leftSection={icon.emoji}>
      {icon.label}
    </Badge>
  ));

  return (
    <Card withBorder mr={rem(75)} ml={rem(75)} radius="lg" p="md" className={classes.card} >
      <Card.Section>
        <Image src={project.image} alt={project.title} height={160} width={450} />
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
