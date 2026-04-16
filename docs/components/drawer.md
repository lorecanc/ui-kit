# 🧩 Drawer

**Sorgente:** `src/components/ui/drawer.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-drawer--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Drawer } from '@csa-italy/havas-ui'

<Drawer />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `DialogProps` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `DrawerPortal`

> ⚠️ Descrizione non disponibile per DrawerPortal.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `DialogPortalProps` | `-` | ✅ | — |
### `DrawerOverlay`

> ⚠️ Descrizione non disponibile per DrawerOverlay.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `Omit<DialogOverlayProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `DrawerTrigger`

> ⚠️ Descrizione non disponibile per DrawerTrigger.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `DialogTriggerProps & RefAttributes<HTMLButtonElement>` | `-` | ✅ | — |
### `DrawerContent`

> ⚠️ Descrizione non disponibile per DrawerContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  ...props
}` | `Omit<DialogContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `DrawerHeader`

> ⚠️ Descrizione non disponibile per DrawerHeader.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `DrawerFooter`

> ⚠️ Descrizione non disponibile per DrawerFooter.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.749Z*