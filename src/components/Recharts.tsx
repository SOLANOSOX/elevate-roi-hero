import { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  LabelList,
} from "recharts";

const data = [
  { mes: "jan ", valor1: 3804000, valor2: 1900520 },
  { mes: "fev ", valor1: 4794000, valor2: 4794000 },
  { mes: "mar ", valor1: 7244000, valor2: 18163141 },
  { mes: "abr ", valor1: 8609000, valor2: 34279141 },
  { mes: "mai ", valor1: 17734000, valor2: 37788541 },
  { mes: "jun ", valor1: 20559000, valor2: 44158541 },
  { mes: "jul ", valor1: 33922000, valor2: 47645541 },
  { mes: "ago ", valor1: 51428000, valor2: 62627405 },
  { mes: "set ", valor1: 63309300, valor2: 70007405 },
];

// formatador de valores em R$
const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ChartComponent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="
        w-full 
        h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px] 
        bg-[#0E141B] rounded-xl shadow-md p-2 sm:p-4
      "
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 10, left: 10, bottom: isMobile ? 10 : 30 }}
        >
          {/* Título fixo no topo */}
          <text
            x="50%"
            y={20}
            textAnchor="middle"
            fill="#ffffff"
            fontSize={isMobile ? 12 : 16}
            fontWeight="bold"
          >
            VGV ACUMULADO | 2024
          </text>

          {/* Gradientes */}
          <defs>
            <linearGradient id="gradientValor2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBBF0C" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#0E141B" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="gradientValor1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F6DE96" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#0E141B" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />

          {/* Eixo X */}
          <XAxis
            dataKey="mes"
            stroke="#aaa"
            tickMargin={isMobile ? 10 : 12}
            interval={0}
            minTickGap={isMobile ? 5 : 15}
            tick={{
              fontSize: isMobile ? 10 : 13,
              angle: isMobile ? -35 : 0,
              textAnchor: isMobile ? "end" : "middle",
            }}
          />

          <YAxis hide />

          {/* Tooltip */}
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            labelStyle={{ color: "#fff" }}
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "6px",
            }}
          />

          {/* Áreas preenchidas */}
          {/* Áreas preenchidas (sem tooltip próprio) */}
          <Area
            type="monotone"
            dataKey="valor2"
            stroke="none"
            fill="url(#gradientValor2)"
            fillOpacity={1}
            isAnimationActive={false}
            activeDot={false}
            tooltipType="none"
          />
          <Area
            type="monotone"
            dataKey="valor1"
            stroke="none"
            fill="url(#gradientValor1)"
            fillOpacity={1}
            isAnimationActive={false}
            activeDot={false}
            tooltipType="none"
          />

          {/* Linhas por cima */}
          <Line
            type="monotone"
            dataKey="valor2"
            stroke="#FBBF0C"
            strokeWidth={3}
            dot={{ r: 4, fill: "#FBBF0C" }}
            strokeDasharray="10 5"
          >
            <LabelList
              dataKey="valor2"
              formatter={formatCurrency}
              position="top"
              style={{
                fill: "#FBBF0C",
                fontSize: isMobile ? 8 : 12,
                fontWeight: "bold",
              }}
            />
          </Line>

          <Line
            type="monotone"
            dataKey="valor1"
            stroke="#F6DE96"
            strokeWidth={2}
            dot={{ r: 3, fill: "#F6DE96" }}
            strokeDasharray="10 5"
          >
            <LabelList
              dataKey="valor1"
              formatter={formatCurrency}
              position="top"
              style={{
                fill: "#F6DE96",
                fontSize: isMobile ? 8 : 12,
              }}
            />
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
