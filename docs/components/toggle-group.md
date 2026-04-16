# 🧩 ToggleGroup

**Sorgente:** `src/components/ui/toggle-group.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-toggle-group--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { ToggleGroup } from '@csa-italy/havas-ui'

<ToggleGroup />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}` | `((ToggleGroupSingleProps | ToggleGroupMultipleProps) & RefAttributes<HTMLDivElement>) & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; }; size: { default: string; sm: string; lg: string; }; }> & ClassProp) | undefined) => string> & { spacing?: number | undefined; orientation?: "horizontal" | "vertical" | undefined; }` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.756Z*