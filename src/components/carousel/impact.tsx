import { Users } from "lucide-react"

interface ImpactItem {
    title:string,
    number:number,
}

function ImpactItem( {title, number}:ImpactItem){
    return (
        <div>
          <div style={{ display: "flex" }}>
            <Users size={60} />
            <p style={{ margin: "auto", fontSize: "22px" }}>230+</p>
          </div>
          <div style={{ fontSize: "24px" }}>Users</div>
        </div>
    )
}

export function ImpactCarousel(){
    return(
        <div className="flex gap-32">
            <ImpactItem title="Users" number={60}/>
            <ImpactItem title="Users" number={60}/>
            <ImpactItem title="Users" number={60}/>
            <ImpactItem title="Users" number={60}/>
        </div>
    )
}