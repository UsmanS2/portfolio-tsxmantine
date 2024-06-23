import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="left" mt={100} ml={150}>
        Hi, I'm{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Usman Shafi
        </Text>
      </Title>
      <Text c="dimmed" ta="left" size="lg" maw={650} mx="md" mt="xl" ml={250}>
        Software Developer, Business Computer Information Systems Student, Innovator {' '}
      </Text>
      <Text c="dimmed" ta="left" size="lg" maw={580} mx="md" mt="sm" ml={250}>
        Focused on learning, growing, and thriving {' '}
      </Text>
    </>
  );
}
