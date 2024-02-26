import { data } from '../data';

export interface ServiceStatisticProps {
    data: typeof data;
    currWeek: number;
    isSidebarOpen: boolean;
}

export interface RoundedTopBarProps {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
}

export interface ServiceStatusProps {
    icon: React.ReactNode;
    color: string;
    title: string;
    total: string;
    overall: number;
}