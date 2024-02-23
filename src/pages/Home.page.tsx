import { AppShell } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '@/components/Header/HeaderMenu';

export function HomePage() {
  return (
    <>
    <AppShell
    header={{height: 56}}>
      <AppShell.Header>
        <HeaderMenu />
      </AppShell.Header>
      <AppShell.Main>
        <div id = "Welcome">
        <Welcome />
        <ColorSchemeToggle />
        </div>
        <Welcome />
        <Welcome />
        <Welcome />
      </AppShell.Main>
      </AppShell>
    </>
  );
}
