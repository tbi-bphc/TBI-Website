import CountUpAnimation from "@/helpers/countUp"
import { Users } from "lucide-react"
import { Building2 } from "lucide-react"
import { HandCoins } from "lucide-react"
import { CircleDollarSign } from "lucide-react"
import { BadgePercent } from "lucide-react"

interface ImpactItem {
    title:string,
    number:number,
    icon: string,
    text: string,
}

function ImpactItem( {title, number, icon, text}:ImpactItem){
    return (
        <div>
          <div className="flex mb-4">
            {icon ==="Users"?<Users size={60} color="white" />:<></>}
            {icon ==="Building2"?<Building2 size={60} color="white"/>:<></>}
            {icon ==="HandCoins"?<HandCoins size={60} color="white"/>:<></>}
            {icon ==="CircleDollarSign"?<CircleDollarSign size={60} color="white"/>:<></>}
            {icon ==="BadgePercent"?<BadgePercent size={60} color="white"/>:<></>}
            
            <p className="text-2xl my-auto ml-6 flex space-x-1 text-white">
                <CountUpAnimation targetValue={number}/> 
                <span>{text}</span>
            </p>
          </div>
          <div style={{ fontSize: "24px" }} className="text-white">{title}</div>
        </div>
    )
}

export function ImpactCarousel(){
    return(
        <div className="grid md:grid-cols-3 grid-cols-2 font-bold gap-10 md:gap-20">
            <ImpactItem title="Current Startups" number={21} icon="Building2" text={''}/>
            <ImpactItem title="Total Funds Raised" number={12} icon="CircleDollarSign" text={'Cr+'}/>
            <ImpactItem title="Employment Generated" number={60} icon="Users" text="+"/>
            <ImpactItem title="Startup Revenue" number={3} icon="HandCoins" text="Cr+"/>
            <ImpactItem title="Student Pre-Startups" number={12} icon="Building2" text={''}/>
            <ImpactItem title="Incubation Programs" number={5} icon="BadgePercent" text=" "/>
        </div>
    )
}

