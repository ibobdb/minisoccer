interface DashboardPageLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function DashboardPageLayout({
  title,
  description,
  children,
}: DashboardPageLayoutProps) {
  return (
    <div className="flex flex-col space-y-6 w-full max-w-full">
      {/* Page Header */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 bg-white rounded-lg shadow-sm px-6 py-4 relative w-full overflow-hidden">
        {children}
      </main>
    </div>
  );
}
