import { Building2, Compass, Cross, Landmark, Navigation, Plane, ShoppingBag, Trees, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

type MapMode = "default" | "routes" | "navigation" | "summary";

const blocks = [
  [16,12,62,30,-6],[88,8,44,48,5],[145,17,70,36,-3],[248,10,58,40,7],[325,22,70,32,-5],
  [20,108,48,58,7],[92,92,66,38,-4],[184,105,38,62,8],[268,94,84,40,-5],[361,112,48,58,6],
  [14,210,70,34,-5],[105,198,46,72,4],[174,214,78,34,-7],[290,196,54,66,5],[365,215,52,36,-5],
  [22,330,58,52,4],[101,318,82,36,-5],[212,325,52,72,6],[298,310,74,42,-6],[376,340,44,58,5],
  [8,454,72,42,-4],[108,438,54,68,7],[190,466,86,38,-5],[306,442,46,66,5],[368,470,62,40,-5],
  [20,576,56,58,6],[96,552,76,38,-6],[205,570,54,68,4],[286,558,84,38,-5],[372,585,48,54,7],
] as const;

const labels = [
  { name: "PALASIA", x: "17%", y: "19%" },
  { name: "SOUTH TUKOGANJ", x: "57%", y: "31%" },
  { name: "VIJAY NAGAR", x: "56%", y: "58%" },
  { name: "SCHEME NO. 54", x: "15%", y: "72%" },
] as const;

function Poi({ className, label, children }: { className: string; label: string; children: React.ReactNode }) {
  return <div className={cn("absolute z-[4] flex items-center gap-1.5", className)}><span className="flex size-6 items-center justify-center rounded-lg border border-glass-border bg-nav/80 text-map-label shadow-md backdrop-blur-md [&>svg]:size-3.5">{children}</span><span className="max-w-24 text-[9px] font-semibold leading-tight text-map-label drop-shadow-md">{label}</span></div>;
}

export function MapContainer({ mode = "default", cinematic = false, progress = 0.72 }: { mode?: MapMode; cinematic?: boolean; progress?: number }) {
  return <div className={cn("absolute inset-0 overflow-hidden bg-map", cinematic && "perspective-map")} aria-label="Stylized demo map of Indore">
    <div className="map-atmosphere absolute inset-0" />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 430 760" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <g className="map-blocks">{blocks.map(([x,y,w,h,r],i)=><rect key={i} x={x} y={y} width={w} height={h} rx="5" transform={`rotate(${r} ${x+w/2} ${y+h/2})`}/>)}</g>
      <path className="map-water-shape" d="M342 -20C326 80 360 147 330 234C303 312 325 389 374 452C418 508 431 573 415 780H470V-20Z"/>
      <path className="map-park-shape" d="M21 259C41 225 96 220 126 242C150 261 145 315 117 340C83 371 23 350 12 309C8 294 12 275 21 259Z"/>
      <g className="map-minor-roads"><path d="M-20 89L450 151"/><path d="M-18 183L452 213"/><path d="M-12 293L448 273"/><path d="M-20 402L452 457"/><path d="M-20 523L450 495"/><path d="M-10 652L450 683"/><path d="M63 -20L82 780"/><path d="M146 -20L177 780"/><path d="M238 -20L215 780"/><path d="M315 -20L294 780"/><path d="M391 -20L365 780"/></g>
      <g className="map-arterials"><path d="M-40 115C77 130 145 163 234 188C315 211 375 221 470 232"/><path d="M-30 574C85 527 119 480 202 444C285 408 340 378 465 352"/><path d="M119 -30C113 82 128 195 119 305C111 414 82 562 93 790"/><path d="M356 -30C330 91 309 182 298 280C284 407 313 556 271 790"/></g>
      <g className="map-road-centres"><path d="M-40 115C77 130 145 163 234 188C315 211 375 221 470 232"/><path d="M-30 574C85 527 119 480 202 444C285 408 340 378 465 352"/><path d="M119 -30C113 82 128 195 119 305C111 414 82 562 93 790"/><path d="M356 -30C330 91 309 182 298 280C284 407 313 556 271 790"/></g>
      {mode === "routes" && <g className="map-alternative-routes"><path d="M83 635C118 530 68 460 165 380C230 326 205 210 346 135"/><path d="M83 635C160 575 155 470 230 424C306 375 280 250 346 135"/></g>}
      <path className="map-route-casing" d="M83 635C120 585 137 526 119 468C99 404 184 385 210 337C239 283 268 221 346 135"/>
      <path className="map-route-active" d="M83 635C120 585 137 526 119 468C99 404 184 385 210 337C239 283 268 221 346 135" strokeDasharray={cinematic?`${progress*650} 650`:undefined}/>
    </svg>
    {labels.map(label=><span key={label.name} className="absolute z-[3] text-[8px] font-bold text-map-district" style={{left:label.x,top:label.y}}>{label.name}</span>)}
    <span className="absolute left-[49%] top-[42%] z-[3] -rotate-12 text-[9px] font-medium text-map-street">AB Road</span><span className="absolute left-[12%] top-[54%] z-[3] rotate-12 text-[9px] font-medium text-map-street">MG Road</span>
    <Poi className="left-[64%] top-[17%]" label="Holkar Airport"><Plane/></Poi><Poi className="left-[14%] top-[29%]" label="Nehru Park"><Trees/></Poi><Poi className="left-[61%] top-[36%]" label="C21 Mall"><ShoppingBag/></Poi><Poi className="left-[18%] top-[45%]" label="Rajwada"><Landmark/></Poi><Poi className="left-[63%] top-[65%]" label="Bombay Hospital"><Cross/></Poi><Poi className="left-[12%] top-[68%]" label="Sarafa"><Utensils/></Poi><Poi className="left-[68%] top-[50%]" label="Brilliant Convention"><Building2/></Poi>
    <div className="absolute left-[17%] top-[80%] z-[5] flex size-8 items-center justify-center rounded-full border-[3px] border-map-marker-ring bg-success shadow-lg"><span className="size-2.5 rounded-full bg-primary-foreground"/></div>
    <div className="absolute right-[15%] top-[15%] z-[5] flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_8px_24px_var(--primary-shadow)]"><Plane className="size-5"/></div>
    {mode === "navigation"&&<div className="absolute left-[44%] top-[48%] z-[6] flex size-14 -rotate-12 items-center justify-center rounded-full border-4 border-map-marker-ring bg-primary text-primary-foreground shadow-[0_12px_35px_var(--primary-shadow)]"><Navigation className="size-7" fill="currentColor"/></div>}
    {cinematic&&<div className="absolute left-[50%] top-[42%] z-[6] flex size-12 items-center justify-center rounded-full border-4 border-map-marker-ring bg-primary text-primary-foreground shadow-xl"><Navigation className="size-6" fill="currentColor"/></div>}
    {mode === "default"&&<div className="absolute left-[46%] top-[51%] z-[6] flex items-center justify-center"><span className="absolute size-16 animate-map-pulse rounded-full bg-primary/10"/><span className="absolute size-8 rounded-full bg-primary/15"/><span className="size-4 rounded-full border-[3px] border-map-marker-ring bg-primary shadow-[0_0_18px_var(--primary-shadow)]"/></div>}
    <div className="absolute bottom-24 left-4 z-[4] rounded-md bg-nav/55 px-2 py-1 text-[9px] font-semibold text-map-label backdrop-blur-sm">Indore · Demo map</div><Compass className="absolute bottom-24 right-5 z-[4] size-5 text-map-label"/>
  </div>;
}