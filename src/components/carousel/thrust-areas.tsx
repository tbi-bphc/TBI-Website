import CountUpAnimation from "@/helpers/countUp"
import { Users } from "lucide-react"
import { Building2 } from "lucide-react"
import { HandCoins } from "lucide-react"
import { CircleDollarSign } from "lucide-react"
import { BadgePercent } from "lucide-react"

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
            {icon ==="Users"?<Users size={60} color="white" />:<></>}
            {icon ==="Building2"?<Building2 size={60} color="white"/>:<></>}
            {icon ==="HandCoins"?<HandCoins size={60} color="white"/>:<></>}
            {icon ==="CircleDollarSign"?<CircleDollarSign size={60} color="white"/>:<></>}
            {icon ==="BadgePercent"?<BadgePercent size={60} color="white"/>:<></>}
            
            <p className="text-2xl my-auto ml-6 flex space-x-1 text-nord6">
                <CountUpAnimation targetValue={number}/> 
                <span>{text}</span>
            </p>
          </div>
          <div style={{ fontSize: "24px" }} className="text-nord6">{title}</div>
        </div>
    )
}

export default function ThrustAreasCarousel(){
    return(
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10 md:gap-x-40">
            <Element title="Agri-Tech" number={21} icon="Building2" text={''}/>
            <Element title="Health-Tech" number={9} icon="CircleDollarSign" text={'Cr+'}/>
            <Element title="Fin-Tech" number={60} icon="Users" text="+"/>
            <Element title="Edu-Tech" number={3} icon="HandCoins" text="Cr+"/>
            <Element title="Food-Tech" number={12} icon="BadgePercent" text={''}/>
            <Element title="E-Commerce" number={30} icon="Users" text={'+'}/>
        </div>
    )
}
