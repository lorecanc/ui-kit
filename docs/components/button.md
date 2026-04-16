# 🧩 Button

**Sorgente:** `src/components/ui/button.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-button--docs)

> A versatile button component with multiple variants and sizes.
Supports CVA (Class Variance Authority) for flexible styling and asChild pattern for polymorphic behavior.

---

## 💻 Usage

```tsx
import { Button } from '@csa-italy/havas-ui'

<Button />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}` | `ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; secondary: string; ghost: string; destructive: string; link: string; }; size: { default: string; xs: string; sm: string; lg: string; icon: string; "icon-xs": string; "icon-sm": string; "icon-lg": string; }; }> & ClassProp) | undefined) => string> & { asChild?: boolean | undefined; }` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.739Z*