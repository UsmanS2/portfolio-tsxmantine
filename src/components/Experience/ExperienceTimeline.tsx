import { Timeline, Text, rem } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';
import { useHover } from '@mantine/hooks';
function ExperienceTimeline() {
  const { hovered, ref } = useHover();
  const hoverRef1 = useHover();
  const hoverRef2 = useHover();
  const hoverRef3 = useHover();
  const hoverRef4 = useHover();
  
  return (
    <Timeline active={4} bulletSize={24} lineWidth={2} mx={rem(350)}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="How it started" ref={ref}>
        <Text c="dimmed" size="sm">Took my first programming class </Text>{/*<Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>*/}
        {hovered ? <><Text>yes</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>2017-2018</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="My First Job"  ref={hoverRef1.ref} >
        <Text c="dimmed" size="sm">Started working at Code Ninjas <Text variant="link" component="span" inherit></Text></Text>
        {hoverRef1.hovered ? <><Text>yes</Text></> : <><Text>no</Text></>}
        <Text size="xs" mt={4}>June 2018 - October 2019</Text>
      </Timeline.Item>

      <Timeline.Item title="My Second Job" bullet={<IconGitPullRequest size={12} />} >
        <Text c="dimmed" size="sm">Started working at theCoderSchool<Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>October 2020 - Present</Text>
      </Timeline.Item>

      <Timeline.Item title="Management Experience" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Spent a summer as the Interim General Manager<Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>May 2023 - August 2023</Text>
      </Timeline.Item>

      <Timeline.Item title="My First Internship" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Started as a Software Developer Intern at the Axle Group<Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>March 2024 - Present</Text>
      </Timeline.Item>

      <Timeline.Item title="Looking For More Oppurtunities" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Looking to expand my skills and experience<Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Summer and Fall 2024</Text>
      </Timeline.Item>

      <Timeline.Item title="Expected Graduation" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Finish Undergrad!<Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>December 2024</Text>
      </Timeline.Item>

    </Timeline>
  );
}

export default ExperienceTimeline;