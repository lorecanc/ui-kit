# 🧩 InputGroupButton

**Sorgente:** `src/components/ui/input-group.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-input-group--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { InputGroupButton } from '@csa-italy/havas-ui'

<InputGroupButton />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}` | `Omit<ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; secondary: string; ghost: string; destructive: string; link: string; }; size: { default: string; xs: string; sm: string; lg: string; icon: string; "icon-xs": string; "icon-sm": string; "icon-lg": string; }; }> & ClassProp) | undefined) => string> & { asChild?: boolean | undefined; }, "size"> & VariantProps<(props?: (ConfigVariants<{ size: { xs: string; sm: string; "icon-xs": string; "icon-sm": string; }; }> & ClassProp) | undefined) => string>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.751Z*