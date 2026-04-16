# 🧩 Sidebar

**Sorgente:** `src/components/ui/sidebar.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-sidebar--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Sidebar } from '@csa-italy/havas-ui'

<Sidebar />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  dir,
  ...props
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { side?: "right" | "left" | undefined; variant?: "sidebar" | "floating" | "inset" | undefined; collapsible?: "none" | "icon" | "offcanvas" | undefined; }` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `SidebarContent`

> ⚠️ Descrizione non disponibile per SidebarContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `SidebarFooter`

> ⚠️ Descrizione non disponibile per SidebarFooter.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `SidebarGroup`

> ⚠️ Descrizione non disponibile per SidebarGroup.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `SidebarGroupContent`

> ⚠️ Descrizione non disponibile per SidebarGroupContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `SidebarGroupLabel`

> ⚠️ Descrizione non disponibile per SidebarGroupLabel.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  asChild = false,
  ...props
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { asChild?: boolean | undefined; }` | `-` | ✅ | — |
### `SidebarHeader`

> ⚠️ Descrizione non disponibile per SidebarHeader.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `SidebarMenuItem`

> ⚠️ Descrizione non disponibile per SidebarMenuItem.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>` | `-` | ✅ | — |
### `SidebarMenuSubItem`

> ⚠️ Descrizione non disponibile per SidebarMenuSubItem.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>` | `-` | ✅ | — |
### `SidebarSeparator`

> ⚠️ Descrizione non disponibile per SidebarSeparator.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `SeparatorProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `SidebarTrigger`

> ⚠️ Descrizione non disponibile per SidebarTrigger.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  onClick,
  ...props
}` | `ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: (ConfigVariants<{ variant: { default: string; outline: string; secondary: string; ghost: string; destructive: string; link: string; }; size: { default: string; xs: string; sm: string; lg: string; icon: string; "icon-xs": string; "icon-sm": string; "icon-lg": string; }; }> & ClassProp) | undefined) => string> & { asChild?: boolean | undefined; }` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.755Z*