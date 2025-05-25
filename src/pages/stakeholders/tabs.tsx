import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface Props {
    name: string,
    image?: string,
    description?: string,
}
function Element({ name, image, description }: Props) {
    return (
        <>
            <div
                className="w-full my-4 items-center shadow-lg rounded-lg bg-white flex flex-col justify-center place-self-center"
            >
                <img
                    src={image ?? "https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"}
                    alt="img"
                    title="img"
                    className="w-full h-auto object-cover rounded-t-lg md:h-72"
                />
                <div className="w-full p-4 justify-start flex flex-col">
                    <h4 className=" text-xl text-center pb-1 text-nord10">
                        {name}
                    </h4>
                    {
                        description ?
                            <p className="my-4 text-center text-nord10">
                                {description}
                            </p> : <></>
                    }

                </div>
            </div>
        </>
    )
}

function Stakeholders() {

    const governingBody = [ {name: "Prof. Soumyo Mukherji", image: "/governing/Prof.SoumyoMukherji.png"},
                            {name: "Prof. G Sundar", image: "/governing/gsundar.jpg"},
                            {name: "Dr. Sandeep Raut", image: "/governing/sandeepraut.png"},
                            {name: "Prof. P Yogeeswari", image: "/governing/Prof.PYogeeswari.png"}, 
                            {name: "CA Sunitha Suresh", image: "/governing/ssuresh.jpg"},
                            {name: "Prof. Sankar Ganesh", image: "/governing/ProfPSankarGanesh.jpeg"},
                            {name: "Prof. Parikshit Sahatiya", image: "/governing/ProfParikshitSahatiya.png"},
                        ]
    
    const entrepreneurshipCommittee = [ {name: "Prof. P Yogeeswari", image: "/ecommittee/Prof.PYogeeswari.png"}, 
                                        {name: "Prof. P Sankar Ganesh", image: "/ecommittee/ProfPSankarGanesh.jpeg"}, {name: "Prof. Parikshit Sahatiya", image: "/ecommittee/ProfParikshitSahatiya.png"},
                                        {name: "Prof. Ruchi Jain Dey", image: "/ecommittee/ProfRuchiJainDey.jpeg"},
                                        {name: "Mr. Abhishek Khaitan", image: "/ecommittee/AbhishekKhaitan.png"}, {name: "Dr. Viswanadham", image: "/ecommittee/Dr.Viswanadham.png"},
                                        {name: "Ms. Sita Pallachola", image: "/ecommittee/sitapallachola.jpg"},
                                        {name: "Mr. Kamal Prasad", image: "/ecommittee/kamalprasad.jpg"},
                                        {name: "Mr. Shreeram Iyer", image: "/ecommittee/shreeramiyer.jpg"},
                                    ]

    const mentors = [{name: "Mr. Abhishek Khaitan", image: "/mentors/AbhishekKhaitan.png"}, {name: "Mr. Atul Bhargava", image: "/mentors/AtulBhargava.png"}, 
                    {name: "Mr. C A Shamik Ukil", image: "/mentors/CAShamikUkil.png"}, {name: "Mr. D V Krishna Rao", image: "/mentors/D.V.KrishnaRao.png"}, 
                    {name: "Dr. Radha Rangarajan", image: "/mentors/Dr.RadhaRangarajan.png"}, {name: "Dr. Ramjee Palella", image: "/mentors/Dr.RamjeePalella.png"},
                    {name: "Dr. Suresh Munuswamy", image: "/mentors/Dr.SureshMunuswamy.png"}, {name: "Dr. Sushmita Sundar", image: "/mentors/Dr.SushmitaSundar.png"},
                    {name: "Dr. Viswanadham", image: "/mentors/Dr.Viswanadham.png"}, {name: "Er. Suresh Susurla", image: "/mentors/Er.SureshSusurla.png"},
                    {name: "Mr. Gopi Krishna Tummala", image: "/mentors/GopiKrishnaTummala.png"}, {name: "Mr. Jay Pandit", image: "/mentors/JayPandit.png"},
                    {name: "Mr. Karthik Gurumurthy", image: "/mentors/KarthikGurumurthy.png"}, {name: "Mr. Anuj Batra", image: "/mentors/Mr.AnujBatra.png"},
                    {name: "Mr. Kamal Prasad", image: "/mentors/Mr.KamalPrasad.png"}, {name: "Mr. Rahul Bagga", image: "/mentors/RahulBagga.png"},
                    {name: "Mr. Pradeep Yuvaraj", image: "/mentors/PradeepYuvaraj.png"}, {name: "Mr. Neel Mehta", image: "/mentors/NeelMehta.png"},
                    {name: "Mr. Rajesh Butta", image: "/mentors/RajeshButta.png"}, {name: "Mr. Rajesh Dube", image: "/mentors/RajeshDube.png"}, {name: "Mr. Ramana Vemuri", image: "/mentors/RamanaVemuri.png"},
                    {name: "Mr. Sunil Hans", image: "/mentors/SunilHans.png"}, {name: "Mrs. Usha Paliath", image: "/mentors/UshaPaliath.png"},                     
                    {name: "Mr. Varadarajan Sridharan", image: "/mentors/VaradarajanSridharan.png"}, {name: "Mr. Vijay Nandiminti", image: "/mentors/VijayNandiminti.png"},
                    ]
    
    const partnersSponsors = [  {name: "BIRAC", image: "/partnerspons/Birac.png"}, {name: "DST NIDHI", image: "/partnerspons/DSTNIDHI.png"},
                                {name: "SISF", image: "/partnerspons/SISF.png"}, {name: "MEITY Startup Hub", image: "/partnerspons/MeityStartup.png"},
                                {name: "Boeing", image: "/partnerspons/Boeing.png"}
                            ]

    return (
        <div>
            <Tabs defaultValue="governing body" className="px-2 md:px-6 lg:px-[25vh]">
                <TabsList className="flex items-center justify-around flex-wrap h-auto space-y-1 mt-14 mx-auto my-8">
                    <TabsTrigger className="flex-1" value="governing body">Board of Governors</TabsTrigger>
                    <TabsTrigger className="flex-1" value="entrepreneurship committee">Entrepreneurship Committee</TabsTrigger>
                    <TabsTrigger className="flex-1" value="mentors">Mentors</TabsTrigger>
                    <TabsTrigger className="flex-1" value="partners and sponsors">Partners and Sponsors</TabsTrigger>
                </TabsList>

                <TabsContent value="governing body">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-10 md:gap-6 gap-y-2">
                            {
                                governingBody.map((body: any) =>

                                    <div>
                                        <Element name={body.name} image={body.image}/>
                                    </div>

                                )

                            }
                        </section>
                    </div>
                </TabsContent>
                <TabsContent value="entrepreneurship committee">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-2">
                            {
                                entrepreneurshipCommittee.map((body: any) =>

                                    <div>
                                        <Element name={body.name} image={body.image}/>
                                    </div>
                                )

                            }
                        </section>
                    </div>
                </TabsContent>
                <TabsContent value="mentors">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-2">
                            {
                                mentors.map((body: any) =>

                                    <div>
                                        <Element name={body.name} image={body.image}/>
                                    </div>

                                )

                            }
                        </section>
                    </div>
                </TabsContent>
                <TabsContent value="partners and sponsors">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-2">
                            {
                                partnersSponsors.map((body: any) =>

                                    <div>
                                        <Element name={body.name} image={body.image}/>
                                    </div>

                                )
                            }
                        </section>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Stakeholders