# 🧩 Command

**Sorgente:** `src/components/ui/command.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-command--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { Command } from '@csa-italy/havas-ui'

<Command />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `Children & Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: Ref<HTMLDivElement> | undefined; } & { asChild?: boolean | undefined; }, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild"> & { label?: string | undefined; shouldFilter?: boolean | undefined; filter?: CommandFilter | undefined; defaultValue?: string | undefined; value?: string | undefined; onValueChange?: ((value: string) => void) | undefined; loop?: boolean | undefined; disablePointerSelection?: boolean | undefined; vimBindings?: boolean | undefined; } & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |

---

## 🧱 Sub-Components

### `CommandGroup`

> ⚠️ Descrizione non disponibile per CommandGroup.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `Children & Omit<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: Ref<HTMLDivElement> | undefined; } & { asChild?: boolean | undefined; }, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild">, "heading" | "value"> & { heading?: ReactNode; value?: string | undefined; forceMount?: boolean | undefined; } & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `CommandItem`

> ⚠️ Descrizione non disponibile per CommandItem.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  children,
  ...props
}` | `Children & Omit<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: Ref<HTMLDivElement> | undefined; } & { asChild?: boolean | undefined; }, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild">, "onSelect" | "disabled" | "value"> & { disabled?: boolean | undefined; onSelect?: ((value: string) => void) | undefined; value?: string | undefined; keywords?: string[] | undefined; forceMount?: boolean | undefined; } & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |
### `CommandSeparator`

> ⚠️ Descrizione non disponibile per CommandSeparator.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  ...props
}` | `Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: Ref<HTMLDivElement> | undefined; } & { asChild?: boolean | undefined; }, "key" | keyof HTMLAttributes<HTMLDivElement> | "asChild"> & { alwaysRender?: boolean | undefined; } & RefAttributes<HTMLDivElement>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.745Z*