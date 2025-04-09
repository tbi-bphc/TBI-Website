import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Blogcard from "@/components/cards/blogcard";

interface BlogItem {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    link: string;
  };
}

interface EventsTabsProps {
  innovations: BlogItem[];
  talks: BlogItem[];
  networking: BlogItem[];
}

function EventsTabs({  innovations, talks, networking }: EventsTabsProps) {
  return (
    <div className="w-full">
      <Tabs defaultValue="innovation-contests" className="w-full">
        {/* Tabs List */}
        <TabsList className="grid w-full grid-cols-3 mt-10 mb-8 h-12">
          <TabsTrigger 
            value="innovation-contests" 
            className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-nord2 data-[state=active]:bg-white"
          >
            Innovation Contests
          </TabsTrigger>
          
          <TabsTrigger 
            value="talks" 
            className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-nord2 data-[state=active]:bg-white"
          >
            Talks
          </TabsTrigger>
          
          <TabsTrigger 
            value="networking" 
            className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-nord2 data-[state=active]:bg-white"
          >
            Networking
          </TabsTrigger>
        </TabsList>

        {/* Innovation Contests Tab */}
        <TabsContent value="innovation-contests" className="w-full">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {innovations.map((blog, idx) => (
              <Blogcard
                key={idx}
                name={blog.frontmatter.title}
                img={blog.frontmatter.image || ""}
                description={blog.frontmatter.description || ""}
                link={blog.frontmatter.link}
              />
            ))}
          </section>
        </TabsContent>

        {/* Talks Tab */}
        <TabsContent value="talks" className="w-full">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {talks.map((blog, idx) => (
              <Blogcard
                key={idx}
                name={blog.frontmatter.title}
                img={blog.frontmatter.image || ""}
                description={blog.frontmatter.description || ""}
                link={blog.frontmatter.link}
              />
            ))}
          </section>
        </TabsContent>

        {/* Networking Tab */}
        <TabsContent value="networking" className="w-full">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {networking.map((blog, idx) => (
              <Blogcard
                key={idx}
                name={blog.frontmatter.title}
                img={blog.frontmatter.image || ""}
                description={blog.frontmatter.description || ""}
                link={blog.frontmatter.link}
              />
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default EventsTabs;