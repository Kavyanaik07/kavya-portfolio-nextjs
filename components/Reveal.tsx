"use client";import {motion} from "framer-motion";
export default function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){
return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Mask({text,className=""}:{text:string;className?:string}){
return <h1 className={className} aria-label={text}>{text.split(" ").map((w,i)=><span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pr-[.2em] pb-[.12em] -mb-[.12em]"><motion.span className="inline-block" initial={{y:"110%"}} animate={{y:0}} transition={{duration:.8,delay:.05+i*.08,ease:[.22,1,.36,1]}}>{w}</motion.span></span>)}</h1>}
