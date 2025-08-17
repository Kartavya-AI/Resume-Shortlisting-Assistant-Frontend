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
import worksheetIllustration from "../../public/images/alberto-cognetti-jwuxSRW5PCk-unsplash.jpg";
import open from "../../public/images/share (1).png";

const reviews = [
    {
        name: "Ananya Sharma",
        username: "@ananya_teacher",
        body: "The worksheet generator saves me hours every week. I can instantly create practice sheets aligned with my grade-level curriculum.",
    },
    {
        name: "Rahul Mehta",
        username: "@rahul_tutor",
        body: "I love how customizable it is. Whether I need multiple-choice, fill-in-the-blank, or open-ended questions, it handles everything seamlessly.",
    },
    {
        name: "Priya Verma",
        username: "@priya_edtech",
        body: "As part of an edtech team, this tool helps us deliver high-quality, auto-graded worksheets to students across different subjects and levels.",
    },
    {
        name: "Aditya Singh",
        username: "@aditya_learning",
        body: "The ability to align worksheets with specific learning objectives makes lesson planning so much easier and more effective.",
    },
    {
        name: "Meera Iyer",
        username: "@meera_instructor",
        body: "The answer key generation is a lifesaver — assessments are quicker, and I can spend more time supporting my students.",
    },
    {
        name: "Rohan Desai",
        username: "@rohan_hr",
        body: "We use it for corporate training too. Generating skill evaluation worksheets for employees has never been this efficient.",
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
        title: "Step 1: Select Subject & Grade",
        description:
            "Start by choosing the subject area and grade level for your worksheet. The system uses this input to align content with curriculum standards. (API: /select-subject-grade)",
    },
    {
        title: "Step 2: Customize Question Types",
        description:
            "Pick from multiple choice, fill-in-the-blank, short answer, matching, labeling, or open-ended formats to match your teaching needs. (API: /choose-question-types)",
    },
    {
        title: "Step 3: Generate Worksheet",
        description:
            "The system automatically creates a curriculum-aligned worksheet with editable questions and instructions. (API: /generate-worksheet)",
    },
    {
        title: "Step 4: Review & Edit",
        description:
            "Easily customize the generated content—adjust questions, tweak instructions, or align with specific learning objectives. (API: /edit-worksheet)",
    },
    {
        title: "Step 5: Export & Share",
        description:
            "Download the worksheet in print-ready, digital, or interactive auto-graded formats, complete with answer keys. (API: /export-worksheet)",
    },
];

export default function Home() {
    return (
        <main className="mx-auto bg-zinc-100">
            <section className="pt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-2 py-1.5 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                    <h1 className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-full h-8 w-8 flex justify-center items-center">
                        📄
                    </h1>

                    <div className="text-sm px-3 font-medium text-zinc-600">
                        AI-Powered Worksheet Generation Tool
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Create Curriculum-Aligned Worksheets Instantly — Smarter
                    Teaching with AI
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Automatically generate customizable worksheets for any
                    subject or grade level. Save time, eliminate manual
                    formatting, and deliver engaging, high-quality learning
                    materials with answer keys included.
                </p>

                <div>
                    <Link
                        href="/generate"
                        className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md flex items-center gap-2"
                    >
                        <span>Generate My Worksheet</span>
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
                        Generate Worksheets Instantly with AI.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our AI Worksheet Generator helps educators save time by
                        creating curriculum-aligned, customizable worksheets
                        across subjects and grade levels. Focus more on
                        teaching, and let AI handle the prep work.
                    </p>
                    <div className="mt-4">
                        <Link href="/generate">
                            <button className="shadow-2xl">
                                <span className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                                    ● Create Worksheet
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-2xl justify-center">
                    <Image
                        src={worksheetIllustration} // Replace with your Worksheet Generator illustration
                        alt="AI-Powered Worksheet Generation"
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
                            1. What is the Worksheet Generation Tool?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                The Worksheet Generation Tool is an AI-powered
                                platform that instantly creates customizable,
                                curriculum-aligned worksheets across subjects
                                and grade levels. It saves time while ensuring
                                engaging and effective learning materials.
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
                                Simply select the subject, grade level, and
                                learning objective. The tool uses AI to generate
                                worksheets with multiple question types, which
                                you can fully customize before exporting for
                                print or digital use.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            3. What types of questions can it generate?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It supports multiple-choice, fill-in-the-blank,
                                short answer, labeling, matching, and open-ended
                                questions — giving educators flexibility for
                                different teaching styles.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            4. Does it include answer keys?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. Every worksheet automatically comes with an
                                answer key, making assessment quick and
                                efficient for teachers and tutors.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            5. Can I customize the worksheets?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. You can edit instructions, adjust
                                difficulty levels, add or remove questions, and
                                tailor content to match curriculum standards or
                                individual student needs.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-6"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            6. What formats are supported?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Worksheets can be exported for print (PDF),
                                digital use (Word, Google Docs), or interactive
                                platforms with auto-grading features.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-7"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            7. Who can use this tool?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It&apos;s designed for teachers, tutors, edtech
                                platforms, learning centers, and even HR teams
                                for skill assessments — anyone who needs
                                structured, effective practice materials.
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
                                Core features like worksheet generation and
                                customization are free to try. Advanced features
                                — such as bulk creation, auto-grading, and
                                enterprise integrations — may require a
                                subscription.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
