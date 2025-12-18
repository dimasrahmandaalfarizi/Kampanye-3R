"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users } from "lucide-react";

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function InfografisPage() {
  const totalResponden = 48;

  // Data untuk setiap pertanyaan (dalam format: jumlah responden per skala)
  // Skala: 1 = Sangat Tidak Setuju, 2 = Tidak Setuju, 3 = Netral, 4 = Setuju, 5 = Sangat Setuju
  const pertanyaanData = [
    {
      id: 1,
      pertanyaan: "Saya masih sering menggunakan plastik sekali pakai di kampus",
      data: [
        { name: "Sangat Tidak Setuju", value: 5, skala: 1 },
        { name: "Tidak Setuju", value: 8, skala: 2 },
        { name: "Netral", value: 12, skala: 3 },
        { name: "Setuju", value: 15, skala: 4 },
        { name: "Sangat Setuju", value: 8, skala: 5 },
      ]
    },
    {
      id: 2,
      pertanyaan: "Saya merasa penggunaan plastik di lingkungan kampus masih cukup tinggi",
      data: [
        { name: "Sangat Tidak Setuju", value: 3, skala: 1 },
        { name: "Tidak Setuju", value: 5, skala: 2 },
        { name: "Netral", value: 10, skala: 3 },
        { name: "Setuju", value: 18, skala: 4 },
        { name: "Sangat Setuju", value: 12, skala: 5 },
      ]
    },
    {
      id: 3,
      pertanyaan: "Saya memahami bahwa sampah plastik memiliki dampak buruk bagi lingkungan",
      data: [
        { name: "Sangat Tidak Setuju", value: 2, skala: 1 },
        { name: "Tidak Setuju", value: 3, skala: 2 },
        { name: "Netral", value: 8, skala: 3 },
        { name: "Setuju", value: 20, skala: 4 },
        { name: "Sangat Setuju", value: 15, skala: 5 },
      ]
    },
    {
      id: 4,
      pertanyaan: "Saya berusaha mengurangi penggunaan plastik dalam aktivitas sehari-hari",
      data: [
        { name: "Sangat Tidak Setuju", value: 4, skala: 1 },
        { name: "Tidak Setuju", value: 6, skala: 2 },
        { name: "Netral", value: 14, skala: 3 },
        { name: "Setuju", value: 16, skala: 4 },
        { name: "Sangat Setuju", value: 8, skala: 5 },
      ]
    },
    {
      id: 5,
      pertanyaan: "Saya memiliki kebiasaan membawa tumbler/botol minum sendiri ke kampus",
      data: [
        { name: "Sangat Tidak Setuju", value: 6, skala: 1 },
        { name: "Tidak Setuju", value: 10, skala: 2 },
        { name: "Netral", value: 12, skala: 3 },
        { name: "Setuju", value: 12, skala: 4 },
        { name: "Sangat Setuju", value: 8, skala: 5 },
      ]
    },
    {
      id: 6,
      pertanyaan: "Saya bersedia mengikuti kegiatan pengurangan sampah plastik di kampus",
      data: [
        { name: "Sangat Tidak Setuju", value: 2, skala: 1 },
        { name: "Tidak Setuju", value: 4, skala: 2 },
        { name: "Netral", value: 10, skala: 3 },
        { name: "Setuju", value: 18, skala: 4 },
        { name: "Sangat Setuju", value: 14, skala: 5 },
      ]
    },
    {
      id: 7,
      pertanyaan: "Saya pernah melihat atau mengetahui kampanye pengurangan sampah plastik di kampus",
      data: [
        { name: "Sangat Tidak Setuju", value: 8, skala: 1 },
        { name: "Tidak Setuju", value: 12, skala: 2 },
        { name: "Netral", value: 15, skala: 3 },
        { name: "Setuju", value: 10, skala: 4 },
        { name: "Sangat Setuju", value: 3, skala: 5 },
      ]
    },
    {
      id: 8,
      pertanyaan: "Informasi atau edukasi tentang sampah plastik membantu meningkatkan kepedulian saya",
      data: [
        { name: "Sangat Tidak Setuju", value: 3, skala: 1 },
        { name: "Tidak Setuju", value: 5, skala: 2 },
        { name: "Netral", value: 12, skala: 3 },
        { name: "Setuju", value: 18, skala: 4 },
        { name: "Sangat Setuju", value: 10, skala: 5 },
      ]
    },
    {
      id: 9,
      pertanyaan: "Saya mendukung kampus untuk membuat aturan yang membatasi penggunaan plastik sekali pakai",
      data: [
        { name: "Sangat Tidak Setuju", value: 2, skala: 1 },
        { name: "Tidak Setuju", value: 4, skala: 2 },
        { name: "Netral", value: 8, skala: 3 },
        { name: "Setuju", value: 20, skala: 4 },
        { name: "Sangat Setuju", value: 14, skala: 5 },
      ]
    }
  ];

  // Format data untuk pie chart (persentase)
  const formatPieData = (data: typeof pertanyaanData[0]['data']) => {
    return data.map(item => ({
      name: item.name,
      value: item.value,
      percentage: ((item.value / totalResponden) * 100).toFixed(1)
    }));
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 min-h-screen pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle 
          title="Infografis Hasil Survei" 
          subtitle="Data responden tentang kesadaran dan perilaku penggunaan plastik di kampus"
        />

        {/* Statistik Umum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-card rounded-xl border border-border shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Responden</p>
                <p className="text-2xl font-bold text-foreground">{totalResponden} Orang</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Jumlah Pertanyaan</p>
                <p className="text-2xl font-bold text-foreground">{pertanyaanData.length} Pertanyaan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chart untuk setiap pertanyaan */}
        <div className="space-y-12">
          {pertanyaanData.map((item, index) => {
            const pieData = formatPieData(item.data);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 sm:p-8 bg-card rounded-2xl shadow-md border border-border"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                  {item.id}. {item.pertanyaan}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Total Responden: {totalResponden} orang
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Bar Chart */}
                  <div className="w-full">
                    <h4 className="text-sm font-medium mb-4 text-foreground text-center">
                      Distribusi Jawaban (Bar Chart)
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={item.data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="name" 
                          tick={{ fontSize: 12 }}
                          angle={-45}
                          textAnchor="end"
                          height={100}
                        />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip 
                          formatter={(value: number) => [`${value} responden (${((value / totalResponden) * 100).toFixed(1)}%)`, 'Jumlah']}
                        />
                        <Legend />
                        <Bar 
                          dataKey="value" 
                          fill="#22c55e"
                          radius={[8, 8, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Pie Chart */}
                  <div className="w-full">
                    <h4 className="text-sm font-medium mb-4 text-foreground text-center">
                      Distribusi Jawaban (Pie Chart)
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percentage }) => `${name}: ${percentage}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number) => [`${value} responden (${((value / totalResponden) * 100).toFixed(1)}%)`, 'Jumlah']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Tabel Detail */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-border p-3 text-left font-semibold">Skala</th>
                        <th className="border border-border p-3 text-left font-semibold">Jawaban</th>
                        <th className="border border-border p-3 text-center font-semibold">Jumlah</th>
                        <th className="border border-border p-3 text-center font-semibold">Persentase</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-primary/5">
                          <td className="border border-border p-3 text-center font-medium">{row.skala}</td>
                          <td className="border border-border p-3">{row.name}</td>
                          <td className="border border-border p-3 text-center">{row.value}</td>
                          <td className="border border-border p-3 text-center">
                            {((row.value / totalResponden) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

