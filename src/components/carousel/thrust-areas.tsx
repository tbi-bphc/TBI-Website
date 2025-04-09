import CountUpAnimation from "@/helpers/countUp"
import { FlaskConical } from "lucide-react"
import { HeartPulse } from "lucide-react"
import { Cpu } from "lucide-react"
import { Rocket } from "lucide-react"
import { HandCoins } from "lucide-react"
import { Sprout } from "lucide-react"

interface Area {
    title:string,
    number:number,
    icon: string,
    text: string,
}

function Element( {title, number, icon, text}:Area){
    return (
        <div>
          <div className="flex mb-4">
            {icon ==="FlaskConical"?<FlaskConical size={80} color="white"/>:<></>}
            {icon ==="HeartPulse"?<HeartPulse size={80} color="white"/>:<></>}
            {icon ==="Cpu"?<Cpu size={80} color="white"/>:<></>}
            {icon ==="Rocket"?<Rocket size={80} color="white"/>:<></>}
            {icon ==="HandCoins"?<HandCoins size={80} color="white"/>:<></>}
            {icon ==="Sprout"?<Sprout size={80} color="white"/>:<></>}

            <p className="text-2xl my-auto ml-6 flex space-x-1 text-nord6">
                <span>{text}</span>
            </p>
          </div>
          <div style={{ fontSize: "24px" }} className="text-nord6">{title}</div>
        </div>
    )
}

export default function ThrustAreasCarousel(){
    return(
        <div className="grid md:grid-cols-3 font-bold grid-cols-2 gap-4 md:gap-x-2">
            <Element title="BioTech & Pharmacy" number={21} icon="FlaskConical" text={""}/>
            <Element title="ICT for Healthcare" number={9} icon="HeartPulse" text={""}/>
            <Element title="Micro Electro Mechanical Systems (MEMS)" number={60} icon="Cpu" text={""}/>
            <Element title="SpaceTech & Defence" number={3} icon="Rocket" text={""}/>
            <Element title="Edutainment & E-Commerce" number={12} icon="HandCoins" text={""}/>
            <Element title="Agri-BioTech & Agri-Tech" number={30} icon="Sprout" text={""}/>
        </div>
    )
}
