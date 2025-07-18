import React from 'react';
import { Users, Clock, DollarSign, Star, Shield, TrendingUp, Wrench, Heart } from 'lucide-react';
import { ProjectMetrics as ProjectMetricsType } from '../../types/project';

interface ProjectMetricsProps {
  metrics: ProjectMetricsType;
  className?: string;
}

const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ metrics, className = '' }) => {
  const formatBudget = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const metricItems = [
    {
      icon: Users,
      label: 'User Capacity',
      value: `${metrics.userCapacity}+ children`,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Clock,
      label: 'Installation Time',
      value: metrics.installationTime,
      color: 'text-accent-600',
      bgColor: 'bg-accent-50'
    },
    {
      icon: DollarSign,
      label: 'Project Investment',
      value: formatBudget(metrics.budgetAmount),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      label: 'Safety Record',
      value: `${metrics.safetyIncidents} incidents`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  // Add optional metrics if they exist
  if (metrics.satisfactionScore) {
    metricItems.push({
      icon: Star,
      label: 'Satisfaction Score',
      value: `${metrics.satisfactionScore}/5.0`,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    });
  }

  if (metrics.usageIncrease) {
    metricItems.push({
      icon: TrendingUp,
      label: 'Usage Increase',
      value: metrics.usageIncrease,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    });
  }

  if (metrics.maintenanceReduction) {
    metricItems.push({
      icon: Wrench,
      label: 'Maintenance Reduction',
      value: metrics.maintenanceReduction,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    });
  }

  return (
    <div className={`${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
          Project Impact & Metrics
        </h3>
        <p className="text-neutral-600">
          Measurable outcomes and community impact from this installation
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metricItems.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div key={index} className="card p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${metric.bgColor} mb-4`}>
                <IconComponent className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold text-neutral-900 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-neutral-600">
                {metric.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Community Impact */}
      {metrics.communityImpact && metrics.communityImpact.length > 0 && (
        <div className="card p-6">
          <div className="flex items-center mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 mr-3">
              <Heart className="w-5 h-5 text-pink-600" />
            </div>
            <h4 className="text-lg font-semibold text-neutral-900">
              Community Impact
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metrics.communityImpact.map((impact, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-700">{impact}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
        <h4 className="text-lg font-semibold text-neutral-900 mb-3">
          Performance Summary
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">
              {metrics.safetyIncidents === 0 ? '100%' : '95%+'}
            </div>
            <div className="text-sm text-neutral-600">Safety Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600 mb-1">
              {metrics.satisfactionScore ? `${(metrics.satisfactionScore * 20).toFixed(0)}%` : '95%+'}
            </div>
            <div className="text-sm text-neutral-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {metrics.usageIncrease || '200%+'}
            </div>
            <div className="text-sm text-neutral-600">Usage Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMetrics;