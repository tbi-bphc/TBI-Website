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
                className="w-full my-4 md:max-w-72 items-center bg-white shadow-lg rounded-lg flex flex-col justify-center place-self-center"
            >
                <img
                    src={image ?? "https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"}
                    alt="img"
                    title="img"
                    className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="w-full p-4 justify-start flex flex-col">
                    <h4 className=" text-xl text-center pb-1">
                        {name}
                    </h4>
                    {
                        description ?
                            <p className="my-4 text-center">
                                {description}
                            </p> : <></>
                    }

                </div>
            </div>
        </>
    )
}

function Stakeholders() {

    const governingBody = ["Body-1", "Body-2", "Body-3", "Body-4"]
    const entrepreneurshipCommittee = ["Committee-1", "Committee-2", "Committee-3", "Committee-4"]
    const mentors = ["Mentor-1", "Mentor-2"]
    const partnersSponsors = ["Partner-1"]
    let all = [];
    all.push(...governingBody)
    all.push(...entrepreneurshipCommittee)
    all.push(...mentors)
    all.push(...partnersSponsors)

    return (
        <div>
            <Tabs defaultValue="governing body" className="px-2 md:px-6 lg:px-[25vh]">
                <TabsList className="flex items-center justify-around flex-wrap h-auto space-y-1 mt-14 mx-auto my-8">
                    <TabsTrigger className="flex-1" value="governing body">Governing Body</TabsTrigger>
                    <TabsTrigger className="flex-1" value="entrepreneurship committee">Entrepreneurship Committee</TabsTrigger>
                    <TabsTrigger className="flex-1" value="mentors">Mentors</TabsTrigger>
                    <TabsTrigger className="flex-1" value="partners and sponsors">Partners and Sponsors</TabsTrigger>
                </TabsList>
                
                <TabsContent value="governing body">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-2">
                            {
                                governingBody.map((body: any) =>

                                    <div>
                                        <Element name={body} />
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
                                        <Element name={body} />
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
                                        <Element name={body} />
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
                                        <Element name={body} />
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