import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background shadow-sm hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Modern RealUp Brand Variants
        "brand-primary": "bg-brand-red text-brand-red-foreground hover:bg-brand-red-hover transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-300",
        "brand-outline": "border-2 border-brand-red bg-transparent text-brand-red hover:bg-brand-red hover:text-brand-red-foreground transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm hover:shadow-lg transition-all duration-300",
        "hero": "bg-brand-red text-brand-red-foreground hover:bg-brand-red-hover transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl text-base font-semibold transition-all duration-300",
        "glass": "glass-card text-foreground hover:bg-white/90 backdrop-blur-xl border-white/20 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-13 rounded-xl px-8",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
