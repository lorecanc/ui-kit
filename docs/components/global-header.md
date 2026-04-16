# 🧩 GlobalHeader

**Sorgente:** `src/components/layout/GlobalHeader.tsx`
**Storybook:** [▶ Vedi la Live Demo](https://csa-italy.github.io/havas-ui/?path=/story/ui-globalheader--docs)

> GlobalHeader component for the application top navigation.
Standardizes the display of breadcrumbs, notifications, and user profile.

---

## 💻 Usage

```tsx
import { GlobalHeader } from '@csa-italy/havas-ui'

<GlobalHeader />
```

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `breadcrumbs` | `BreadcrumbData[] | undefined` | `-` | — | List of breadcrumbs to display |
| `userName` | `string | undefined` | `-` | — | Display name for the user profile |
| `userInitials` | `string | undefined` | `-` | — | Initials to show if no avatar image is available |
| `userAvatarUrl` | `string | undefined` | `-` | — | URL for the user avatar image |
| `onNotificationClick` | `(() => void) | undefined` | `-` | — | Callback function when the notification icon is clicked |
| `hasUnreadNotifications` | `boolean | undefined` | `-` | — | Whether to show an unread notification indicator |
| `LinkComponent` | `ElementType<any, keyof JSX.IntrinsicElements> | undefined` | `-` | — | custom Link component for breadcrumbs (e.g. from react-router or next/link) |
| `logo` | `ReactNode` | `-` | — | Optional logo to display on the left of breadcrumbs |
| `rightContent` | `ReactNode` | `-` | — | Optional content to replace the default notifications and avatar section |

---

## 🧱 Sub-Components

### `GlobalHeader`

> GlobalHeader component for the application top navigation.
Standardizes the display of breadcrumbs, notifications, and user profile.

## ⚙️ Props API

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `breadcrumbs` | `BreadcrumbData[] | undefined` | `-` | — | List of breadcrumbs to display |
| `userName` | `string | undefined` | `-` | — | Display name for the user profile |
| `userInitials` | `string | undefined` | `-` | — | Initials to show if no avatar image is available |
| `userAvatarUrl` | `string | undefined` | `-` | — | URL for the user avatar image |
| `onNotificationClick` | `(() => void) | undefined` | `-` | — | Callback function when the notification icon is clicked |
| `hasUnreadNotifications` | `boolean | undefined` | `-` | — | Whether to show an unread notification indicator |
| `LinkComponent` | `ElementType<any, keyof JSX.IntrinsicElements> | undefined` | `-` | — | custom Link component for breadcrumbs (e.g. from react-router or next/link) |
| `logo` | `ReactNode` | `-` | — | Optional logo to display on the left of breadcrumbs |
| `rightContent` | `ReactNode` | `-` | — | Optional content to replace the default notifications and avatar section |

---
*Generato automaticamente da `scripts/docs/index.mjs` — non modificare manualmente.*
*Ultimo aggiornamento: 2026-04-16T17:16:14.757Z*