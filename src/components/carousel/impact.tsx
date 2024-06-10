import { Users } from "lucide-react"
import { Building2 } from "lucide-react"
import { HandCoins } from "lucide-react"
import { CircleDollarSign } from "lucide-react"

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
            {icon ==="Users"?<Users size={60} />:<></>}
            {icon ==="Building2"?<Building2 size={60} />:<></>}
            {icon ==="HandCoins"?<HandCoins size={60} />:<></>}
            {icon ==="CircleDollarSign"?<CircleDollarSign size={60} />:<></>}
            <p className="text-2xl my-auto ml-6">{number} {text}</p>
          </div>
          <div style={{ fontSize: "24px" }}>{title}</div>
        </div>
    )
}

export function ImpactCarousel(){
    return(
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 md:gap-20">
            <ImpactItem title="Current Startups" number={19} icon="Building2" text={''}/>
            <ImpactItem title="Total Funds Raised" number={9} icon="CircleDollarSign" text={'Cr+'}/>
            <ImpactItem title="Employment Generated" number={60} icon="Users" text="+"/>
            <ImpactItem title="Startup Revenue" number={3} icon="HandCoins" text="Cr+"/>
        </div>
    )
}