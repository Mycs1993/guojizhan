"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import Image from "next/image";

// Define locations for markers (approximate % coordinates on a Mercator projection)
const LOCATIONS = [
    { id: 'cn', x: 74, y: 40, label: 'China (HQ)' },
    { id: 'ru', x: 65, y: 25, label: 'Russia' },
    { id: 'uz', x: 60, y: 38, label: 'Uzbekistan' },
    { id: 'kz', x: 62, y: 32, label: 'Kazakhstan' },
    { id: 'vn', x: 75, y: 55, label: 'Vietnam' },
    { id: 'th', x: 73, y: 53, label: 'Thailand' },
    { id: 'id', x: 78, y: 65, label: 'Indonesia' },
    { id: 'my', x: 74, y: 60, label: 'Malaysia' },
    { id: 'ph', x: 82, y: 55, label: 'Philippines' },
    { id: 'sg', x: 75, y: 61, label: 'Singapore' },
    { id: 'pk', x: 65, y: 45, label: 'Pakistan' },
    { id: 'bd', x: 69, y: 48, label: 'Bangladesh' },
    { id: 'in', x: 67, y: 50, label: 'India' },
    { id: 'sa', x: 55, y: 48, label: 'Saudi Arabia' },
    { id: 'ae', x: 58, y: 47, label: 'UAE' },
    { id: 'tr', x: 52, y: 37, label: 'Turkey' },
    { id: 'de', x: 48, y: 28, label: 'Germany' },
    { id: 'fr', x: 46, y: 30, label: 'France' },
    { id: 'ro', x: 52, y: 32, label: 'Romania' },
    { id: 'za', x: 51, y: 78, label: 'South Africa' },
    { id: 'eg', x: 51, y: 45, label: 'Egypt' },
    { id: 'ng', x: 45, y: 55, label: 'Nigeria' },
    { id: 'mx', x: 18, y: 48, label: 'Mexico' },
    { id: 'us', x: 20, y: 35, label: 'USA' },
    { id: 'ca', x: 22, y: 25, label: 'Canada' },
    { id: 'br', x: 30, y: 68, label: 'Brazil' },
    { id: 'ar', x: 28, y: 80, label: 'Argentina' },
    { id: 'co', x: 26, y: 58, label: 'Colombia' },
    { id: 'pe', x: 26, y: 65, label: 'Peru' },
    { id: 'cl', x: 26, y: 80, label: 'Chile' },
    { id: 'au', x: 85, y: 75, label: 'Australia' },
    { id: 'nz', x: 92, y: 85, label: 'New Zealand' },
    // New additions
    { id: 'gb', x: 46, y: 26, label: 'UK' },
    { id: 'it', x: 50, y: 31, label: 'Italy' },
    { id: 'es', x: 45, y: 32, label: 'Spain' },
    { id: 'pl', x: 53, y: 27, label: 'Poland' },
    { id: 'jp', x: 88, y: 38, label: 'Japan' },
    { id: 'kr', x: 84, y: 38, label: 'South Korea' },
    { id: 'ke', x: 58, y: 60, label: 'Kenya' },
    { id: 'gh', x: 48, y: 58, label: 'Ghana' },
    { id: 'qa', x: 60, y: 46, label: 'Qatar' },
    // Northern additions
    { id: 'se', x: 50, y: 20, label: 'Sweden' },
    { id: 'no', x: 48, y: 20, label: 'Norway' },
    { id: 'fi', x: 55, y: 18, label: 'Finland' },
    { id: 'mn', x: 78, y: 32, label: 'Mongolia' },
    { id: 'by', x: 56, y: 25, label: 'Belarus' },
];

export function GlobalMap() {
    const t = useTranslations('AboutPage');
    const [activePoint, setActivePoint] = useState<string | null>(null);

    // Identify HQ
    const HQ = LOCATIONS.find(l => l.id === 'cn')!;
    const CLIENTS = LOCATIONS.filter(l => l.id !== 'cn');

    // Connection paths
    const paths = useMemo(() => {
        return CLIENTS.map(location => {
            const startX = HQ.x;
            const startY = HQ.y;
            const endX = location.x;
            const endY = location.y;

            // Simple midpoint for curve control
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2;

            // Arch the curve slightly upwards (reduce y for negative curve)
            // The further the distance, the higher the arc
            const dist = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
            const arcHeight = dist * 0.2; // 20% of distance
            const controlY = midY - arcHeight;

            return {
                id: location.id,
                d: `M${startX},${startY} Q${midX},${controlY} ${endX},${endY}`,
                label: location.label
            };
        });
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] bg-slate-900 border border-slate-700 rounded-xl relative overflow-hidden group">
            {/* Map Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/world_map_solid.png"
                    alt="World Map"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* SVG Layer for Connections */}
            <svg
                className="absolute inset-4 md:inset-10 w-[calc(100%-2rem)] h-[calc(100%-2rem)] md:w-[calc(100%-5rem)] md:h-[calc(100%-5rem)] pointer-events-none z-0 overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                    </linearGradient>
                    <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                        <polygon points="0 0, 4 2, 0 4" fill="#60a5fa" fillOpacity="0.8" />
                    </marker>
                </defs>

                {/* Animated Lines */}
                {paths.map((path) => (
                    <g key={path.id}>
                        {/* Base faint line */}
                        <path
                            d={path.d}
                            fill="none"
                            stroke="url(#gradientLine)"
                            strokeWidth="0.2"
                            className="opacity-30"
                        />
                        {/* Animated flow line - only a subset are active at a time to reduce noise, or cycle them? 
                             Let's just animate all slowly.
                         */}
                        <circle r="0.8" fill="#60a5fa" className="opacity-0 animate-flow">
                            <animateMotion
                                dur={`${2 + Math.random() * 2}s`}
                                repeatCount="indefinite"
                                path={path.d}
                                keyPoints="0;1"
                                keyTimes="0;1"
                                calcMode="linear"
                            />
                            <animate
                                attributeName="opacity"
                                values="0;1;0"
                                dur={`${2 + Math.random() * 2}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>
                ))}
            </svg>

            {/* Markers Container */}
            <div className="absolute inset-4 md:inset-10 z-10">
                {LOCATIONS.map((loc) => (
                    <div
                        key={loc.id}
                        className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-transform hover:scale-150 z-10"
                        style={{
                            left: `${loc.x}%`,
                            top: `${loc.y}%`,
                            backgroundColor: loc.id === 'cn' ? '#ef4444' : '#3b82f6',
                            boxShadow: loc.id === 'cn' ? '0 0 10px rgba(239,68,68,0.5)' : '0 0 5px rgba(59,130,246,0.5)'
                        }}
                        title={loc.label}
                    >
                        {/* Pulse for HQ */}
                        {loc.id === 'cn' && (
                            <div className="absolute -inset-2 rounded-full bg-red-500/30 animate-ping pointer-events-none"></div>
                        )}
                        {/* Smaller Pulse for Clients to make map "alive" */}
                        {loc.id !== 'cn' && (
                            <div className="absolute -inset-1 rounded-full bg-blue-500/20 animate-pulse pointer-events-none" style={{ animationDelay: `${Math.random() * 2}s` }}></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-slate-100 flex items-center justify-between z-20">
                <div>
                    <h3 className="font-bold text-slate-800 text-sm">{t('globalReach')}</h3>
                    <p className="text-xs text-slate-500">{t('servingClients')}</p>
                </div>
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="text-slate-600">HQ</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-slate-600">Clients</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
