import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="left" mt={100}>
        Hi, I'm {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Usman Shafi
        </Text>
      </Title>
      <Text c="dimmed" ta="left" size="lg" maw={580} mx="md" mt="xl" style={{ paddingLeft: '200px' }}>
        Business Computer Information Systems Student focused on learning, growing, and thriving{' '}
        
      </Text>
    </>
  );
}
