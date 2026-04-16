# 🧩 Sheet

**Sorgente:** `src/components/ui/sheet.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-sheet--docs)

> A drawer component that slides in from the edge of the screen.
Based on Radix UI Dialog primitive.

---

## 💻 Usage

```tsx
import { Sheet } from '@csa-italy/havas-ui'

<Sheet />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ ...props }` | `DialogProps` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `SheetTrigger`

> ⚠️ Descrizione non disponibile per SheetTrigger.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  ...props
}` | `DialogTriggerProps & RefAttributes<HTMLButtonElement>` | `-` | ✅ | — |
### `SheetContent`

> The content area of the sheet. Contains the overlay, close button, and actual content.
Supports side ("top" | "right" | "bottom" | "left") to control which edge the sheet slides from.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}` | `DialogContentProps & RefAttributes<HTMLDivElement> & { side?: "top" | "right" | "bottom" | "left" | undefined; showCloseButton?: boolean | undefined; }` | `-` | ✅ | — |
### `SheetHeader`

> ⚠️ Descrizione non disponibile per SheetHeader.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `SheetFooter`

> ⚠️ Descrizione non disponibile per SheetFooter.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.754Z*