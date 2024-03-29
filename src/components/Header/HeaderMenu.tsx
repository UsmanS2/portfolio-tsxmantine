import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconDownload } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '#Welcome', label: 'Home' },
  {
    link: '#1',
    label: 'Projects',
    links: [
      { link: '#', label: 'ComfortFlow' },
      { link: '/resources', label: 'Portfolio Website' },
      { link: '/community', label: 'Maze Generator' },
    ],
  },
  {
    link: '/about',
    label: 'Experience',
    links: [
      {
        link: '/faq',
        label: (
          <>
            {' '}
            <IconDownload size="0.9rem" /> Resume{' '}
          </>
        ),
      },
    ],
  },
  {
    link: '/faq',
    label: (
      <>
        {' '}
        <IconMail size="0.9rem" />{' '}
      </>
    ),
  },
  {
    link: 'www.linkedin.com/in/ushafi',
    label: (
      <>
        {' '}
        <IconBrandLinkedin size="0.9rem" />{' '}
      </>
    ),
  },
  {
    link: 'https://github.com/UsmanS2',
    label: (
      <>
        {' '}
        <IconBrandGithub size="0.9rem" />{' '}
      </>
    ),
  },
  // {
  //   link: '#2',
  //   label: 'Socials',
  //   links: [
  //     { link: '/faq', label: <IconMail size="0.9rem" /> },
  //     { link: '/demo', label: <IconBrandLinkedin size="0.9rem" /> },
  //     { link: '/forums', label: <IconBrandGithub size="0.9rem" /> },
  //   ],
  // },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <MantineLogo size={0} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
