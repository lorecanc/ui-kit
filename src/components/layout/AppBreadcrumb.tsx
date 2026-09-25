import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbItemComp,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

export interface AppBreadcrumbItem {
  title: string;
  href?: string;
}

interface AppBreadcrumbProps {
  breadcrumbs: AppBreadcrumbItem[];
}

export function AppBreadcrumb({ breadcrumbs }: AppBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.reduce<React.ReactNode[]>((acc, crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          acc.push(
            <BreadcrumbItemComp key={`item-${index}`}>
              {isLast || !crumb.href ? (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>
              )}
            </BreadcrumbItemComp>
          );
          if (!isLast) {
            acc.push(<BreadcrumbSeparator key={`sep-${index}`} />);
          }
          return acc;
        }, [])}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
