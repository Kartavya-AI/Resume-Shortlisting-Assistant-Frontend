import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import newsIllustration from '../../public/images/yang-xia-aett4u0y8Qk-unsplash.jpg'
import open from '../../public/images/share (1).png'

const reviews = [
    {
        name: "Ananya Sharma",
        username: "@ananya_reader",
        body: "The personalized news feed feels like it truly understands me. No more scrolling endlessly — I get exactly what I care about."
    },
    {
        name: "Rahul Mehta",
        username: "@rahul_tech",
        body: "I used to juggle multiple apps for updates. Now, this platform curates tech, business, and global trends seamlessly in one place."
    },
    {
        name: "Priya Verma",
        username: "@priya_journalist",
        body: "As a journalist, it helps me stay on top of niche topics without drowning in noise. The AI curation is incredibly accurate."
    },
    {
        name: "Aditya Singh",
        username: "@aditya_informed",
        body: "The local + global news balance is perfect. I never miss important events, but also stay connected to my city’s updates."
    },
    {
        name: "Meera Iyer",
        username: "@meera_updates",
        body: "The daily digests are a lifesaver. Instead of wasting time, I get crisp, relevant news every morning with my coffee."
    },
    {
        name: "Rohan Desai",
        username: "@rohan_ai",
        body: "This platform feels like my personal editor. It cuts the clutter and delivers meaningful stories tailored to my interests."
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white"                
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {/* <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                /> */}
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
  {
    title: "Step 1: Share Your Interests",
    description:
      "Begin by entering a topic or area you’re curious about. The system uses this to generate tailored questions that refine your news preferences. (API: /generate-questions)"
  },
  {
    title: "Step 2: Create Your Profile",
    description:
      "Answer a few personalized questions to build your profile. This helps the agent understand your unique news needs and interests. (API: /create-profile)"
  },
  {
    title: "Step 3: Get Personalized News",
    description:
      "Receive a curated feed of articles and updates tailored to your profile and chosen language preferences. (API: /generate-news)"
  },
  {
    title: "Step 4: Ask Follow-Up Questions",
    description:
      "Curious about a specific angle or detail? Ask questions directly, and the agent finds relevant news in your target language. (API: /query-news)"
  },
  {
    title: "Step 5: Run the Full Pipeline",
    description:
      "For a seamless experience, provide your interest and answers once. The platform handles profiling, curation, and delivery in one go. (API: /full-pipeline)"
  }
];



export default function Home() {

  return (
    <main className="mx-auto bg-zinc-100">
          <section className="pt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
    <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-2 py-1.5 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
        
        <h1 className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-full h-8 w-8 flex justify-center items-center">📰</h1>

        <div className="text-sm px-3 font-medium text-zinc-600">
            AI-Powered Personalized News Agent
        </div>
    </div>

    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-primary mb-6">
        Stay Informed with News That Matters to You  
        — Curated by AI
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Get a real-time, personalized news feed that adapts to your interests. From global headlines to niche updates — your AI news agent keeps you ahead without information overload.
    </p>

   <div>
  <Link
    href="/search"
    className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md flex items-center gap-2"
  >
    <span>Get My Personalized Feed</span>
    <div  className="rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md ">
        <Image
      src={open}
      alt="open icon"
      className="h-6 w-6"
    />
    </div>
  </Link>
</div>

</section>


            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="px-5 py-4 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl  min-h-[180px] h-full"
                        >
                            <div className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </div>
                            <div className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

         <section className="flex mt-10 gap-8 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
    <h2 className="text-3xl md:text-5xl font-bold text-primary">
      Stay Ahead with Personalized AI-Powered News.
    </h2>
    <p className="text-lg text-muted-foreground">
      Your AI News Agent curates real-time stories tailored to your interests, 
      so you spend less time searching and more time reading what matters most.
    </p>
    <div className="mt-4">
      <Link href="/search">
        <button className="shadow-2xl">
          <span className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
            ● Start Reading
          </span>
        </button>
      </Link>
    </div>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-2xl justify-center">
    <Image
      src={newsIllustration} // Replace with your Personalized News illustration
      alt="AI-Powered Personalized News"
      className="w-full shadow-lg h-full rounded-lg object-cover"
      width={10}
      height={10}
      unoptimized
    />
  </div>
</section>



            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </section>

          <section className="px-4 md:px-36 mt-20 bg-zinc-100 py-10">
  <Accordion
    type="single"
    collapsible
    className="w-full"
    defaultValue="item-1"
  >
    <h1 className="text-4xl mb-5 font-bold">FAQ&apos;S</h1>

    <AccordionItem value="item-1" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        1. What is the Personalized News Agent?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          The Personalized News Agent is an AI-powered platform that curates
          real-time news tailored to your unique interests. It helps you stay
          informed without the noise by delivering only the stories that matter
          most to you.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        2. How does it work?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Simply share your areas of interest. The agent uses AI to analyze your
          preferences, generate tailored questions, and continuously refine your
          profile as you interact — ensuring your news feed stays highly
          relevant and up-to-date.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        3. What kind of news can I get?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          You can get news across categories like technology, business,
          politics, health, sports, entertainment, and more. The AI adapts to
          your reading patterns to fine-tune recommendations.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        4. Does it use real-time data?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. The platform integrates with real-time news sources and updates
          continuously to ensure your feed reflects the latest stories and
          trends as they happen.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        5. Can I personalize my feed?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Absolutely. You can customize your profile by selecting or updating
          interests, answering AI-generated questions, and fine-tuning your
          preferences at any time.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        6. Does it support multiple languages?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. You can choose your target language, and the agent will deliver
          personalized news summaries and stories in that language.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        7. Can I ask the AI specific questions?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Definitely. You can query the agent with specific questions, and it
          will fetch relevant news articles, summaries, and insights in
          real-time.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8" className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1">
      <AccordionTrigger>
        8. Is it free to use?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Core features like personalized feeds and AI-powered curation are
          free. Advanced features — such as deep-dive analysis, multilingual
          profiles, and enterprise use cases — may require a subscription.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>


        </main>

  );
}
