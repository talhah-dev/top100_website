"use client"

import * as React from "react"
import { useState } from "react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  Eye,
  Clock,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"

const data30d = [
  { date: "Sep 16", sessions: 8100, pageviews: 24200, users: 6200 },
  { date: "Sep 18", sessions: 8900, pageviews: 26800, users: 6900 },
  { date: "Sep 20", sessions: 9400, pageviews: 28500, users: 7300 },
  { date: "Sep 22", sessions: 10200, pageviews: 31000, users: 7900 },
  { date: "Sep 24", sessions: 11100, pageviews: 34200, users: 8600 },
  { date: "Sep 26", sessions: 12400, pageviews: 38900, users: 9500 },
  { date: "Sep 28", sessions: 13200, pageviews: 41000, users: 10100 },
  { date: "Sep 30", sessions: 11800, pageviews: 36400, users: 9100 },
  { date: "Oct 2", sessions: 10500, pageviews: 32800, users: 8200 },
  { date: "Oct 4", sessions: 12900, pageviews: 40100, users: 9850 },
  { date: "Oct 6", sessions: 16100, pageviews: 51400, users: 12400 },
  { date: "Oct 8", sessions: 11980, pageviews: 36700, users: 9320 },
  { date: "Oct 10", sessions: 13800, pageviews: 42100, users: 10600 },
  { date: "Oct 12", sessions: 17200, pageviews: 54900, users: 13400 },
  { date: "Oct 14", sessions: 15600, pageviews: 49200, users: 12100 },
  { date: "Oct 15", sessions: 16840, pageviews: 53100, users: 13080 },
]

const data7d = [
  { date: "Oct 9", sessions: 12450, pageviews: 38900, users: 9780 },
  { date: "Oct 10", sessions: 13800, pageviews: 42100, users: 10600 },
  { date: "Oct 11", sessions: 15400, pageviews: 48500, users: 11950 },
  { date: "Oct 12", sessions: 17200, pageviews: 54900, users: 13400 },
  { date: "Oct 13", sessions: 18150, pageviews: 57800, users: 14200 },
  { date: "Oct 14", sessions: 15600, pageviews: 49200, users: 12100 },
  { date: "Oct 15", sessions: 16840, pageviews: 53100, users: 13080 },
]

const acquisitionChannels = [
  { name: "Organic Search (Google)", percentage: 64, visits: "117,945", barColor: "from-emerald-400 to-teal-500" },
  { name: "Direct / Bookmarks", percentage: 22, visits: "40,544", barColor: "from-[#FABF33] to-amber-500" },
  { name: "Referrals & Tourism Boards", percentage: 9, visits: "16,586", barColor: "from-blue-400 to-indigo-500" },
  { name: "Social & News Feed", percentage: 5, visits: "9,215", barColor: "from-rose-400 to-pink-500" },
]

const geographicData = [
  { country: "United Kingdom", flag: "🇬🇧", share: "68%", visitors: "125,317" },
  { country: "Ireland", flag: "🇮🇪", share: "18%", visitors: "33,172" },
  { country: "United States", flag: "🇺🇸", share: "8%", visitors: "14,743" },
  { country: "Europe & Others", flag: "🇪🇺", share: "6%", visitors: "11,058" },
]

function AnalyticsTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}) {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="rounded-xl border border-[rgba(185,193,212,0.22)] bg-[#060B16]/95 backdrop-blur-md p-3.5 shadow-2xl text-xs space-y-2 min-w-[170px]">
      <div className="font-semibold text-[#F6EFDF] border-b border-[rgba(185,193,212,0.12)] pb-1.5 flex items-center justify-between">
        <span>{label}</span>
        <span className="text-[10px] text-[#B9C1D4] font-normal">GA4 Metric</span>
      </div>
      {payload.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-1.5 text-[#B9C1D4]">
            <span
              className="size-2 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            {item.name}
          </span>
          <span className="font-mono font-bold text-white">
            {item.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  )
}

export function AnalyticsSection() {
  const [timeframe, setTimeframe] = useState<"7d" | "30d">("30d")
  const chartData = timeframe === "7d" ? data7d : data30d

  return (
    <div className="space-y-6 px-4 lg:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-[#101A30] border border-[rgba(185,193,212,0.14)] shadow-xl p-5 md:p-6">
        <div className="rainbow-bar absolute top-0 left-0 right-0" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(185,193,212,0.1)]">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-xl bg-gradient-to-br from-[#FABF33] via-[#F0607A] to-[#6E8BFF] p-0.5 shadow-md shrink-0">
              <div className="size-full rounded-[10px] bg-[#0A1122] flex items-center justify-center">
                <Activity className="size-5 text-[#FABF33]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-['Overlock'] text-xl font-black text-white">
                  Google Analytics 4
                </h2>
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] border-[rgba(250,191,51,0.35)] bg-[rgba(250,191,51,0.1)] text-[#FABF33]"
                >
                  GA4 • G-TOP100UK
                </Badge>
              </div>
              <p className="text-xs text-[#B9C1D4] mt-0.5">
                Real-time visitor metrics, traffic performance, and regional audience overview
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1528] border border-emerald-500/30 text-xs text-emerald-400 font-semibold">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>428 Readers Online</span>
            </div>

            <div className="inline-flex rounded-xl bg-[#0D1528] p-1 border border-[rgba(185,193,212,0.14)] text-xs">
              <button
                type="button"
                onClick={() => setTimeframe("7d")}
                className={`px-3 py-1 rounded-lg font-semibold transition ${
                  timeframe === "7d"
                    ? "bg-[#101A30] text-[#FABF33] border border-[rgba(250,191,51,0.35)] shadow-xs"
                    : "text-[#B9C1D4] hover:text-white"
                }`}
              >
                Last 7 Days
              </button>
              <button
                type="button"
                onClick={() => setTimeframe("30d")}
                className={`px-3 py-1 rounded-lg font-semibold transition ${
                  timeframe === "30d"
                    ? "bg-[#101A30] text-[#FABF33] border border-[rgba(250,191,51,0.35)] shadow-xs"
                    : "text-[#B9C1D4] hover:text-white"
                }`}
              >
                Last 30 Days
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6 border-b border-[rgba(185,193,212,0.1)]">
          <div className="rounded-xl p-4 bg-[#0D1528] border border-[rgba(185,193,212,0.1)]">
            <div className="flex items-center justify-between text-xs text-[#B9C1D4] mb-1">
              <span>Total Sessions</span>
              <span className="flex items-center text-emerald-400 font-bold text-[11px]">
                <ArrowUpRight className="size-3" />
                +14.8%
              </span>
            </div>
            <div className="font-['Overlock'] text-2xl font-black text-white">
              184,290
            </div>
            <div className="text-[11px] text-[#B9C1D4] mt-1 flex items-center gap-1">
              <Users className="size-3 text-[#FABF33]" />
              <span>139,450 unique visitors</span>
            </div>
          </div>

          <div className="rounded-xl p-4 bg-[#0D1528] border border-[rgba(185,193,212,0.1)]">
            <div className="flex items-center justify-between text-xs text-[#B9C1D4] mb-1">
              <span>Pageviews</span>
              <span className="flex items-center text-emerald-400 font-bold text-[11px]">
                <ArrowUpRight className="size-3" />
                +21.3%
              </span>
            </div>
            <div className="font-['Overlock'] text-2xl font-black text-white">
              692,410
            </div>
            <div className="text-[11px] text-[#B9C1D4] mt-1 flex items-center gap-1">
              <Eye className="size-3 text-[#6E8BFF]" />
              <span>3.76 pages per session</span>
            </div>
          </div>

          <div className="rounded-xl p-4 bg-[#0D1528] border border-[rgba(185,193,212,0.1)]">
            <div className="flex items-center justify-between text-xs text-[#B9C1D4] mb-1">
              <span>Avg. Duration</span>
              <span className="flex items-center text-emerald-400 font-bold text-[11px]">
                <ArrowUpRight className="size-3" />
                +8.2%
              </span>
            </div>
            <div className="font-['Overlock'] text-2xl font-black text-white">
              3m 42s
            </div>
            <div className="text-[11px] text-[#B9C1D4] mt-1 flex items-center gap-1">
              <Clock className="size-3 text-emerald-400" />
              <span>Attraction guide engagement</span>
            </div>
          </div>

          <div className="rounded-xl p-4 bg-[#0D1528] border border-[rgba(185,193,212,0.1)]">
            <div className="flex items-center justify-between text-xs text-[#B9C1D4] mb-1">
              <span>Bounce Rate</span>
              <span className="flex items-center text-emerald-400 font-bold text-[11px]">
                <ArrowUpRight className="size-3" />
                -3.2%
              </span>
            </div>
            <div className="font-['Overlock'] text-2xl font-black text-white">
              38.4%
            </div>
            <div className="text-[11px] text-[#B9C1D4] mt-1 flex items-center gap-1">
              <TrendingUp className="size-3 text-rose-400" />
              <span>High multi-page retention</span>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="font-['Overlock'] text-lg font-bold text-white">
                Daily Traffic & Impressions
              </h3>
              <p className="text-xs text-[#B9C1D4]">
                Sessions vs Pageviews across all United Kingdom & Ireland guides
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#FABF33]" />
                <span className="text-[#B9C1D4] font-medium">Sessions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#6E8BFF]" />
                <span className="text-[#B9C1D4] font-medium">Pageviews</span>
              </div>
            </div>
          </div>

          <div className="w-full h-72 sm:h-80 min-w-0">
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={280}
              initialDimension={{ width: 500, height: 280 }}
            >
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="gaPageviews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6E8BFF" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#6E8BFF" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="gaSessions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FABF33" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#FABF33" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(185, 193, 212, 0.08)"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={{ stroke: "rgba(185, 193, 212, 0.12)" }}
                  tick={{ fill: "#B9C1D4", fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={{ stroke: "rgba(185, 193, 212, 0.12)" }}
                  tick={{ fill: "#B9C1D4", fontSize: 11 }}
                  tickFormatter={(val) => `${Math.round(val / 1000)}k`}
                />
                <Tooltip content={<AnalyticsTooltip />} />
                <Area
                  type="monotone"
                  dataKey="pageviews"
                  name="Pageviews"
                  stroke="#6E8BFF"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#gaPageviews)"
                />
                <Area
                  type="monotone"
                  dataKey="sessions"
                  name="Sessions"
                  stroke="#FABF33"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#gaSessions)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md">
          <div className="rainbow-bar" />
          <CardHeader className="pt-5 pb-3">
            <CardTitle className="font-['Overlock'] text-base font-bold text-white flex items-center justify-between">
              <span>Traffic Acquisition</span>
              <Badge variant="outline" className="text-[10px] text-[#FABF33] border-[rgba(250,191,51,0.3)]">
                Channels
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs text-[#B9C1D4]">
              Where readers discover Top 100 guides
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3.5 pt-1">
            {acquisitionChannels.map((channel) => (
              <div key={channel.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F6EFDF] font-medium truncate max-w-[190px]">
                    {channel.name}
                  </span>
                  <span className="text-[#B9C1D4] font-mono">
                    {channel.percentage}% ({channel.visits})
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#0D1528] overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${channel.barColor}`}
                    style={{ width: `${channel.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md">
          <div className="rainbow-bar" />
          <CardHeader className="pt-5 pb-3">
            <CardTitle className="font-['Overlock'] text-base font-bold text-white flex items-center justify-between">
              <span>Audience by Region</span>
              <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30">
                Geography
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs text-[#B9C1D4]">
              Top visitor territories & travel interest
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2.5 pt-1">
            {geographicData.map((item) => (
              <div
                key={item.country}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.08)] text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{item.flag}</span>
                  <span className="font-medium text-white">{item.country}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#B9C1D4] font-mono">{item.visitors}</span>
                  <span className="font-bold text-[#FABF33]">{item.share}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden bg-[#101A30] border-[rgba(185,193,212,0.14)] shadow-md">
          <div className="rainbow-bar" />
          <CardHeader className="pt-5 pb-3">
            <CardTitle className="font-['Overlock'] text-base font-bold text-white flex items-center justify-between">
              <span>Device Technology</span>
              <Badge variant="outline" className="text-[10px] text-blue-400 border-blue-500/30">
                Devices
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs text-[#B9C1D4]">
              Mobile & on-the-road visitor breakdown
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-1">
            <div className="p-3 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.08)] flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs">
                <Smartphone className="size-4 text-[#FABF33]" />
                <div>
                  <div className="font-medium text-white">Mobile Phones</div>
                  <div className="text-[10px] text-[#B9C1D4]">Travelers on the road</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-[#FABF33]">62%</div>
                <div className="text-[10px] text-[#B9C1D4]">114,260 users</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.08)] flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs">
                <Monitor className="size-4 text-[#6E8BFF]" />
                <div>
                  <div className="font-medium text-white">Desktop & Laptop</div>
                  <div className="text-[10px] text-[#B9C1D4]">Trip planning & research</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-[#6E8BFF]">33%</div>
                <div className="text-[10px] text-[#B9C1D4]">60,815 users</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0D1528] border border-[rgba(185,193,212,0.08)] flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs">
                <Tablet className="size-4 text-emerald-400" />
                <div>
                  <div className="font-medium text-white">Tablets & iPads</div>
                  <div className="text-[10px] text-[#B9C1D4]">Guide & editorial reading</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-emerald-400">5%</div>
                <div className="text-[10px] text-[#B9C1D4]">9,215 users</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
