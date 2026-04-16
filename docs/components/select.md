# 🧩 Select

**Sorgente:** `src/components/ui/select.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-select--docs)

> Accessible select component based on Radix UI.
Exporta sub-components: SelectTrigger, SelectContent, SelectItem, SelectLabel, SelectSeparator, SelectGroup, SelectValue.

---

## 💻 Usage

```tsx
import { Select } from '@csa-italy/havas-ui'

<Select />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `SelectSharedProps & { value?: string | undefined; defaultValue?: string | undefined; onValueChange?(value: string): void; }` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `SelectContent`

> ⚠️ Descrizione non disponibile per SelectContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}` | `SelectContentProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SelectGroup`

> Groups SelectItem elements together.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `SelectGroupProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SelectItem`

> ⚠️ Descrizione non disponibile per SelectItem.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  ...props
}` | `SelectItemProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SelectLabel`

> ⚠️ Descrizione non disponibile per SelectLabel.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `SelectLabelProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SelectScrollDownButton`

> ⚠️ Descrizione non disponibile per SelectScrollDownButton.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `SelectScrollDownButtonProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SelectScrollUpButton`

> ⚠️ Descrizione non disponibile per SelectScrollUpButton.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `SelectScrollUpButtonProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SelectSeparator`

> ⚠️ Descrizione non disponibile per SelectSeparator.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `SelectSeparatorProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SelectTrigger`

> The trigger button that opens the select dropdown.
Supports size prop for different heights ("sm" | "default").

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  size = "default",
  children,
  ...props
}` | `SelectTriggerProps & RefAttributes<HTMLButtonElement> & { size?: "default" | "sm" | undefined; }` | `-` | ✅ | — |
### `SelectValue`

> ⚠️ Descrizione non disponibile per SelectValue.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `SelectValueProps & RefAttributes<HTMLSpanElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.754Z*