---
name: ui-styling
description: "Create beautiful, accessible user interfaces with shadcn/ui components and Tailwind CSS. Invoke when building UI components, implementing design systems, creating responsive layouts, adding accessible components, or customizing themes."
---

# UI Styling Skill

Comprehensive skill for creating beautiful, accessible user interfaces using shadcn/ui components and Tailwind CSS.

## When to Use

- Building UI with React-based frameworks (Next.js, Vite, Remix, Astro)
- Implementing accessible components (dialogs, forms, tables, navigation)
- Styling with utility-first CSS approach
- Creating responsive, mobile-first layouts
- Implementing dark mode and theme customization
- Building design systems with consistent tokens
- Adding complex UI patterns (data tables, charts, command palettes)

## Core Stack

### Component Layer: shadcn/ui
- Pre-built accessible components via Radix UI primitives
- Copy-paste distribution model (components live in your codebase)
- TypeScript-first with full type safety
- Composable primitives for complex UIs
- CLI-based installation and management

### Styling Layer: Tailwind CSS
- Utility-first CSS framework
- Build-time processing with zero runtime overhead
- Mobile-first responsive design
- Consistent design tokens (colors, spacing, typography)
- Automatic dead code elimination

## Quick Start

### shadcn/ui Setup

```bash
npx shadcn@latest init
```

### Add Components

```bash
npx shadcn@latest add button card dialog form
```

### Basic Component Usage

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="container mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Analytics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">View your metrics</p>
          <Button variant="default" className="w-full">
            View Details
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

## Component Library

### Form Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| Button | Actions, submissions | variant, size, disabled |
| Input | Text input | type, placeholder, disabled |
| Select | Dropdown selection | value, onValueChange |
| Checkbox | Boolean input | checked, onCheckedChange |
| Switch | Toggle input | checked, onCheckedChange |
| Textarea | Multi-line input | rows, placeholder |
| Form | Form wrapper | control, onSubmit |

### Layout Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| Card | Content container | className |
| Tabs | Tab navigation | defaultValue, value |
| Accordion | Collapsible sections | type, collapsible |
| Separator | Visual divider | orientation |
| Sheet | Side panel | open, onOpenChange |

### Overlay Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| Dialog | Modal dialog | open, onOpenChange |
| Drawer | Slide-out panel | open, onOpenChange |
| Popover | Floating content | open, onOpenChange |
| Tooltip | Hover information | content, delayDuration |
| Toast | Notification | title, description, variant |
| Alert | Inline message | variant, title |

### Data Display

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| Table | Data table | - |
| DataTable | Sortable/filterable table | columns, data |
| Avatar | User image | src, fallback |
| Badge | Status indicator | variant |
| Progress | Progress bar | value |
| Skeleton | Loading placeholder | className |

## Tailwind Utilities

### Layout

```css
/* Flexbox */
flex, flex-col, flex-row, items-center, justify-between, gap-4

/* Grid */
grid, grid-cols-1, grid-cols-2, grid-cols-3, gap-6

/* Position */
relative, absolute, fixed, sticky, top-0, bottom-0

/* Container */
container, mx-auto, max-w-7xl
```

### Spacing

```css
/* Padding */
p-4, px-4, py-4, pt-4, pb-4, pl-4, pr-4

/* Margin */
m-4, mx-4, my-4, mt-4, mb-4, ml-4, mr-4

/* Gap */
gap-2, gap-4, gap-6, gap-8

/* Scale: 1=4px, 2=8px, 4=16px, 6=24px, 8=32px */
```

### Typography

```css
/* Size */
text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl

/* Weight */
font-normal, font-medium, font-semibold, font-bold

/* Alignment */
text-left, text-center, text-right

/* Color */
text-foreground, text-muted-foreground, text-primary
```

### Colors

```css
/* Background */
bg-background, bg-card, bg-primary, bg-secondary, bg-muted

/* Text */
text-foreground, text-muted-foreground, text-primary

/* Border */
border, border-input, border-border, border-primary
```

### Borders & Shadows

```css
/* Border */
border, border-2, border-t, border-b, rounded-lg, rounded-xl, rounded-full

/* Shadow */
shadow-sm, shadow-md, shadow-lg, shadow-xl
```

## Responsive Design

### Breakpoints

| Prefix | Min Width |
|--------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### Responsive Patterns

```tsx
/* Mobile-first responsive */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

/* Responsive text */
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">

/* Responsive padding */
<div className="p-4 md:p-6 lg:p-8">

/* Hide/show on breakpoints */
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>
```

## Dark Mode

### Setup

```tsx
// layout.tsx or _app.tsx
import { ThemeProvider } from "next-themes"

export function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
```

### Dark Mode Classes

```tsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Content
  </p>
</div>
```

### Theme Toggle

```tsx
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle Theme
    </Button>
  )
}
```

## Accessibility

### Focus States

```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Click me
</button>
```

### Screen Reader Support

```tsx
<button aria-label="Close dialog">
  <X className="h-4 w-4" />
</button>

<div role="alert" aria-live="polite">
  {errorMessage}
</div>
```

### Keyboard Navigation

```tsx
// Radix UI components handle this automatically
// For custom components:

<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick()
    }
  }}
>
  Custom button
</div>
```

## Common Patterns

### Form with Validation

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 characters")
})

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </Form>
  )
}
```

### Data Table

```tsx
import { DataTable } from "@/components/ui/data-table"

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "status", header: "Status" }
]

const data = [
  { name: "John", email: "john@example.com", status: "Active" },
  { name: "Jane", email: "jane@example.com", status: "Inactive" }
]

export function UsersTable() {
  return <DataTable columns={columns} data={data} />
}
```

### Modal Dialog

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function ConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Delete</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to delete this item?</p>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

## Best Practices

1. **Component Composition** - Build complex UIs from simple, composable primitives
2. **Utility-First Styling** - Use Tailwind classes directly; extract components only for true repetition
3. **Mobile-First Responsive** - Start with mobile styles, layer responsive variants
4. **Accessibility-First** - Leverage Radix UI primitives, add focus states, use semantic HTML
5. **Design Tokens** - Use consistent spacing scale, color palettes, typography system
6. **Dark Mode Consistency** - Apply dark variants to all themed elements
7. **Performance** - Leverage automatic CSS purging, avoid dynamic class names
8. **TypeScript** - Use full type safety for better DX
9. **Visual Hierarchy** - Let composition guide attention, use spacing and color intentionally

## Resources

- shadcn/ui Docs: https://ui.shadcn.com
- Tailwind CSS Docs: https://tailwindcss.com
- Radix UI: https://radix-ui.com
