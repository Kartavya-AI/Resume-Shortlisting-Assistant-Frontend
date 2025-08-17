import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import resumeIllustration from "../../public/images/resume-genius-9si2noVCVH8-unsplash.jpg";
import open from "../../public/images/share (1).png";

const reviews = [
    {
        name: "Neha Kapoor",
        username: "@neha_hr",
        body: "The Resume Shortlisting Assistant has drastically reduced our screening time. We can now process thousands of applications in hours instead of weeks.",
    },
    {
        name: "Arjun Malhotra",
        username: "@arjun_recruiter",
        body: "I love how it highlights top candidates based on skills and experience. The scoring system makes shortlisting objective and data-driven.",
    },
    {
        name: "Simran Joshi",
        username: "@simran_enterpriseHR",
        body: "As part of an enterprise HR team, this tool integrates seamlessly with our ATS and helps us filter candidates with the exact qualifications we need.",
    },
    {
        name: "Ravi Deshmukh",
        username: "@ravi_startup",
        body: "For our startup, this has been a game changer. Even without a dedicated HR team, we can confidently shortlist the best-fit candidates quickly.",
    },
    {
        name: "Pooja Nair",
        username: "@pooja_consultant",
        body: "The ability to flag concerns like frequent job changes and gaps in employment helps us make better hiring decisions with less bias.",
    },
    {
        name: "Karan Patel",
        username: "@karan_ld",
        body: "We use it for internal promotions and skill evaluations too. Identifying leadership potential and standout achievements is now effortless.",
    },
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
        title: "Step 1: Upload Resumes",
        description:
            "Import resumes in bulk across formats (PDF, DOCX, TXT) from job boards, email, or ATS. The system parses and structures data automatically. (API: /upload-resumes)",
    },
    {
        title: "Step 2: Define Role Profile",
        description:
            "Set job description, required skills, experience, education, and certifications. Customize weighting for different qualifications. (API: /define-role-profile)",
    },
    {
        title: "Step 3: Automated Parsing & Matching",
        description:
            "AI extracts key details—skills, projects, outcomes, leadership traits—and matches candidates against the role profile. (API: /parse-match)",
    },
    {
        title: "Step 4: Shortlist & Flag",
        description:
            "System ranks candidates, highlights achievements, and flags concerns such as gaps or frequent role changes for recruiter review. (API: /shortlist-flag)",
    },
    {
        title: "Step 5: Export & Integrate",
        description:
            "Export shortlisted profiles with scores and insights. Integrate seamlessly with HR tools or ATS for next hiring stages. (API: /export-results)",
    },
];

export default function Home() {
    return (
        <main className="mx-auto bg-zinc-100">
            <section className="pt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                {/* Badge */}
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-2 py-1.5 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                    <h1 className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-full h-8 w-8 flex justify-center items-center">
                        🤖
                    </h1>

                    <div className="text-sm px-3 font-medium text-zinc-600">
                        AI-Powered Resume Shortlisting Assistant
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Shortlist Top Candidates Instantly — Smarter Hiring with AI
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Automate resume evaluation and shortlisting. Parse thousands
                    of resumes, match skills and experience to role profiles,
                    and surface the best-fit candidates — reducing bias and
                    saving valuable hiring time.
                </p>

                {/* CTA */}
                <div>
                    <Link
                        href="/shortlist"
                        className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md flex items-center gap-2"
                    >
                        <span>Start Shortlisting Resumes</span>
                        <div className="rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md">
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
                        Shortlist Resumes Instantly with AI.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our AI Resume Shortlisting Assistant automates
                        evaluation by parsing thousands of resumes, matching
                        candidates to role requirements, and surfacing top
                        talent. Save time, reduce bias, and focus on smarter
                        hiring decisions.
                    </p>
                    <div className="mt-4">
                        <Link href="/shortlist">
                            <button className="shadow-2xl">
                                <span className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                                    ● Start Shortlisting
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-2xl justify-center">
                    <Image
                        src={resumeIllustration} // Replace with illustration relevant to resume shortlisting
                        alt="AI-Powered Resume Shortlisting"
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

                    <AccordionItem
                        value="item-1"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            1. What is the Resume Shortlisting Assistant?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It&apos;s an AI-powered tool that automates
                                resume evaluation and shortlisting, surfacing
                                top candidates based on job fit, skills, and
                                experience. It reduces bias, saves time, and
                                improves hiring quality.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            2. How does it work?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                The assistant parses resumes in multiple
                                formats, extracts key skills, education, and
                                experiences, and matches them against job
                                descriptions or custom role profiles. It then
                                ranks candidates objectively using customizable
                                weighting.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            3. What filters can recruiters apply?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Recruiters can filter candidates by education,
                                certifications, keywords, project history,
                                skills, outcomes, and even soft skills to
                                identify the best fit quickly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            4. Can it detect red flags in resumes?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. The assistant flags issues like unexplained
                                employment gaps, frequent job changes, or
                                mismatches with role requirements — helping
                                recruiters make informed decisions faster.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            5. Does it integrate with HR systems?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. It integrates seamlessly with
                                existing Applicant Tracking Systems (ATS) and HR
                                tools, so teams don’t need to change their
                                current workflow.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-6"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            6. Who can benefit from this tool?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                HR teams handling high-volume applications,
                                enterprises, startups without dedicated
                                recruiters, staffing agencies, and companies
                                running seasonal or project-based hiring drives.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-7"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            7. Does it reduce bias in hiring?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. By focusing on skills, qualifications, and
                                outcomes instead of personal identifiers, the
                                tool helps organizations make fairer,
                                data-driven hiring decisions.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-8"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            8. Is it free to use?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Core resume parsing and ranking features are
                                free to try. Advanced features — such as bulk
                                resume uploads, custom weighting, and enterprise
                                integrations — may require a subscription.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
