import * as React from 'react';
import { TooltipProvider } from '../../components/ui/tooltip';
import { AppLayout } from '../../components/layout/AppLayout';
import { defaultNavItems } from './navItems';

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
          navItems={defaultNavItems}
          currentPath={currentPath}
          brandName="Design System"
          breadcrumbs={[
            { title: "Home", href: "/" },
            { title: breadcrumbTitle },
          ]}
        >
          {children}
        </AppLayout>
      </div>
    </TooltipProvider>
  );
}
