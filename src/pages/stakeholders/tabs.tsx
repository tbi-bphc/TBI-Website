import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Mentorcard from "@/components/cards/mentorcard.astro"

function Stakeholders() {

    const governingBody: any = ["Body-1", "Body-2", "Body-3", "Body-4"]
    const entrepreneurshipCommittee: any = ["Committee-1", "Committee-2", "Committee-3", "Committee-4"]
    const mentors: any = ["Mentor-1", "Mentor-2"]
    const partnersSponsors: any = ["Partner-1"]
    // const all = governingBody+entrepreneurshipCommittee+mentors+partnersSponsors;

    return (
        <div>
            <Tabs defaultValue="governing body" className=" px-[25vh] w-full">
                <TabsList className="grid w-full grid-cols-4 mt-14 mx-auto my-8">
                    {/* <TabsTrigger value="all">All</TabsTrigger> */}
                    <TabsTrigger value="governing body">Governing Body</TabsTrigger>
                    <TabsTrigger value="entrepreneurship committee">Entrepreneurship Committee</TabsTrigger>
                    <TabsTrigger value="mentors">Mentors</TabsTrigger>
                    <TabsTrigger value="partners and sponsors">Partners and Sponsors</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="All">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {
                                <>
                                    All
                                </>
                            }
                        </section>
                    </div>
                </TabsContent> */}
                <TabsContent value="governing body">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-2">
                            {
                                governingBody.map((body: any) =>
                                    <>
                                        <main
                                            className="w-full my-4 md:max-w-72 items-center bg-white shadow-lg rounded-lg flex justify-center place-self-center"
                                        >
                                            <div>
                                                <img
                                                    src={
                                                        "https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"}
                                                    alt="image"
                                                    className="min-h-40"
                                                />
                                            </div>
                                            <div className="my-auto mx-6">
                                                <p className="text-left">
                                                    {body}
                                                </p>
                                            </div>
                                        </main>
                                    </>
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
                                    <>
                                        <main
                                            className="w-full my-4 md:max-w-72 items-center bg-white shadow-lg rounded-lg flex justify-center place-self-center"
                                        >
                                            <div>
                                                <img
                                                    src={
                                                        "https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"}
                                                    alt="image"
                                                    className="min-h-40"
                                                />
                                            </div>
                                            <div className="my-auto mx-6">
                                                <p className="text-left">
                                                    {body}
                                                </p>
                                            </div>
                                        </main>
                                    </>
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
                                    <>
                                        <main
                                            className="w-full my-4 md:max-w-72 items-center bg-white shadow-lg rounded-lg flex justify-center place-self-center"
                                        >
                                            <div>
                                                <img
                                                    src={
                                                        "https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"}
                                                    alt="image"
                                                    className="min-h-40"
                                                />
                                            </div>
                                            <div className="my-auto mx-6">
                                                <p className="text-left">
                                                    {body}
                                                </p>
                                            </div>
                                        </main>
                                    </>
                                )

                            }
                        </section>
                    </div>
                </TabsContent>
                <TabsContent value="partners and sponsors">
                    <div className="flex items-center justify-center">
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-2">
                            {
                                governingBody.map((body: any) =>
                                    <>
                                        <main
                                            className="w-full my-4 md:max-w-72 items-center bg-white shadow-lg rounded-lg flex justify-center place-self-center"
                                        >
                                            <div>
                                                <img
                                                    src={
                                                        "https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"}
                                                    alt="image"
                                                    className="min-h-40"
                                                />
                                            </div>
                                            <div className="my-auto mx-6">
                                                <p className="text-left">
                                                    {body}
                                                </p>
                                            </div>
                                        </main>
                                    </>
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