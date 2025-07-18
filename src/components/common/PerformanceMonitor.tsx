// import React, { useState, useEffect } from 'react';
// import { Activity, X, TrendingUp, TrendingDown, Minus } from 'lucide-react';
// import { performanceMonitor, PERFORMANCE_THRESHOLDS, PerformanceMetrics } from '../../utils/performance';
// import TouchFriendlyButton from './TouchFriendlyButton';

// interface PerformanceMonitorProps {
//   showInProduction?: boolean;
// }

// const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
//   showInProduction = false
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Only show in development or when explicitly enabled
//   const shouldShow = import.meta.env.DEV || showInProduction;

//   useEffect(() => {
//     if (!shouldShow) return;

//     // Update metrics every 5 seconds
//     const interval = setInterval(() => {
//       const currentMetrics = performanceMonitor.getMetrics();
//       setMetrics(currentMetrics);
      
//       // Show monitor if we have metrics
//       if (Object.keys(currentMetrics).length > 0) {
//         setIsVisible(true);
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [shouldShow]);

//   const getMetricStatus = (value: number, thresholds: { good: number; needsImprovement: number }) => {
//     if (value <= thresholds.good) return 'good';
//     if (value <= thresholds.needsImprovement) return 'needs-improvement';
//     return 'poor';
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'good': return 'text-green-600 bg-green-50';
//       case 'needs-improvement': return 'text-yellow-600 bg-yellow-50';
//       case 'poor': return 'text-red-600 bg-red-50';
//       default: return 'text-gray-600 bg-gray-50';
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'good': return <TrendingUp className="w-3 h-3" />;
//       case 'needs-improvement': return <Minus className="w-3 h-3" />;
//       case 'poor': return <TrendingDown className="w-3 h-3" />;
//       default: return <Activity className="w-3 h-3" />;
//     }
//   };

//   const formatMetricValue = (value: number, unit: string = 'ms') => {
//     if (unit === 'score') {
//       return value.toFixed(3);
//     }
//     return `${Math.round(value)}${unit}`;
//   };

//   const metricDefinitions = [
//     {
//       key: 'lcp' as keyof PerformanceMetrics,
//       name: 'LCP',
//       fullName: 'Largest Contentful Paint',
//       description: 'Time until the largest content element is rendered',
//       thresholds: PERFORMANCE_THRESHOLDS.LCP,
//       unit: 'ms'
//     },
//     {
//       key: 'fid' as keyof PerformanceMetrics,
//       name: 'FID',
//       fullName: 'First Input Delay',
//       description: 'Time from first user interaction to browser response',
//       thresholds: PERFORMANCE_THRESHOLDS.FID,
//       unit: 'ms'
//     },
//     {
//       key: 'cls' as keyof PerformanceMetrics,
//       name: 'CLS',
//       fullName: 'Cumulative Layout Shift',
//       description: 'Visual stability of the page',
//       thresholds: PERFORMANCE_THRESHOLDS.CLS,
//       unit: 'score'
//     },
//     {
//       key: 'fcp' as keyof PerformanceMetrics,
//       name: 'FCP',
//       fullName: 'First Contentful Paint',
//       description: 'Time until first content is rendered',
//       thresholds: PERFORMANCE_THRESHOLDS.FCP,
//       unit: 'ms'
//     },
//     {
//       key: 'ttfb' as keyof PerformanceMetrics,
//       name: 'TTFB',
//       fullName: 'Time to First Byte',
//       description: 'Time until first byte is received from server',
//       thresholds: PERFORMANCE_THRESHOLDS.TTFB,
//       unit: 'ms'
//     }
//   ];

//   if (!shouldShow || !isVisible) {
//     return null;
//   }

//   return (
//     <div className="fixed bottom-4 right-4 z-40 max-w-sm">
//       <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
//           <div className="flex items-center gap-2">
//             <Activity className="w-4 h-4 text-blue-600" />
//             <span className="text-sm font-semibold text-gray-900">Performance</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <TouchFriendlyButton
//               onClick={() => setIsExpanded(!isExpanded)}
//               variant="ghost"
//               size="sm"
//               className="text-gray-500 hover:text-gray-700"
//             >
//               {isExpanded ? '−' : '+'}
//             </TouchFriendlyButton>
//             <TouchFriendlyButton
//               onClick={() => setIsVisible(false)}
//               variant="ghost"
//               size="sm"
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <X className="w-4 h-4" />
//             </TouchFriendlyButton>
//           </div>
//         </div>

//         {/* Metrics */}
//         <div className="p-3">
//           {isExpanded ? (
//             <div className="space-y-3">
//               {metricDefinitions.map((metric) => {
//                 const value = metrics[metric.key];
//                 if (value === undefined) return null;

//                 const status = getMetricStatus(value, metric.thresholds);
//                 const statusColor = getStatusColor(status);

//                 return (
//                   <div key={metric.key} className="space-y-1">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <span className="text-sm font-medium text-gray-900">
//                           {metric.name}
//                         </span>
//                         <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${statusColor}`}>
//                           {getStatusIcon(status)}
//                           {formatMetricValue(value, metric.unit)}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-xs text-gray-500">{metric.description}</p>
                    
//                     {/* Progress bar */}
//                     <div className="w-full bg-gray-200 rounded-full h-1">
//                       <div
//                         className={`h-1 rounded-full ${
//                           status === 'good' ? 'bg-green-500' :
//                           status === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
//                         }`}
//                         style={{
//                           width: `${Math.min((value / metric.thresholds.needsImprovement) * 100, 100)}%`
//                         }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="grid grid-cols-3 gap-2">
//               {metricDefinitions.slice(0, 3).map((metric) => {
//                 const value = metrics[metric.key];
//                 if (value === undefined) return null;

//                 const status = getMetricStatus(value, metric.thresholds);
//                 const statusColor = getStatusColor(status);

//                 return (
//                   <div key={metric.key} className="text-center">
//                     <div className="text-xs text-gray-500 mb-1">{metric.name}</div>
//                     <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${statusColor}`}>
//                       {getStatusIcon(status)}
//                       {formatMetricValue(value, metric.unit)}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="px-3 pb-3">
//           <div className="text-xs text-gray-500 text-center">
//             Core Web Vitals • {Object.keys(metrics).length} metrics
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerformanceMonitor;