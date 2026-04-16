# 🧩 SidebarMenuButton

**Sorgente:** `src/components/ui/sidebar.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-sidebar--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { SidebarMenuButton } from '@csa-italy/havas-ui'

<SidebarMenuButton />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}` | `ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean | undefined; isActive?: boolean | undefined; tooltip?: string | (TooltipContentProps & RefAttributes<HTMLDivElement>) | undefined; } & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; }; size: { default: string; sm: string; lg: string; }; }> & ClassProp) | undefined) => string>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.755Z*