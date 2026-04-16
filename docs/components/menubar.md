# 🧩 Menubar

**Sorgente:** `src/components/ui/menubar.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-menubar--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Menubar } from '@csa-italy/havas-ui'

<Menubar />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `MenubarProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `MenubarPortal`

> ⚠️ Descrizione non disponibile per MenubarPortal.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `MenubarPortalProps` | `-` | ✅ | — |
### `MenubarTrigger`

> ⚠️ Descrizione non disponibile per MenubarTrigger.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `MenubarTriggerProps & RefAttributes<HTMLButtonElement>` | `-` | ✅ | — |
### `MenubarContent`

> ⚠️ Descrizione non disponibile per MenubarContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}` | `MenubarContentProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `MenubarGroup`

> ⚠️ Descrizione non disponibile per MenubarGroup.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `MenubarGroupProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `MenubarSeparator`

> ⚠️ Descrizione non disponibile per MenubarSeparator.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `MenubarSeparatorProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `MenubarLabel`

> ⚠️ Descrizione non disponibile per MenubarLabel.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  inset,
  ...props
}` | `MenubarLabelProps & RefAttributes<HTMLDivElement> & { inset?: boolean | undefined; }` | `-` | ✅ | — |
### `MenubarItem`

> ⚠️ Descrizione non disponibile per MenubarItem.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  inset,
  variant = "default",
  ...props
}` | `MenubarItemProps & RefAttributes<HTMLDivElement> & { inset?: boolean | undefined; variant?: "default" | "destructive" | undefined; }` | `-` | ✅ | — |
### `MenubarCheckboxItem`

> ⚠️ Descrizione non disponibile per MenubarCheckboxItem.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  checked,
  inset,
  ...props
}` | `MenubarCheckboxItemProps & RefAttributes<HTMLDivElement> & { inset?: boolean | undefined; }` | `-` | ✅ | — |
### `MenubarRadioGroup`

> ⚠️ Descrizione non disponibile per MenubarRadioGroup.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `MenubarRadioGroupProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `MenubarRadioItem`

> ⚠️ Descrizione non disponibile per MenubarRadioItem.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  inset,
  ...props
}` | `MenubarRadioItemProps & RefAttributes<HTMLDivElement> & { inset?: boolean | undefined; }` | `-` | ✅ | — |
### `MenubarSubTrigger`

> ⚠️ Descrizione non disponibile per MenubarSubTrigger.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  inset,
  children,
  ...props
}` | `MenubarSubTriggerProps & RefAttributes<HTMLDivElement> & { inset?: boolean | undefined; }` | `-` | ✅ | — |
### `MenubarSubContent`

> ⚠️ Descrizione non disponibile per MenubarSubContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `MenubarSubContentProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.752Z*