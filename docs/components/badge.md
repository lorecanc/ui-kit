# 🧩 Badge

**Sorgente:** `src/components/ui/badge.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-badge--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Badge } from '@csa-italy/havas-ui'

<Badge />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  variant = "default",
  asChild = false,
  ...props
}` | `ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; secondary: string; destructive: string; outline: string; ghost: string; link: string; }; }> & ClassProp) | undefined) => string> & { asChild?: boolean | undefined; }` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.738Z*