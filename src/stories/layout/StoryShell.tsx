import * as React from 'react';
import { TooltipProvider } from '../../components/ui/tooltip';
import { AppLayout } from '../../components/layout/AppLayout';
import { GlobalHeader } from '../../components/layout/GlobalHeader';
import { NavSidebar } from './NavSidebar';

interface StoryShellProps {
  currentPath: string;
  breadcrumbTitle: string;
  children: React.ReactNode;
}

export function StoryShell({ currentPath, breadcrumbTitle, children }: StoryShellProps) {
  return (
    <TooltipProvider>
      <div className="bg-muted/20">
        <AppLayout
          sidebar={
            <NavSidebar
              currentPath={currentPath}
            />
          }
          header={
            <GlobalHeader
              className="lg:bg-transparent lg:border-none lg:px-6"
              userName="User"
              breadcrumbs={[
                { title: "Home", href: "/" },
                { title: breadcrumbTitle },
              ]}
            />
          }
        >
          {children}
        </AppLayout>
      </div>
    </TooltipProvider>
  );
}
