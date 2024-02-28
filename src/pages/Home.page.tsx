import { AppShell } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import ProjectsGallery from '@/components/ProjectGrid/ProjectGrid';

export function HomePage() {
  return (
    <>
    <AppShell
    header={{height: 56}}>
      <AppShell.Header>
        <HeaderMenu />
      </AppShell.Header>
      <AppShell.Main>
        <section id = "Welcome">
          <Welcome />
          {/* <ColorSchemeToggle /> */}
        </section>
        <section id = 'Project Grid'>
          <ProjectsGallery />
        </section>
        <Welcome />
        <Welcome />
        <Welcome />
      </AppShell.Main>
      </AppShell>
    </>
  );
}
