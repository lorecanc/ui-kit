import type { Meta, StoryObj } from '@storybook/react';

import { StoryShell } from './StoryShell';

import { OverviewPage } from './pages/OverviewPage';
import { DashboardGridPage } from './pages/DashboardGridPage';
import { AnalysisFlowPage } from './pages/AnalysisFlowPage';
import { FormManagementPage } from './pages/FormManagementPage';
import { SettingsProfilePage } from './pages/SettingsProfilePage';
import { DataManagementPage } from './pages/DataManagementPage';
import { ContentMediaPage } from './pages/ContentMediaPage';
import { CalendarSchedulingPage } from './pages/CalendarSchedulingPage';
import { CommunicationPage } from './pages/CommunicationPage';
import { FeedbackPage } from './pages/FeedbackPage';

const meta: Meta = {
  title: 'Layout/PageLayouts',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * **1. Default Overview**
 * The canonical page layout pattern.
 */
export const DefaultOverview: Story = {
  render: () => (
    <StoryShell currentPath="/" breadcrumbTitle="Overview Default" rows={3} cols={3}>
      <OverviewPage />
    </StoryShell>
  ),
};

/**
 * **2. Competitive/Grid Dashboard**
 */
export const DashboardGrid: Story = {
  render: () => (
    <StoryShell currentPath="/" breadcrumbTitle="Dashboard View" rows={3} cols={3}>
      <DashboardGridPage />
    </StoryShell>
  ),
};

/**
 * **3. Insight / Analytics Flow**
 */
export const AnalysisFlow: Story = {
  render: () => (
    <StoryShell currentPath="/analytics" breadcrumbTitle="Analysis View" rows={3} cols={3}>
      <AnalysisFlowPage />
    </StoryShell>
  ),
};

/**
 * **4. Form / CRUD Management**
 * Showcase of form components: Input, Textarea, Select, Checkbox, RadioGroup, Switch, Combobox, Dialog, Alert validation states.
 */
export const FormManagement: Story = {
  render: () => (
    <StoryShell currentPath="/forms" breadcrumbTitle="Form Management" rows={3} cols={2}>
      <FormManagementPage />
    </StoryShell>
  ),
};

/**
 * **5. Settings / Profile**
 * Tabs-based settings page with profile, preferences, security, and notifications.
 */
export const SettingsProfile: Story = {
  render: () => (
    <StoryShell currentPath="/settings" breadcrumbTitle="Settings" rows={2} cols={2}>
      <SettingsProfilePage />
    </StoryShell>
  ),
};

/**
 * **6. Data Management**
 * Advanced table with pagination, command palette, context menus, skeleton loading, and empty states.
 */
export const DataManagement: Story = {
  render: () => (
    <StoryShell currentPath="/data" breadcrumbTitle="Data Management" rows={3} cols={2}>
      <DataManagementPage />
    </StoryShell>
  ),
};

/**
 * **7. Content / Media Gallery**
 * Carousel, aspect ratio cards, hover cards, and media management.
 */
export const ContentMedia: Story = {
  render: () => (
    <StoryShell currentPath="/content" breadcrumbTitle="Content & Media" rows={2} cols={2}>
      <ContentMediaPage />
    </StoryShell>
  ),
};

/**
 * **8. Calendar / Scheduling**
 * Calendar component with event management, popover date picker, and scheduling UI.
 */
export const CalendarScheduling: Story = {
  render: () => (
    <StoryShell currentPath="/calendar" breadcrumbTitle="Calendar" rows={3} cols={3}>
      <CalendarSchedulingPage />
    </StoryShell>
  ),
};

/**
 * **9. Communication / Messages**
 * Messaging interface with alerts, toasts, avatars, and compose area.
 */
export const Communication: Story = {
  render: () => (
    <StoryShell currentPath="/messages" breadcrumbTitle="Messages" rows={4} cols={3}>
      <CommunicationPage />
    </StoryShell>
  ),
};

/**
 * **10. Feedback / States**
 * Empty states, loading indicators, confirmation dialogs, and keyboard shortcuts.
 */
export const Feedback: Story = {
  render: () => (
    <StoryShell currentPath="/feedback" breadcrumbTitle="Feedback & States" rows={4} cols={2}>
      <FeedbackPage />
    </StoryShell>
  ),
};
