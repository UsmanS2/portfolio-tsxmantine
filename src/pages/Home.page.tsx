import { AppShell } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import ProjectsGallery from '@/components/ProjectGrid/ProjectGrid';
import ExperienceTimeline from '@/components/Experience/ExperienceTimeline';
import { GetInTouchSimple } from '@/components/Contact/Contact';


export function HomePage() {
  return (
    <>
      <AppShell header={{ height: 56 }}>
        <AppShell.Header>
          <HeaderMenu />
        </AppShell.Header>
        <AppShell.Main>

          <section id="Welcome">
            <Welcome />
            {/* <ColorSchemeToggle /> */}
          </section>

          <section id="projects">
            <ProjectsGallery />
          </section>

          < section id="about">
          <ExperienceTimeline />
          </section>

          <section id="contact">
            <GetInTouchSimple />
          </section>
          
          <ColorSchemeToggle />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
