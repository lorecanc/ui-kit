# 🧩 Item

**Sorgente:** `src/components/ui/item.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-item--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Item } from '@csa-italy/havas-ui'

<Item />
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
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; muted: string; }; size: { default: string; sm: string; xs: string; }; }> & ClassProp) | undefined) => string> & { asChild?: boolean | undefined; }` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `Item`

> ⚠️ Descrizione non disponibile per Item.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; muted: string; }; size: { default: string; sm: string; xs: string; }; }> & ClassProp) | undefined) => string> & { asChild?: boolean | undefined; }` | `-` | ✅ | — |
### `ItemContent`

> ⚠️ Descrizione non disponibile per ItemContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `ItemGroup`

> ⚠️ Descrizione non disponibile per ItemGroup.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `ItemSeparator`

> ⚠️ Descrizione non disponibile per ItemSeparator.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `SeparatorProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `ItemHeader`

> ⚠️ Descrizione non disponibile per ItemHeader.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `ItemFooter`

> ⚠️ Descrizione non disponibile per ItemFooter.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.751Z*