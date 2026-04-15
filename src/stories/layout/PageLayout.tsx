import * as React from 'react';
import { cn } from '../../lib/utils';

interface PageLayoutProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function PageLayout({ title, description, actions, children }: PageLayoutProps) {
  return (
    <div className="p-8 pt-0">
      <div className={cn(
        actions ? "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8" : "mb-8"
      )}>
        <div>
          <h1 className="text-3xl font-display font-medium tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-2 mb-8">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
      </div>
      {children}
    </div>
  );
}
