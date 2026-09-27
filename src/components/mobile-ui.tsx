import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight, Bot, ChevronRight, LocateFixed, Map, MessageCircle, Navigation, Route, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { RouteOption, Trip } from "@/lib/mock-data";

export function PrimaryButton({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Button className={cn("h-14 w-full rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-[0_12px_32px_var(--primary-shadow)] transition-transform active:scale-[.98]", className)} {...props}>{children}</Button>;
}
export function SecondaryButton({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Button variant="outline" className={cn("h-14 w-full rounded-2xl border-border/70 bg-surface/70 text-base font-semibold text-foreground backdrop-blur-xl transition-transform active:scale-[.98]", className)} {...props}>{children}</Button>;
}
export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-[1.75rem] border border-glass-border bg-glass shadow-[0_18px_50px_var(--card-shadow)] backdrop-blur-2xl", className)}>{children}</div>;
}
export function FloatingCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-[1.75rem] border border-border/70 bg-card/95 shadow-[0_22px_60px_var(--card-shadow)]", className)}>{children}</div>;
}
export function DemoPill({ light = false }: { light?: boolean }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em]", light ? "border-foreground/15 bg-background/65 text-muted-foreground" : "border-primary/25 bg-primary/10 text-primary")}><span className="size-1.5 rounded-full bg-current" /> Demo data</span>;
}
export function MetricCard({ label, value, unit, compact = false }: { label: string; value: string; unit?: string; compact?: boolean }) {
  return <div className={cn("rounded-2xl border border-border/60 bg-surface/70", compact ? "p-3" : "p-4")}><div className="text-[11px] font-medium uppercase tracking-[.12em] text-muted-foreground">{label}</div><div className={cn("mt-1 font-semibold text-foreground tabular-nums", compact ? "text-xl" : "text-2xl")}>{value} {unit && <span className="text-xs font-medium text-muted-foreground">{unit}</span>}</div></div>;
}
export function RouteCard({ route, active, onClick }: { route: RouteOption; active: boolean; onClick: () => void }) {
  return <button onClick={onClick} aria-pressed={active} className={cn("min-w-[246px] snap-start rounded-2xl border p-4 text-left transition-all", active ? "border-primary bg-primary/10 shadow-[0_12px_36px_var(--primary-shadow)]" : "border-border bg-card/90")}><div className="flex items-start justify-between"><span className={cn("text-[10px] font-bold uppercase tracking-[.16em]", active ? "text-primary" : "text-muted-foreground")}>{route.label}</span>{active && <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground"><Navigation className="size-3" fill="currentColor" /></span>}</div><div className="mt-3 text-3xl font-semibold tracking-tight text-foreground">{route.eta}</div><div className="mt-1 text-sm text-muted-foreground">{route.distance} · {route.detail}</div><div className="mt-4 flex items-center gap-2 text-xs text-foreground"><span className={cn("size-2 rounded-full", route.tone === "amber" ? "bg-warning" : route.tone === "mint" ? "bg-success" : "bg-primary")} />{route.traffic}<span className="text-muted-foreground">· {route.tolls ? "Tolls" : "No tolls"}</span></div></button>;
}
export function TripCard({ trip, onClick }: { trip: Trip; onClick: () => void }) {
  return <button onClick={onClick} className="group flex w-full items-center gap-4 rounded-2xl border border-border/60 bg-surface/70 p-3 text-left transition-colors hover:bg-surface"><MiniRoute /><div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold text-foreground">{trip.from} <span className="text-muted-foreground">→</span> {trip.to}</div><div className="mt-1 text-xs text-muted-foreground">{trip.distance} · {trip.duration} · {trip.time}</div></div><ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" /></button>;
}
function MiniRoute() { return <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl bg-map"><div className="absolute left-1 top-5 h-px w-14 rotate-[26deg] bg-map-line"/><div className="absolute left-5 top-1 h-14 w-px rotate-[42deg] bg-map-road"/><div className="absolute left-3 top-9 size-2 rounded-full border-2 border-background bg-success"/><div className="absolute right-3 top-2 size-2 rounded-full border-2 border-background bg-primary"/></div> }
export function BottomNavigation({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  const items = [{id:"home", label:"Map", icon:Map},{id:"trips",label:"Trips",icon:Route},{id:"ai",label:"AI",icon:MessageCircle},{id:"profile",label:"Profile",icon:UserRound}];
  return <nav aria-label="Primary" className="absolute inset-x-3 bottom-3 z-40 flex h-[72px] items-center justify-around rounded-[1.6rem] border border-glass-border bg-nav/90 px-2 shadow-[0_18px_50px_var(--card-shadow)] backdrop-blur-2xl">{items.map(({id,label,icon:Icon})=><button key={id} onClick={()=>onChange(id)} aria-label={label} aria-current={active===id ? "page" : undefined} className={cn("flex h-14 min-w-16 flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-semibold transition-colors",active===id?"bg-primary/12 text-primary":"text-muted-foreground")}><Icon className="size-5" strokeWidth={active===id?2.5:1.8}/>{label}</button>)}</nav>;
}
export function LocationStatus({ recording = false }: { recording?: boolean }) { return <div className="flex items-center gap-2 rounded-full border border-glass-border bg-nav/80 px-3 py-2 text-xs font-semibold text-foreground backdrop-blur-xl"><span className={cn("size-2 rounded-full", recording?"animate-pulse bg-error":"bg-success")}/>{recording?"Trip recording on":"Location on"}</div>; }
export function AIMessage({ role, children }: { role: "ai"|"user"; children: ReactNode }) { return <div className={cn("flex gap-3", role==="user"&&"justify-end")} >{role==="ai"&&<div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Bot className="size-4"/></div>}<div className={cn("max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed",role==="user"?"rounded-br-md bg-primary text-primary-foreground":"rounded-bl-md border border-border/60 bg-surface text-foreground")}>{children}</div></div> }
export function ListRow({ icon, label, detail, onClick }: { icon: ReactNode; label: string; detail?: string; onClick?:()=>void }) { return <button onClick={onClick} className="flex min-h-14 w-full items-center gap-3 border-b border-border/50 py-3 text-left last:border-0"><span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground">{icon}</span><span className="min-w-0 flex-1"><span className="block text-sm font-medium text-foreground">{label}</span>{detail&&<span className="block text-xs text-muted-foreground">{detail}</span>}</span><ChevronRight className="size-4 text-muted-foreground"/></button> }
export function MapAction({label,onClick}:{label:string;onClick?:()=>void}) { return <button onClick={onClick} aria-label={label} title={label} className="flex size-12 items-center justify-center rounded-2xl border border-glass-border bg-nav/85 text-foreground shadow-lg backdrop-blur-xl"><LocateFixed className="size-5"/></button> }
export function JourneyArrow(){return <ArrowUpRight className="size-5"/>}
