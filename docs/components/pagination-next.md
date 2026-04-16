# 🧩 PaginationNext

**Sorgente:** `src/components/ui/pagination.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-pagination--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { PaginationNext } from '@csa-italy/havas-ui'

<PaginationNext />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  text = "Next",
  ...props
}` | `{ isActive?: boolean | undefined; } & Pick<ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; secondary: string; ghost: string; destructive: string; link: string; }; size: { default: string; xs: string; sm: string; lg: string; icon: string; "icon-xs": string; "icon-sm": string; "icon-lg": string; }; }> & ClassProp) | undefined) => string> & { asChild?: boolean | undefined; }, "size"> & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & { text?: string | undefined; }` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.753Z*