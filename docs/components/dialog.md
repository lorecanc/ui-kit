# 🧩 Dialog

**Sorgente:** `src/components/ui/dialog.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-dialog--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Dialog } from '@csa-italy/havas-ui'

<Dialog />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `DialogProps` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `DialogContent`

> ⚠️ Descrizione non disponibile per DialogContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  showCloseButton = true,
  ...props
}` | `DialogContentProps & RefAttributes<HTMLDivElement> & { showCloseButton?: boolean | undefined; }` | `-` | ✅ | — |
### `DialogFooter`

> ⚠️ Descrizione non disponibile per DialogFooter.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  showCloseButton = false,
  children,
  ...props
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { showCloseButton?: boolean | undefined; }` | `-` | ✅ | — |
### `DialogHeader`

> ⚠️ Descrizione non disponibile per DialogHeader.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `DialogOverlay`

> ⚠️ Descrizione non disponibile per DialogOverlay.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `DialogOverlayProps & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `DialogPortal`

> ⚠️ Descrizione non disponibile per DialogPortal.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `DialogPortalProps` | `-` | ✅ | — |
### `DialogTrigger`

> ⚠️ Descrizione non disponibile per DialogTrigger.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `DialogTriggerProps & RefAttributes<HTMLButtonElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.748Z*