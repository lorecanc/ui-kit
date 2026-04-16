# 🧩 ChartConfig

**Sorgente:** `src/components/ui/chart.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-chart--docs)

> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.

---

## 💻 Usage

```tsx
import { ChartConfig } from '@csa-italy/havas-ui'

<ChartConfig />
```

## ⚙️ Props API

> Nessuna prop documentata per questo componente.

---

## 🧱 Sub-Components

### `ChartTooltipContent`

> ⚠️ Descrizione non disponibile per ChartTooltipContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}` | `Omit<Props<ValueType, NameType>, PropertiesReadFromContext> & { active?: boolean | undefined; allowEscapeViewBox?: AllowInDimension | undefined; animationDuration?: number | undefined; animationEasing?: AnimationTiming | undefined; axisId?: AxisId | undefined; content?: ContentType<ValueType, NameType> | undefined; contentStyle?: CSSProperties | undefined; cursor?: CursorDefinition | undefined; defaultIndex?: number | TooltipIndex | undefined; filterNull?: boolean | undefined; formatter?: ((value: ValueType, name: NameType, item: TooltipPayloadEntry, index: number, payload: TooltipPayload) => ReactNode | [ReactNode, ReactNode]) | undefined; includeHidden?: boolean | undefined; isAnimationActive?: boolean | "auto" | undefined; itemSorter?: TooltipItemSorter | undefined; itemStyle?: CSSProperties | undefined; labelFormatter?: ((label: any, payload: TooltipPayload) => ReactNode) | undefined; labelStyle?: CSSProperties | undefined; offset?: number | Coordinate | undefined; payloadUniqBy?: UniqueOption<TooltipPayloadEntry> | undefined; portal?: HTMLElement | null | undefined; position?: Partial<Coordinate> | undefined; reverseDirection?: AllowInDimension | undefined; separator?: string | undefined; shared?: boolean | undefined; trigger?: TooltipTrigger | undefined; useTranslate3d?: boolean | undefined; wrapperStyle?: CSSProperties | undefined; } & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { hideLabel?: boolean | undefined; hideIndicator?: boolean | undefined; indicator?: "line" | "dot" | "dashed" | undefined; nameKey?: string | undefined; labelKey?: string | undefined; } & Omit<Props<ValueType, TooltipNameType>, "accessibilityLayer">` | `-` | ✅ | — |
### `ChartLegendContent`

> ⚠️ Descrizione non disponibile per ChartLegendContent.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `{
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}` | `ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { hideIcon?: boolean | undefined; nameKey?: string | undefined; } & DefaultLegendContentProps & Omit<PresentationAttributesAdaptChildEvent<any, ReactElement<unknown, string | JSXElementConstructor<any>>>, keyof DefaultLegendContentProps>` | `-` | ✅ | — |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.742Z*