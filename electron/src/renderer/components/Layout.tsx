import type { ReactNode } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { ToolsPanel } from './ToolsPanel';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <Header />
      <Sidebar />
      <main className="main-area">
        {children}
      </main>
      <ToolsPanel />
    </div>
  );
}
