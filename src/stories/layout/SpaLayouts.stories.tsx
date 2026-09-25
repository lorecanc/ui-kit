import type { Meta, StoryObj } from '@storybook/react';

import { SpaLayout } from '../../components/layout/SpaLayout';
import { BudgetCalculatorPage } from './pages/BudgetCalculatorPage';
import { CampaignMonitorPage } from './pages/CampaignMonitorPage';
import { CloudDeployWizard as CloudDeployWizardPage } from './pages/CloudDeployWizard';
import { MediaPlanningPage } from './pages/MediaPlanningPage';
import { TelemetryDashboardPage } from './pages/TelemetryDashboardPage';

const navigation = [
  { title: 'Telemetry', href: '/telemetry' },
  { title: 'Media Plan', href: '/media-planning' },
  { title: 'Budget', href: '/budget' },
  { title: 'Campaigns', href: '/campaigns' },
  { title: 'Cloud Deploy', href: '/cloud-deploy' },
];

const meta: Meta = {
  title: 'Layout/SpaLayouts',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TelemetryDashboard: Story = {
  render: () => (
    <SpaLayout navItems={navigation} currentPath="/telemetry" brandName="Operations" rows={3} cols={2}>
      <TelemetryDashboardPage />
    </SpaLayout>
  ),
};

export const MediaPlanning: Story = {
  render: () => (
    <SpaLayout navItems={navigation} currentPath="/media-planning" brandName="Media Studio" cols={2}>
      <MediaPlanningPage />
    </SpaLayout>
  ),
};

export const BudgetCalculator: Story = {
  render: () => (
    <SpaLayout navItems={navigation} currentPath="/budget" brandName="Media Studio" rows={2} cols={2}>
      <BudgetCalculatorPage />
    </SpaLayout>
  ),
};

export const CampaignMonitor: Story = {
  render: () => (
    <SpaLayout navItems={navigation} currentPath="/campaigns" brandName="Campaigns" rows={3} cols={2}>
      <CampaignMonitorPage />
    </SpaLayout>
  ),
};

export const CloudDeployWizard: Story = {
  name: 'Cloud Deploy Wizard',
  render: () => (
    <SpaLayout navItems={navigation} currentPath="/cloud-deploy" brandName="Cloud Console" rows={4} cols={2}>
      <CloudDeployWizardPage />
    </SpaLayout>
  ),
};
