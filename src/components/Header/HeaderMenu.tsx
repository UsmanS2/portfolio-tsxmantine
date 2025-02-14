import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconDownload } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';
import { useState } from 'react';

const links = [
  { link: '#Welcome', label: 'Home' },
  {
    link: '#projects',
    label: 'Projects',
    links: [
      { link: 'https://github.com/UsmanS2/AxxessApp2024', label: 'ComfortFlow' },
      { link: 'https://github.com/UsmanS2/SpotifyLeaderboard', label: 'Spotify Leaderboard' },
      { link: 'https://github.com/UsmanS2/tft-stat-checker', label: 'TFT Stats and AI App' },
      { link: 'https://devpost.com/software/nuvu-dhewks', label: 'NuVu' },
    ],
  },
  {
    link: '#about',
    label: 'Experience',
    links: [
      {
        link: '/Usman_Shafi_Resume.pdf',
        label: (
          <>
            <IconDownload size="0.9rem" /> Resume
          </>
        ),
      },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const scrollWithOffset = (element: HTMLElement) => {
    const yOffset = -80; // Adjust this value as needed
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  };
  

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    event.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      scrollWithOffset(element as HTMLElement);
    }
  };
  

  const items = links.map((link) => {
    if (link.links) {
      const menuItems = link.links.map((item, index) => (
        <Menu.Item key={item.link || index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </Menu.Item>
      ));
  
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <div className={classes.menuItemWrapper}>
              <a
                href={link.link}
                className={classes.link}
                onClick={(event) => handleScroll(event, link.link)}
              >
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size="0.9rem" stroke={1.5} />
                </Center>
              </a>
            </div>
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
        onClick={(event) => handleScroll(event, link.link)}
      >
        {link.label}
      </a>
    );
  });
  

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          {/* <MantineLogo size={25} /> */}
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Group gap={10}>
            <a
              href="#contact"
              className={classes.icon}
              onClick={(event) => handleScroll(event, '#contact')}
            >
              <IconMail size="1.5rem" />
            </a>
            <a href="https://www.linkedin.com/in/ushafi" target="_blank" rel="noopener noreferrer" className={classes.icon}>
              <IconBrandLinkedin size="1.5rem" />
            </a>
            <a href="https://github.com/UsmanS2" target="_blank" rel="noopener noreferrer" className={classes.icon}>
              <IconBrandGithub size="1.5rem" />
            </a>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
