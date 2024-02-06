import React, { useEffect, useRef } from 'react';

interface AnalyticsData {
  title: string;
  sum: string;
  arrow: string;
  interval: string;
  graph: string;
}

interface Props {
  data: { totalAnalytics: AnalyticsData[] };
}

const AnalyticsLine: React.FC<Props> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && data.totalAnalytics.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Очищаем холст перед рисованием нового текста
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Устанавливаем стиль текста
        ctx.font = '20px Arial';
        ctx.fillStyle = 'purple';

        // Отображаем значения из данных
        const analytics = data.totalAnalytics[0];
        ctx.fillText(analytics.title + ': ' + analytics.sum, 10, 30);
      }
    }
  }, [data]);

  return <canvas ref={canvasRef} width={200} height={50}></canvas>;
};

export default AnalyticsLine;