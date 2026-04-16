# 🧩 Field

**Sorgente:** `src/components/ui/field.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-field--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Field } from '@csa-italy/havas-ui'

<Field />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  orientation = "vertical",
  ...props
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & VariantProps<(props?: (ConfigVariants<{ orientation: { vertical: string; horizontal: string; responsive: string; }; }> & ClassProp) | undefined) => string>` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `FieldLabel`

> ⚠️ Descrizione non disponibile per FieldLabel.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `LabelProps & RefAttributes<HTMLLabelElement>` | `-` | ✅ | — |
### `FieldGroup`

> ⚠️ Descrizione non disponibile per FieldGroup.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |
### `FieldSeparator`

> ⚠️ Descrizione non disponibile per FieldSeparator.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  children,
  className,
  ...props
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { children?: ReactNode; }` | `-` | ✅ | — |
### `FieldContent`

> ⚠️ Descrizione non disponibile per FieldContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{ className, ...props }` | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.750Z*