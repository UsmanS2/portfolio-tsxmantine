import { IconHeart, IconBrandPython, IconBrandTypescript, IconBrandReact, IconBrandReactNative, IconDiamond } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';

const mockdata = {
  image:
    'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/774/237/datas/medium.png',
  title: 'ComfortFlow',
  country: '',
  description:
    'Built a mobile app which accurately displays medical statistics such as Body Temperature, Skin Conductance, Heart Rate, and Pressure Points on the body using piezoelectric sensors built into bed sheets. Then generates mobility exercises based off current data and diagnosis',
  badges: [
    { emoji: <IconBrandPython  />, label: 'Python' },
    { emoji: <IconBrandTypescript  />, label: 'TypeScript' },
    { emoji: <IconBrandReact  />, label: 'React' },
    { emoji: <IconBrandReactNative  />, label: 'React-Native' },
    { emoji: <IconDiamond  />, label: 'Ruby' },
  ],
};

export function BadgeCard() {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          {/* <Badge size="sm" variant="light">
            {country}
          </Badge> */}
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}