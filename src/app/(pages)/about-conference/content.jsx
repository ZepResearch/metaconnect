import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Lightbulb, Target, Zap, ChevronRight } from "lucide-react"

export default function AboutConference() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>MetaConnect 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              About The Conference
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Discover the vision, mission, and purpose behind MetaConnect 2025
            </p>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">About the Conference</h2>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    MetaConnect 2025 is a groundbreaking conference at the intersection of virtual worlds and scientific
                    discovery. This premier event brings together researchers, technologists, and visionaries from
                    diverse disciplines to explore how emerging technologies are transforming the landscape of
                    multidisciplinary research.
                  </p>

                  <p>
                    In an era where traditional boundaries between academic disciplines are dissolving, MetaConnect
                    provides a platform for cross-pollination of ideas, methodologies, and technologies. Our conference
                    features keynote presentations from world-renowned experts, interactive workshops, panel
                    discussions, and networking opportunities designed to foster collaboration across fields.
                  </p>

                  <p>
                    Whether you're a seasoned researcher, industry professional, or a student exploring new frontiers,
                    MetaConnect offers a unique opportunity to engage with cutting-edge research and form connections
                    that transcend traditional disciplinary boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <Target className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
                </div>

                <div className="space-y-6 text-purple-100/90">
                  <p>
                    MetaConnect's mission is to accelerate scientific discovery and innovation through multidisciplinary
                    collaboration in virtual and augmented environments. We aim to:
                  </p>

                  <ul className="space-y-4 pl-6">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-xs">
                        1
                      </div>
                      <span>Break down silos between academic disciplines and research methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 text-white font-bold text-xs">
                        2
                      </div>
                      <span>
                        Foster innovative approaches to complex global challenges through collaborative research
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-bold text-xs">
                        3
                      </div>
                      <span>
                        Showcase cutting-edge technologies that enable new forms of scientific inquiry and collaboration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-bold text-xs">
                        4
                      </div>
                      <span>Build a global community of researchers committed to multidisciplinary approaches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Conference Highlights
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "World-Class Speakers",
                description:
                  "Hear from leading researchers and innovators at the forefront of multidisciplinary science",
                icon: <Users className="h-8 w-8 text-cyan-400" />,
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                title: "Interactive Workshops",
                description:
                  "Participate in hands-on sessions exploring virtual research environments and methodologies",
                icon: <Lightbulb className="h-8 w-8 text-fuchsia-400" />,
                gradient: "from-fuchsia-500 to-purple-600",
              },
              {
                title: "Networking Opportunities",
                description: "Connect with peers and potential collaborators in our specially designed virtual spaces",
                icon: <Zap className="h-8 w-8 text-purple-400" />,
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="relative backdrop-blur-sm bg-purple-900/20 rounded-2xl border border-purple-400/20 overflow-hidden p-6 group hover:bg-purple-900/30 transition-all"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${highlight.gradient} p-0.5 mb-4`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      {highlight.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                  <p className="text-purple-100/70">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Why Attend MetaConnect 2025</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Expand Your Research Horizons</h3>
                      <p className="text-purple-100/80">
                        Discover new methodologies, technologies, and perspectives that can enhance your research and
                        open up new avenues of inquiry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Form Valuable Connections</h3>
                      <p className="text-purple-100/80">
                        Network with researchers from diverse fields who share your passion for innovation and
                        collaboration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Stay at the Cutting Edge</h3>
                      <p className="text-purple-100/80">
                        Learn about the latest advancements in virtual research environments and how they're
                        transforming scientific discovery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Showcase Your Work</h3>
                      <p className="text-purple-100/80">
                        Present your research to a diverse, global audience and receive valuable feedback from experts
                        across disciplines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Attend Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Who Can Attend</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Academic Researchers",
                      description: "Faculty, postdoctoral researchers, and graduate students from all disciplines",
                      gradient: "from-cyan-400 to-blue-500",
                    },
                    {
                      title: "Industry Professionals",
                      description: "R&D specialists, technology developers, and innovation leaders",
                      gradient: "from-fuchsia-400 to-purple-500",
                    },
                    {
                      title: "Technology Enthusiasts",
                      description: "Those interested in the future of virtual research environments",
                      gradient: "from-purple-400 to-indigo-500",
                    },
                    {
                      title: "Students",
                      description: "Undergraduate and graduate students exploring multidisciplinary research",
                      gradient: "from-pink-400 to-fuchsia-500",
                    },
                  ].map((attendee, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${attendee.gradient} mt-2`}></div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">{attendee.title}</h3>
                        <p className="text-purple-100/80">{attendee.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg px-8 py-6 text-lg">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue & Date Card */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative backdrop-blur-sm bg-purple-900/30 rounded-2xl border border-purple-400/20 overflow-hidden p-6">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <Calendar className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-100/70">Date</p>
                    <p className="text-white font-medium">June 15-17, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <MapPin className="h-6 w-6 text-fuchsia-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-purple-100/70">Venue</p>
                    <p className="text-white font-medium">Tech Innovation Center, San Francisco</p>
                  </div>
                </div>

                <Link href="/venue">
                  <Button
                    variant="outline"
                    className="border-purple-400/30 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20 rounded-lg backdrop-blur-md whitespace-nowrap"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
