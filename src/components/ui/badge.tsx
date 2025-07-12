import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        destructive_accent:
          'bg-red-400 text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline: 'text-foreground',
        success:
          'border-transparent bg-green-500 text-white shadow hover:bg-green-500/80 dark:bg-green-600 dark:hover:bg-green-600/80',
        warning:
          'border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-500/80 dark:bg-yellow-600 dark:hover:bg-yellow-600/80',
        info: 'border-transparent bg-blue-500 text-white shadow hover:bg-blue-500/80 dark:bg-blue-600 dark:hover:bg-blue-600/80',
        muted:
          'border-transparent bg-muted text-muted-foreground hover:bg-muted/80',
        accent:
          'border-transparent bg-accent text-accent-foreground hover:bg-accent/80',
        ghost:
          'border-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
