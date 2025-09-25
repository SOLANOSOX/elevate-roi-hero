import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { mes: "jan. de 2024", valor1: 3804000, valor2: 1900520 },
  { mes: "fev. de 2024", valor1: 4794000, valor2: 4794000 },
  { mes: "mar. de 2024", valor1: 7244000, valor2: 18163141 },
  { mes: "abr. de 2024", valor1: 8609000, valor2: 34279141 },
  { mes: "mai. de 2024", valor1: 17734000, valor2: 37788541 },
  { mes: "jun. de 2024", valor1: 20559000, valor2: 44158541 },
  { mes: "jul. de 2024", valor1: 33922000, valor2: 47645541 },
  { mes: "ago. de 2024", valor1: 51428000, valor2: 62627405 },
  { mes: "set. de 2024", valor1: 63309300, valor2: 70007405 },
];

// formatador de valores em R$
const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ChartComponent() {
  return (
    <div className="w-full h-[400px] bg-[#0E141B] rounded-xl shadow-md p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 30, right: 30, left: 10, bottom: 10 }}>
          {/* Definição do gradiente */}
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f1c40f" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#0E141B" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Grid escondido */}
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />

          {/* Eixo X com estilo */}
          <XAxis
            dataKey="mes"
            stroke="#aaa"
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />

          {/* Eixo Y escondido */}
          <YAxis hide />

          {/* Tooltip estilizado */}
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            labelStyle={{ color: "#fff" }}
            contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
          />

          {/* Área preenchida */}
          <Area
            type="monotone"
            dataKey="valor1"
            stroke="none"
            fill="url(#colorFill)"
          />

          {/* Linha tracejada (inferior) */}
          <Line
            type="monotone"
            dataKey="valor1"
            stroke="#F6DE96"
            strokeWidth={2}
            dot={{ r: 4, fill: "#F6DE96" }}
            strokeDasharray="10 5"
            label={{
              position: "top",
              fill: "#F6DE96",
              fontSize: 12,
              formatter: formatCurrency,
            }}
          />

          {/* Linha sólida (superior) */}
          <Line
            type="monotone"
            dataKey="valor2"
            stroke="#FBBF0C"
            strokeWidth={3}
            dot={{ r: 5, fill: "#FBBF0C" }}
            strokeDasharray="10 5"
            label={{
              position: "top",
              fill: "#FBBF0C",
              fontWeight: "bold",
              fontSize: 12,
              formatter: formatCurrency,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
