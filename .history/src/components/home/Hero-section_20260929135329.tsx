import {
    ArrowRight,
    Award,
    BookOpen,
    CheckCircle,
    MessageCircle,
    Star,
} from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#A5F3FC66] via-white to-[#DDF7FC]">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DDF7FC] px-4 py-2 text-xs font-semibold text-[#087EA4]">
                            <BookOpen size={14} />
                            Learn Anywhere, Anytime
                        </div>

                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#009BC2]">
                            Learn • Build Skills • Grow Your Future
                        </p>

                        <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#073B63] sm:text-5xl lg:text-6xl">
                            QUALITY ONLINE
                            <br />
                            LEARNING FOR A
                            <br />
                            <span className="text-[#079BC2]">BRIGHTER</span>
                            <br />
                            <span className="text-[#079BC2]">TOMORROW</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-6 text-[#64748B] sm:text-base">
                            At <span className="font-bold text-[#0E3B68]">IOLA</span>, we provide practical, industry-relevant and
                            faith-friendly digital learning programs to help you gain
                            in-demand skills, grow in confidence and achieve your goals.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#programs"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#073B63] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#052E4E]"
                            >
                                Explore Our Programs
                                <ArrowRight size={16} />
                            </a>

                            <a
                                href="#admissions"
                                className="inline-flex items-center gap-2 rounded-lg border border-[#C9DCE5] bg-white px-5 py-3 text-sm font-semibold text-[#073B63] transition hover:bg-[#F5FAFC]"
                            >
                                <MessageCircle size={16} />
                                Talk to Admissions
                            </a>
                        </div>

                        <div className="mt-9 grid max-w-xl grid-cols-3 divide-x divide-[#D8E7ED]">
                            <div className="pr-4">
                                <p className="text-xl font-extrabold text-[#0E3B68]">100%</p>
                                <p className="text-[10px] font-medium text-[#64748B] sm:text-xs">
                                    Faith-Friendly Content
                                </p>
                            </div>

                            <div className="px-4">
                                <p className="text-xl font-extrabold text-[#079BC2]">
                                    Age 5 to Adults
                                </p>
                                <p className="text-[10px] font-medium text-[#64748B] sm:text-xs">
                                    Tailored Curriculum
                                </p>
                            </div>

                            <div className="pl-4">
                                <p className="text-xl font-extrabold text-[#079BC2]">
                                    Interactive
                                </p>
                                <p className="text-[10px] font-medium text-[#64748B] sm:text-xs">
                                    Hands-On Projects
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#BDF3FA] opacity-60 blur-3xl" />

                        <div className="relative">
                            <div className="absolute -left-4 top-6 z-10 rounded-xl bg-white px-4 py-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF4D6]">
                                        <Star size={16} className="fill-[#F4B400] text-[#F4B400]" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold text-[#263746]">
                                            98% Parent Satisfaction
                                        </p>
                                        <p className="text-[8px] text-[#64748B]">
                                            Rated 4.9/5 by families
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
                                <img
                                    src="/hero-learning.jpg"
                                    alt="Students learning online"
                                    className="h-[330px] w-full object-cover sm:h-[400px]"
                                />

                                <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-[#073B63]/90 p-4 text-white backdrop-blur-sm">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-bold">
                                                Empowering Next-Gen Learners
                                            </p>

                                            <p className="mt-1 max-w-xs text-[10px] leading-4 text-white/80">
                                                Hands-on digital skills, language mastery, and faith-grounded
                                                education for all ages.
                                            </p>
                                        </div>

                                        <div className="shrink-0 rounded-md bg-[#22D3EE66] px-2 py-1 text-[8px] font-semibold text-[#67E8F9]">
                                           Active Cohort 2025
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg sm:right-0">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DDF9F4]">
                                    <CheckCircle size={17} className="text-[#0BA58D]" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-[#263746]">
                                        Faith-Friendly & Inclusive
                                    </p>
                                    <p className="text-[8px] text-[#64748B]">
                                        Values • Character • Growth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#D8F5FF] opacity-60 blur-3xl" />
        </section>
    );
};

export default Hero;