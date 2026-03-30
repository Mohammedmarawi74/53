import React from 'react';
import { DesignConfig } from '../types';

const DATA_STRINGS = [
  "RADAR_SYSTEM_ACTIVE_v2.0.5",
  "METRIC_INDEX_14.5%",
  "LIQUIDITY_FLOW_DETECTED",
  "SIGNAL_STRENGTH_0.98",
  "MARKET_VOLATILITY_LOW",
  "SECURE_ENCRYPTION_LAYER_6",
  "AI_PREDICTION_LOG_884",
  "TIMESTAMP_1711812832",
  "PORTFOLIO_OPTIMIZATION_START",
  "NODE_SYNC_COMPLETE",
  "HASH_0x4f2a9e10c...",
  "BLOCK_HEIGHT_842219",
  "TX_COUNT_1522",
  "PROFIT_MARGIN_EST_12.2%",
  "RISK_ASSESSMENT_PASSED",
  "QUANT_ALGO_v4.1_ENABLED"
];

const DataLine: React.FC<{ opacity: number; color?: string }> = ({ opacity, color }) => {
  const lineText = React.useMemo(() => {
    // Determine a random shift to make lines look fragmented
    const padding = " ".repeat(Math.floor(Math.random() * 20));
    return padding + Array.from({ length: 4 }).map(() => 
      DATA_STRINGS[Math.floor(Math.random() * DATA_STRINGS.length)]
    ).join("   •   ");
  }, []);

  return (
    <div className="data-bg-line" style={{ color }}>
      <span className="data-bg-text" style={{ '--line-opacity': opacity } as any}>
        {lineText}
      </span>
    </div>
  );
};

export const DataBackground: React.FC<{ design: DesignConfig }> = ({ design }) => {
  return (
    <div className="data-bg-container">
      <div className="data-bg-layer data-bg-layer-1">
        {Array.from({ length: 35 }).map((_, i) => (
          <DataLine key={i} opacity={0.65} color={design.primaryColor} />
        ))}
      </div>
      <div className="data-bg-layer data-bg-layer-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <DataLine key={i} opacity={0.45} color={design.primaryColor} />
        ))}
      </div>
      <div className="data-bg-layer data-bg-layer-3">
        {Array.from({ length: 25 }).map((_, i) => (
          <DataLine key={i} opacity={0.25} color={design.primaryColor} />
        ))}
      </div>
    </div>
  );
};
