import { Compass, Navigation, Plane, ShoppingBag, Trees } from "lucide-react";
import { cn } from "@/lib/utils";

export function MapContainer({ mode = "default", cinematic = false, progress = 0.72 }: { mode?: "default"|"routes"|"navigation"|"summary"; cinematic?: boolean; progress?: number }) {
  return <div className={cn("absolute inset-0 overflow-hidden bg-map", cinematic&&"perspective-map")} aria-label="Stylized demo map of Indore">
    <div className="map-grid absolute inset-0 opacity-65" />
    <div className="absolute -left-12 top-[12%] h-20 w-[120%] rotate-[18deg] border-y-[8px] border-map-road/70 bg-map-road/30" />
    <div className="absolute -left-24 top-[52%] h-16 w-[150%] -rotate-[24deg] border-y-[6px] border-map-road/70 bg-map-road/25" />
    <div className="absolute left-[19%] top-[-8%] h-[120%] w-12 rotate-[7deg] border-x-[5px] border-map-road/60 bg-map-road/25" />
    <div className="absolute right-[14%] top-[8%] h-[105%] w-8 -rotate-[8deg] border-x-[4px] border-map-road/50" />
    <div className="absolute left-[8%] top-[25%] h-32 w-36 rounded-[3rem] bg-map-park/55"><Trees className="absolute left-12 top-10 size-5 text-success/65" /></div>
    <div className="absolute right-[4%] top-[48%] h-28 w-24 rounded-[2rem] bg-map-water/50" />
    {Array.from({length:14}).map((_,i)=><div key={i} className="absolute rounded-sm border border-map-building bg-map-building shadow-sm" style={{left:`${9+(i*23)%82}%`,top:`${10+(i*17)%72}%`,width:`${18+(i%3)*8}px`,height:`${12+(i%4)*7}px`,transform:`rotate(${i%2?12:-8}deg)`}} />)}
    <svg className={cn("absolute inset-0 h-full w-full", cinematic&&"drop-shadow-[0_10px_14px_var(--primary-shadow)]")} viewBox="0 0 430 760" fill="none" preserveAspectRatio="none" aria-hidden="true">
      {mode==="routes" && <><path d="M83 635 C118 530 68 460 165 380 C230 326 205 210 346 135" stroke="var(--route-alt)" strokeWidth="5" strokeDasharray="7 10" strokeLinecap="round"/><path d="M83 635 C160 575 155 470 230 424 C306 375 280 250 346 135" stroke="var(--route-muted)" strokeWidth="5" strokeLinecap="round"/></>}
      <path d="M83 635 C120 585 137 526 119 468 C99 404 184 385 210 337 C239 283 268 221 346 135" stroke="var(--route-outline)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M83 635 C120 585 137 526 119 468 C99 404 184 385 210 337 C239 283 268 221 346 135" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={cinematic?`${progress*650} 650`:undefined}/>
    </svg>
    <div className="absolute left-[17%] top-[80%] flex size-9 items-center justify-center rounded-full border-[3px] border-background bg-success text-primary-foreground shadow-lg"><span className="size-2.5 rounded-full bg-primary-foreground" /></div>
    <div className="absolute right-[15%] top-[15%] flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_8px_24px_var(--primary-shadow)]"><Plane className="size-5"/></div>
    <div className="absolute left-[63%] top-[38%] flex size-8 items-center justify-center rounded-xl border border-glass-border bg-nav/80 text-muted-foreground backdrop-blur"><ShoppingBag className="size-4"/></div>
    {mode==="navigation"&&<div className="absolute left-[44%] top-[48%] flex size-14 -rotate-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-[0_12px_35px_var(--primary-shadow)]"><Navigation className="size-7" fill="currentColor"/></div>}
    {cinematic&&<div className="absolute left-[50%] top-[42%] flex size-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-xl"><Navigation className="size-6" fill="currentColor"/></div>}
    <div className="absolute bottom-24 left-4 text-[10px] font-semibold uppercase tracking-[.12em] text-map-label">Indore · Demo map</div>
    <Compass className="absolute bottom-24 right-5 size-5 text-map-label"/>
  </div>
}
