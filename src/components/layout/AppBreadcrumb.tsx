import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface AppBreadcrumbProps {
  breadcrumbs: BreadcrumbItem[];
}

export function AppBreadcrumb({ breadcrumbs }: AppBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.reduce<React.ReactNode[]>((acc, crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          acc.push(
            <BreadcrumbItem key={`item-${index}`}>
              {isLast || !crumb.href ? (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
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
