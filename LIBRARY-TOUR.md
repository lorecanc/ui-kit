# CSA Italy Havas UI — Component Library Tour

> Generato tramite analisi statica del codice. Non modificare manualmente.
> Ultimo aggiornamento: 2026-04-15

## Overview

Questa libreria fornisce componenti UI riutilizzabili basati su shadcn/ui, Radix UI e Tailwind CSS.
Importa i componenti da `@csa-italy/havas-design-system`.

## Available Components

| Componente | Descrizione | Storybook |
|------------|-------------|-----------|
| [Accordion](#accordion) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-accordion--docs) |
| [AccordionItem](#accordionitem) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-accordion--docs) |
| [Alert](#alert) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-alert--docs) |
| [AlertDialog](#alertdialog) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-alert-dialog--docs) |
| [AspectRatio](#aspectratio) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-aspect-ratio--docs) |
| [Avatar](#avatar) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-avatar--docs) |
| [Badge](#badge) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-badge--docs) |
| [Breadcrumb](#breadcrumb) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-breadcrumb--docs) |
| [Button](#button) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-button--docs) |
| [ButtonGroup](#buttongroup) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-button-group--docs) |
| [Calendar](#calendar) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-calendar--docs) |
| [Card](#card) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-card--docs) |
| [Carousel](#carousel) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-carousel--docs) |
| [ChartConfig](#chartconfig) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-chart--docs) |
| [Checkbox](#checkbox) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-checkbox--docs) |
| [Collapsible](#collapsible) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-collapsible--docs) |
| [Combobox](#combobox) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-combobox--docs) |
| [Command](#command) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-command--docs) |
| [ContextMenu](#contextmenu) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-context-menu--docs) |
| [Dialog](#dialog) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-dialog--docs) |
| [DirectionProvider](#directionprovider) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-direction--docs) |
| [Drawer](#drawer) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-drawer--docs) |
| [DropdownMenu](#dropdownmenu) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-dropdown-menu--docs) |
| [Empty](#empty) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-empty--docs) |
| [Field](#field) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-field--docs) |
| [HoverCard](#hovercard) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-hover-card--docs) |
| [Input](#input) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-input--docs) |
| [InputGroup](#inputgroup) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-input-group--docs) |
| [InputOTP](#inputotp) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-input-otp--docs) |
| [Item](#item) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-item--docs) |
| [Kbd](#kbd) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-kbd--docs) |
| [Label](#label) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-label--docs) |
| [Menubar](#menubar) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-menubar--docs) |
| [NativeSelect](#nativeselect) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-native-select--docs) |
| [NavigationMenu](#navigationmenu) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-navigation-menu--docs) |
| [Pagination](#pagination) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-pagination--docs) |
| [Popover](#popover) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-popover--docs) |
| [Progress](#progress) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-progress--docs) |
| [RadioGroup](#radiogroup) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-radio-group--docs) |
| [ResizableHandle](#resizablehandle) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-resizable--docs) |
| [ScrollArea](#scrollarea) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-scroll-area--docs) |
| [Select](#select) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-select--docs) |
| [Separator](#separator) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-separator--docs) |
| [Sheet](#sheet) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-sheet--docs) |
| [Sidebar](#sidebar) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-sidebar--docs) |
| [Skeleton](#skeleton) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-skeleton--docs) |
| [Slider](#slider) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-slider--docs) |
| [Toaster](#toaster) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-sonner--docs) |
| [Spinner](#spinner) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-spinner--docs) |
| [Switch](#switch) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-switch--docs) |
| [Table](#table) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-table--docs) |
| [Tabs](#tabs) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-tabs--docs) |
| [Textarea](#textarea) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-textarea--docs) |
| [Toggle](#toggle) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-toggle--docs) |
| [ToggleGroup](#togglegroup) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-toggle-group--docs) |
| [Tooltip](#tooltip) | — | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-tooltip--docs) |
| [GlobalHeader](#globalheader) | GlobalHeader component for the application top navigation.
Standardizes the display of breadcrumbs, notifications, and user profile. | [Demo](https://csa-italy.github.io/havas-design-system/?path=/story/ui-globalheader--docs) |

---

### Accordion

**File:** `src/components/ui/accordion.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-accordion--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-accordion--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Accordion } from '@csa-italy/havas-design-system'

<Accordion />
```


---

### AccordionItem

**File:** `src/components/ui/accordion.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-accordion--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-accordion--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { AccordionItem } from '@csa-italy/havas-design-system'

<AccordionItem />
```


---

### Alert

**File:** `src/components/ui/alert.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-alert--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-alert--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Alert } from '@csa-italy/havas-design-system'

<Alert />
```


---

### AlertDialog

**File:** `src/components/ui/alert-dialog.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-alert-dialog--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-alert-dialog--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { AlertDialog } from '@csa-italy/havas-design-system'

<AlertDialog />
```


---

### AspectRatio

**File:** `src/components/ui/aspect-ratio.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-aspect-ratio--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-aspect-ratio--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { AspectRatio } from '@csa-italy/havas-design-system'

<AspectRatio />
```


---

### Avatar

**File:** `src/components/ui/avatar.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-avatar--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-avatar--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Avatar } from '@csa-italy/havas-design-system'

<Avatar />
```


---

### Badge

**File:** `src/components/ui/badge.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-badge--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-badge--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Badge } from '@csa-italy/havas-design-system'

<Badge />
```


---

### Breadcrumb

**File:** `src/components/ui/breadcrumb.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-breadcrumb--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-breadcrumb--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Breadcrumb } from '@csa-italy/havas-design-system'

<Breadcrumb />
```


---

### Button

**File:** `src/components/ui/button.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-button--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-button--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Button } from '@csa-italy/havas-design-system'

<Button />
```


---

### ButtonGroup

**File:** `src/components/ui/button-group.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-button-group--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-button-group--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { ButtonGroup } from '@csa-italy/havas-design-system'

<ButtonGroup />
```


---

### Calendar

**File:** `src/components/ui/calendar.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-calendar--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-calendar--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Calendar } from '@csa-italy/havas-design-system'

<Calendar />
```


---

### Card

**File:** `src/components/ui/card.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-card--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-card--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Card } from '@csa-italy/havas-design-system'

<Card />
```


---

### Carousel

**File:** `src/components/ui/carousel.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-carousel--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-carousel--docs)

_Nessuna descrizione disponibile._

**Props:**

| Prop | Tipo | Default | Required | Descrizione |
|------|------|---------|----------|-------------|
| `opts` | `Partial<OptionsType> | undefined` | `—` | — | — |
| `plugins` | `CreatePluginType<LoosePluginType, {}>[] | undefined` | `—` | — | — |
| `orientation` | `"horizontal" | "vertical" | undefined` | `—` | — | — |
| `setApi` | `((api: CarouselApi) => void) | undefined` | `—` | — | — |

**Usage:**

```tsx
import { Carousel } from '@csa-italy/havas-design-system'

<Carousel />
```


---

### ChartConfig

**File:** `src/components/ui/chart.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-chart--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-chart--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { ChartConfig } from '@csa-italy/havas-design-system'

<ChartConfig />
```


---

### Checkbox

**File:** `src/components/ui/checkbox.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-checkbox--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-checkbox--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Checkbox } from '@csa-italy/havas-design-system'

<Checkbox />
```


---

### Collapsible

**File:** `src/components/ui/collapsible.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-collapsible--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-collapsible--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Collapsible } from '@csa-italy/havas-design-system'

<Collapsible />
```


---

### Combobox

**File:** `src/components/ui/combobox.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-combobox--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-combobox--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Combobox } from '@csa-italy/havas-design-system'

<Combobox />
```


---

### Command

**File:** `src/components/ui/command.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-command--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-command--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Command } from '@csa-italy/havas-design-system'

<Command />
```


---

### ContextMenu

**File:** `src/components/ui/context-menu.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-context-menu--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-context-menu--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { ContextMenu } from '@csa-italy/havas-design-system'

<ContextMenu />
```


---

### Dialog

**File:** `src/components/ui/dialog.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-dialog--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-dialog--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Dialog } from '@csa-italy/havas-design-system'

<Dialog />
```


---

### DirectionProvider

**File:** `src/components/ui/direction.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-direction--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-direction--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { DirectionProvider } from '@csa-italy/havas-design-system'

<DirectionProvider />
```


---

### Drawer

**File:** `src/components/ui/drawer.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-drawer--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-drawer--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Drawer } from '@csa-italy/havas-design-system'

<Drawer />
```


---

### DropdownMenu

**File:** `src/components/ui/dropdown-menu.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-dropdown-menu--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-dropdown-menu--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { DropdownMenu } from '@csa-italy/havas-design-system'

<DropdownMenu />
```


---

### Empty

**File:** `src/components/ui/empty.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-empty--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-empty--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Empty } from '@csa-italy/havas-design-system'

<Empty />
```


---

### Field

**File:** `src/components/ui/field.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-field--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-field--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Field } from '@csa-italy/havas-design-system'

<Field />
```


---

### HoverCard

**File:** `src/components/ui/hover-card.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-hover-card--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-hover-card--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { HoverCard } from '@csa-italy/havas-design-system'

<HoverCard />
```


---

### Input

**File:** `src/components/ui/input.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-input--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-input--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Input } from '@csa-italy/havas-design-system'

<Input />
```


---

### InputGroup

**File:** `src/components/ui/input-group.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-input-group--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-input-group--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { InputGroup } from '@csa-italy/havas-design-system'

<InputGroup />
```


---

### InputOTP

**File:** `src/components/ui/input-otp.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-input-otp--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-input-otp--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { InputOTP } from '@csa-italy/havas-design-system'

<InputOTP />
```


---

### Item

**File:** `src/components/ui/item.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-item--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-item--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Item } from '@csa-italy/havas-design-system'

<Item />
```


---

### Kbd

**File:** `src/components/ui/kbd.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-kbd--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-kbd--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Kbd } from '@csa-italy/havas-design-system'

<Kbd />
```


---

### Label

**File:** `src/components/ui/label.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-label--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-label--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Label } from '@csa-italy/havas-design-system'

<Label />
```


---

### Menubar

**File:** `src/components/ui/menubar.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-menubar--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-menubar--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Menubar } from '@csa-italy/havas-design-system'

<Menubar />
```


---

### NativeSelect

**File:** `src/components/ui/native-select.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-native-select--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-native-select--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { NativeSelect } from '@csa-italy/havas-design-system'

<NativeSelect />
```


---

### NavigationMenu

**File:** `src/components/ui/navigation-menu.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-navigation-menu--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-navigation-menu--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { NavigationMenu } from '@csa-italy/havas-design-system'

<NavigationMenu />
```


---

### Pagination

**File:** `src/components/ui/pagination.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-pagination--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-pagination--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Pagination } from '@csa-italy/havas-design-system'

<Pagination />
```


---

### Popover

**File:** `src/components/ui/popover.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-popover--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-popover--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Popover } from '@csa-italy/havas-design-system'

<Popover />
```


---

### Progress

**File:** `src/components/ui/progress.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-progress--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-progress--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Progress } from '@csa-italy/havas-design-system'

<Progress />
```


---

### RadioGroup

**File:** `src/components/ui/radio-group.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-radio-group--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-radio-group--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { RadioGroup } from '@csa-italy/havas-design-system'

<RadioGroup />
```


---

### ResizableHandle

**File:** `src/components/ui/resizable.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-resizable--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-resizable--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { ResizableHandle } from '@csa-italy/havas-design-system'

<ResizableHandle />
```


---

### ScrollArea

**File:** `src/components/ui/scroll-area.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-scroll-area--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-scroll-area--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { ScrollArea } from '@csa-italy/havas-design-system'

<ScrollArea />
```


---

### Select

**File:** `src/components/ui/select.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-select--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-select--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Select } from '@csa-italy/havas-design-system'

<Select />
```


---

### Separator

**File:** `src/components/ui/separator.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-separator--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-separator--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Separator } from '@csa-italy/havas-design-system'

<Separator />
```


---

### Sheet

**File:** `src/components/ui/sheet.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-sheet--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-sheet--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Sheet } from '@csa-italy/havas-design-system'

<Sheet />
```


---

### Sidebar

**File:** `src/components/ui/sidebar.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-sidebar--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-sidebar--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Sidebar } from '@csa-italy/havas-design-system'

<Sidebar />
```


---

### Skeleton

**File:** `src/components/ui/skeleton.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-skeleton--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-skeleton--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Skeleton } from '@csa-italy/havas-design-system'

<Skeleton />
```


---

### Slider

**File:** `src/components/ui/slider.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-slider--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-slider--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Slider } from '@csa-italy/havas-design-system'

<Slider />
```


---

### Toaster

**File:** `src/components/ui/sonner.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-sonner--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-sonner--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Toaster } from '@csa-italy/havas-design-system'

<Toaster />
```


---

### Spinner

**File:** `src/components/ui/spinner.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-spinner--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-spinner--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Spinner } from '@csa-italy/havas-design-system'

<Spinner />
```


---

### Switch

**File:** `src/components/ui/switch.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-switch--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-switch--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Switch } from '@csa-italy/havas-design-system'

<Switch />
```


---

### Table

**File:** `src/components/ui/table.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-table--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-table--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Table } from '@csa-italy/havas-design-system'

<Table />
```


---

### Tabs

**File:** `src/components/ui/tabs.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-tabs--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-tabs--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Tabs } from '@csa-italy/havas-design-system'

<Tabs />
```


---

### Textarea

**File:** `src/components/ui/textarea.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-textarea--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-textarea--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Textarea } from '@csa-italy/havas-design-system'

<Textarea />
```


---

### Toggle

**File:** `src/components/ui/toggle.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-toggle--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-toggle--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Toggle } from '@csa-italy/havas-design-system'

<Toggle />
```


---

### ToggleGroup

**File:** `src/components/ui/toggle-group.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-toggle-group--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-toggle-group--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { ToggleGroup } from '@csa-italy/havas-design-system'

<ToggleGroup />
```


---

### Tooltip

**File:** `src/components/ui/tooltip.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-tooltip--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-tooltip--docs)

_Nessuna descrizione disponibile._

**Usage:**

```tsx
import { Tooltip } from '@csa-italy/havas-design-system'

<Tooltip />
```


---

### GlobalHeader

**File:** `src/components/layout/GlobalHeader.tsx`  
**Live Demo:** [https://csa-italy.github.io/havas-design-system/?path=/story/ui-globalheader--docs](https://csa-italy.github.io/havas-design-system/?path=/story/ui-globalheader--docs)

GlobalHeader component for the application top navigation.
Standardizes the display of breadcrumbs, notifications, and user profile.

**Props:**

| Prop | Tipo | Default | Required | Descrizione |
|------|------|---------|----------|-------------|
| `breadcrumbs` | `BreadcrumbData[] | undefined` | `—` | — | List of breadcrumbs to display |
| `userName` | `string | undefined` | `—` | — | Display name for the user profile |
| `userInitials` | `string | undefined` | `—` | — | Initials to show if no avatar image is available |
| `userAvatarUrl` | `string | undefined` | `—` | — | URL for the user avatar image |
| `onNotificationClick` | `(() => void) | undefined` | `—` | — | Callback function when the notification icon is clicked |
| `hasUnreadNotifications` | `boolean | undefined` | `—` | — | Whether to show an unread notification indicator |
| `LinkComponent` | `ElementType<any, keyof JSX.IntrinsicElements> | undefined` | `—` | — | custom Link component for breadcrumbs (e.g. from react-router or next/link) |
| `logo` | `ReactNode` | `—` | — | Optional logo to display on the left of breadcrumbs |
| `rightContent` | `ReactNode` | `—` | — | Optional content to replace the default notifications and avatar section |

**Usage:**

```tsx
import { GlobalHeader } from '@csa-italy/havas-design-system'

<GlobalHeader />
```
