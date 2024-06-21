import { Timeline, Text, rem, Title } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';
import { useHover } from '@mantine/hooks';
import classes from './ExperienceTimeline.module.css'

function ExperienceTimeline() {
  const { hovered, ref } = useHover();
  const hoverRef1 = useHover();
  const hoverRef2 = useHover();
  const hoverRef3 = useHover();
  const hoverRef4 = useHover();
  const hoverRef5 = useHover();
  const hoverRef6 = useHover();
  
  return (
    <>
    <Title className={classes.title} ta="left" mt={-50} ml={125} mb={50}>
        My {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'yellow', to: 'pink' }}>
          Timeline
        </Text>
      </Title>
    <Timeline active={4} bulletSize={24} lineWidth={2} ml={150}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="How it started" ref={ref}>
        <Text c="dimmed" size="sm">Took my first programming class </Text>{/*<Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>*/}
        {hovered ? <><Text>I took my first programming class in my Junior year of highschool. It was an Intro to Java course and, although I didn't realize it at the time, I would be taking a lot more programming classes in the future.</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>2017-2018</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="My First Job"  ref={hoverRef1.ref} >
        <Text c="dimmed" size="sm">Started working at Code Ninjas <Text variant="link" component="span" inherit></Text></Text>
        {hoverRef1.hovered ? <><Text>I started working at Code Ninjas in June 2018. I was excited to take my new found knowledge of coding and apply it in my life. I also realized that I love teaching! This is where I started my journey with JavaScript.</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>June 2018 - October 2019</Text>
      </Timeline.Item>

      <Timeline.Item title="My Second Job" ref={hoverRef2.ref} bullet={<IconGitPullRequest size={12} />} >
        <Text c="dimmed" size="sm">Started working at theCoderSchool<Text variant="link" component="span" inherit></Text></Text>
        {hoverRef2.hovered ? <><Text>After working at Code Ninjas, I wanted more of a challenge. At theCoderSchool, I honed my skills in Python and developed crucial skills in git. I also learned React, C# in Unity, and C++.</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>October 2020 - June 2024</Text>
      </Timeline.Item>

      <Timeline.Item title="Management Experience"  ref={hoverRef3.ref} bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Spent a summer as the Interim General Manager<Text variant="link" component="span" inherit></Text></Text>
        {hoverRef3.hovered ? <><Text>While I was a instructor, I had the oppurtunity to step up as the Interim Genereal Manager. This role taught me valuable skills in Marketing, Finance, and Management. I was also able to develope skills in Leadership and Networking.</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>May 2023 - August 2023</Text>
      </Timeline.Item>

      <Timeline.Item title="My First Internship"  ref={hoverRef4.ref} bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Started as a Software Developer Intern at the Axle Group<Text variant="link" component="span" inherit></Text></Text>
        {hoverRef4.hovered ? <><Text>In March 2024, I started my first internship. In addition to learning new coding principles in TailwindCSS and HTML, I was also exposed to Agile Methodologies and enterprise level production.</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>March 2024 - Present</Text>
      </Timeline.Item>

      <Timeline.Item title="Looking For More Oppurtunities"  ref={hoverRef5.ref} bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Looking to expand my skills and experience<Text variant="link" component="span" inherit></Text></Text>
        {hoverRef5.hovered ? <><Text>Now, I'm looking forward to expand my skills and improve on my current skillset. I'm excited for what the future holds and can't wait!</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>Fall 2024</Text>
      </Timeline.Item>

      <Timeline.Item title="Expected Graduation"  ref={hoverRef6.ref} bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">Finish Undergrad!<Text variant="link" component="span" inherit></Text></Text>
        {hoverRef6.hovered ? <><Text>Soon I will finish my Degree at the University of North Texas. With the wide bearth of skills I acquired here, such as Data Modeling, Pipelines, and Visualizations, Database Applications, and Networking, I hope to start influencing the world around me on a global scale!</Text></> : <><Text></Text></>}
        <Text size="xs" mt={4}>December 2024</Text>
      </Timeline.Item>

    </Timeline>
    </>
  );
}

export default ExperienceTimeline;