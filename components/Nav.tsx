"use client";import {useEffect,useState} from "react";import {Menu,X} from "lucide-react";
const items=["About","Work","Research","Contact"];
export default function Nav(){const [o,setO]=useState(false);
useEffect(()=>{const k=(e:KeyboardEvent)=>e.key==="Escape"&&setO(false);window.addEventListener("keydown",k);return()=>window.removeEventListener("keydown",k)},[]);
return <header className="fixed top-0 inset-x-0 z-50 bg-silver border-b border-burgundy/15"><nav aria-label="Primary" className="flex justify-between items-center px-5 md:px-10 h-16 eyebrow">
<a href="#top" className="font-display text-xl normal-case tracking-normal" onClick={()=>setO(false)}>KN<span className="text-amber">.</span></a>
<ul className="hidden md:flex gap-8">{items.map(x=><li key={x}><a className="link" href={`#${x.toLowerCase()}`}>{x}</a></li>)}</ul>
<button className="md:hidden p-2 -mr-2" aria-label={o?"Close menu":"Open menu"} aria-expanded={o} aria-controls="mnav" onClick={()=>setO(!o)}>{o?<X size={22}/>:<Menu size={22}/>}</button></nav>
{o&&<ul id="mnav" className="md:hidden bg-silver border-t border-burgundy/15 px-5 pb-4">{items.map(x=><li key={x}><a className="block py-4 font-display text-3xl normal-case tracking-normal hl" href={`#${x.toLowerCase()}`} onClick={()=>setO(false)}>{x}</a></li>)}</ul>}</header>}
