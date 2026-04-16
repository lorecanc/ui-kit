# 🧩 ChartContainer

**Sorgente:** `src/components/ui/chart.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-chart--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { ChartContainer } from '@csa-italy/havas-ui'

<ChartContainer />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  id,
  className,
  children,
  config,
  initialDimension = INITIAL_DIMENSION,
  ...props
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { config: ChartConfig; children: ReactNode; initialDimension?: { width: number; height: number; } | undefined; }` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.742Z*