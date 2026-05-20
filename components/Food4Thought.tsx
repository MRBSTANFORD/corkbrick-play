import React, { useState } from 'react';
import { Play, Leaf, Users, ShieldCheck, FileBox, Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface Food4ThoughtProps {
    onBack: () => void;
}

export const Food4Thought: React.FC<Food4ThoughtProps> = ({ onBack }) => {
    const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

    const articles: Array<{title: string, abstract: string, date: string, content: React.ReactNode}> = [
        {
            title: "1. Positive Gamification: Engineering for Good",
            abstract: "How can game mechanics solve real-world sustainability challenges instead of isolating users? We explore how spatial constraints and digital simulations empower creators to build eco-friendly solutions.",
            date: "May 10, 2026",
            content: (
                <div className="space-y-5">
                    <p>
                        Gamification is often utilized in the tech industry to maximize attention and time-on-screen through carefully calibrated psychological loops. However, this same mechanical framework can be fundamentally re-engineered to foster constructive, physical outcomes rather than merely keeping users glued to their devices. <i>Positive gamification</i> shifts this paradigm by rewarding sustainable design choices and providing real-time feedback on environmental impact, leveraging technology as a tool for real-world enhancement.
                    </p>
                    <p>
                        In a seminal paper, <a href="https://en.wikipedia.org/wiki/Gamification" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Deterding et al. (2011)</a> defined gamification as "the use of game design elements in non-game contexts." When applied to mechanical design, architecture, and interior planning, it allows us to channel human creative energy toward solving tangible, real-world problems. The unique proposition of <strong>CORKBRICK Play</strong> is that the creativity unleashed in the digital world—where failure is free and experimentation is limitless—directly informs what you build in your living room, office, or community space.
                    </p>
                    <h5 className="font-bold text-gray-900 mt-8 mb-4 text-xl">Cognitive Engagement and Digital-to-Physical Harmony</h5>
                    <p>
                        Through the careful placement of constraints (using only the seven fundamental CORKBRICK blocks without glue or screws), users engage in what <a href="https://en.wikipedia.org/wiki/Jane_McGonigal" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Jane McGonigal (2011) describes in <em>Reality is Broken</em></a> as 'blissful productivity'. In our simulator, the clear feedback loops help individuals evaluate their architectural logic iteratively, driving an intrinsic motivation to optimize for green solutions.
                    </p>
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl my-6">
                        <p className="italic text-indigo-900 text-lg">
                            "The alignment of human motivation with ecological preservation is the next frontier of human-computer interaction, shifting from passive consumption to active, sustainable creation."
                        </p>
                    </div>
                    <p>
                        Consider a family collaborating on a tablet to redesign their living room. In the digital space, the creation is completely free; they can try ten different configurations of a TV stand until everyone agrees. But the true reward happens when the physical CORKBRICKs arrive. The digital points, constraints, and solutions manifest into a physical object they can touch and use. The high score doesn't remain locked in the cloud—it becomes a sustainable piece of furniture in their home.
                    </p>
                </div>
            )
        },
        {
            title: "2. The Digital Laboratory: Prototyping Reality",
            abstract: "CORKBRICK Play isn't just a toy—it's a physics-accurate lab. Learn how reducing the friction between 3D prototyping and physical assembly is revolutionizing modular architecture.",
            date: "May 12, 2026",
            content: (
                <div className="space-y-5">
                    <p>
                        Traditional architecture and spatial design require specialized software, rigorous training in physics, and complex blueprints. A digital laboratory democratizes this entire process. By enforcing strict constraints—using a predefined set of sustainable geometrical shapes—complex architectural problems become approachable, solvable puzzles for the layperson.
                    </p>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Michael_Schrage" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Michael Schrage, in his seminal work <em>Serious Play (1999)</em></a>, highlights how prototyping fundamentally changes how people innovate, noting that "innovative prototypes generate innovative teams." CORKBRICK Play serves exactly this function. In our digital laboratory, you are free to explore wildly imaginative structures without worrying about budget overruns or structural collapses causing real harm. 
                    </p>
                    <h5 className="font-bold text-gray-900 mt-8 mb-4 text-xl">The Porous Boundary Between Bits and Atoms</h5>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/William_J._Mitchell" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">William J. Mitchell (1995) in <em>City of Bits</em></a> argued that the boundary between the digital and physical worlds is becoming increasingly porous. The CORKBRICK simulator is a testament to this exact philosophy, operating as an architectural simulation that acts identically to physical reality. Every block placed respects real-world friction and mass distribution logic.
                    </p>
                    <p>
                        Digital tools excel at letting the human imagination run wild. You can draft an entire amphitheater out of cork in mere minutes. But unlike most videogames, where the creation remains trapped in a digital format, CORKBRICK Play ensures dimensional and physical viability in reality. The simulation is a sandbox, but the output is tangible. 
                    </p>
                    <p>
                        When users iterate within this laboratory, they are engaging in a zero-stakes testing environment. The transition from rendering to physical product is absolutely seamless. We leverage the digital realm as a place of infinite, free creation, empowering people to subsequently bring those creations into their lives as structurally sound, eco-friendly physical realities.
                    </p>
                </div>
            )
        },
        {
            title: "3. Sustainability First: Tracking the SDG Impact",
            abstract: "Every block placed in our simulator calculates its real-world environmental impact. Discover how translating digital actions into Sustainable Development Goals (SDGs) changes consumer behavior.",
            date: "May 14, 2026",
            content: (
                <div className="space-y-5">
                    <p>
                        Awareness is the crucial first step toward environmental action. However, abstract global sustainability targets and climate statistics are often too overwhelming for individuals to connect with their daily choices. We solved this by integrating the live tracking of the United Nations' Sustainable Development Goals (SDGs) directly into the 3D builder, making the environmental footprint of every action instantly tangible.
                    </p>
                    <p>
                        According to <a href="https://en.wikipedia.org/wiki/Don_Norman" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Donald Norman's research in <em>Emotional Design (2004)</em></a>, immediate, legible, and emotional feedback can dramatically alter user interaction and attachment to a product. When users see the carbon offset, the high reusability factor, and the ecological impact of their specific CORKBRICK design updating in real-time, they naturally optimize for greener, more efficient structures over disposable alternatives.
                    </p>
                    <h5 className="font-bold text-gray-900 mt-8 mb-4 text-xl">Behavioral Feedback Loops through Digital Visualization</h5>
                    <p>
                        <a href="https://behaviormodel.org/" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Dr. BJ Fogg's Behavior Model (2009)</a> emphasizes that prompt triggers combined with high motivation lead to meaningful behavioral change. By quantifying the carbon footprint of furniture and comparing it to traditional MDF or plastic alternatives within the UI, users feel a sense of achievement and empirical validation for choosing eco-friendly options.
                    </p>
                    <p>
                        Here, the digital world serves as a predictive lens for the physical world. While a user drags and drops a 'Broch' or 'Turgoc' block, the algorithm calculates the exact environmental savings. Sustainability ceases to be an abstract corporate buzzword and becomes a personal, quantifiable metric. 
                    </p>
                    <p>
                        The digital freedom allows users to experiment with various sustainable configurations until they find the optimal balance of form, function, and SDG impact. Once satisfied, they bring that optimized, highly sustainable creation perfectly into their real life.
                    </p>
                </div>
            )
        },
        {
            title: "4. Modular Systems in the Modern Workplace",
            abstract: "The office is dead; long live the dynamic workspace. How modular, reusable structures allow companies to adapt physically without the carbon footprint of classic renovations.",
            date: "May 15, 2026",
            content: (
                <div className="space-y-5">
                    <p>
                        As hybrid work becomes the permanent standard, fixed office layouts with rigid drywall and permanent fixtures are rapidly becoming obsolete. Modern corporations require a dynamic workspace. Modular systems allow a collaborative environment to function as a boardroom on Monday, and seamlessly transition into a cluster of individual focus pods by Friday.
                    </p>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/How_Buildings_Learn" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Stewart Brand’s influential book <em>How Buildings Learn (1994)</em></a> introduced the concept of 'Shearing Layers', explaining that buildings must adapt to the changing needs of their occupants. Traditional interior construction resists this adaptation, paralyzing companies with massive costs and generating immense material waste during renovations. A truly adaptable office layout conforms instead to the circular economy.
                    </p>
                    <h5 className="font-bold text-gray-900 mt-8 mb-4 text-xl">Digital Planning, Physical Execution</h5>
                    <p>
                        According to the <a href="https://ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Ellen MacArthur Foundation (2015)</a>, the circular economy relies entirely on designing out waste and keeping materials in use. CORKBRICK embodies this perfectly in the workplace. Because the blocks require no glue or permanent bonds, their lifespan transcends any single build.
                    </p>
                    <ul className="list-disc pl-5 space-y-3 my-6 text-gray-700 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <li><strong>Flexibility:</strong> Agile teams can reshape their own physical environments.</li>
                        <li><strong>Zero-Waste Renovations:</strong> Materials are never discarded; they are merely rearranged.</li>
                        <li><strong>Acoustic and Thermal Comfort:</strong> Natural cork brings innate sound dampening and warmth to sterile office spaces.</li>
                    </ul>
                    <p>
                        By leveraging the digital CORKBRICK Play platform, an entire department can collaborate online to brainstorm their new layout. They use the digital realm to visualize and agree upon the space. When Friday afternoon hits, the team physically gathers, puts their laptops away, and collaboratively builds the physical walls in an hour. It is team building and office improvement occurring simultaneously.
                    </p>
                </div>
            )
        },
        {
            title: "5. Connecting Digital Builders with Physical Materials",
            abstract: "From a JSON array to a front door delivery: understanding the supply chain of digital-to-physical modular construction and the elimination of traditional blueprints.",
            date: "May 17, 2026",
            content: (
                <div className="space-y-5">
                    <p>
                        The gulf between digital rendering and physical production is traditionally fraught with manual interpretation, transcription errors, heavy machinery, and extensive labor. By tying simple, rigid digital blocks directly to our physical inventory, the digital array itself becomes the immutable manufacturing manifest. 
                    </p>
                    <p>
                        This workflow is an accessible, consumer-friendly application of the <a href="https://en.wikipedia.org/wiki/Digital_twin" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Digital Twin concept, championed by Michael Grieves (2014)</a>. The CORKBRICK Play scene acts as a cyber-physical system. There is absolutely no loss of fidelity; the JSON payload of block coordinates created free digitally maps exactly, one-to-one, with the physical Bill of Materials (BOM) delivered to your house.
                    </p>
                    <h5 className="font-bold text-gray-900 mt-8 mb-4 text-xl">The Death of the Traditional Blueprint</h5>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Neil_Gershenfeld" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Neil Gershenfeld (2012) in <em>How to Make Almost Anything</em></a> explored how digital fabrication is bringing programmable material logic to the physical world. With CORKBRICK, we've eliminated traditional blueprints entirely. If a 10-year-old user can snap the components together on an iPad screen, the exact pieces can be shipped and assembled by that same child by hand in minutes.
                    </p>
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl my-6">
                        <p className="italic text-indigo-900 text-lg">
                            "When the digital model represents the exact constraints of the physical medium, the user becomes both the architect and the physical builder, entirely unmediated by contractors."
                        </p>
                    </div>
                    <p>
                        You get to experience the unbridled creativity of video game construction without it being a digital mirage. The joy of creating a unique bookcase in the digital world is matched only by the tactile satisfaction of opening the boxes and physically stacking the warm, textured cork blocks into your living space.
                    </p>
                </div>
            )
        },
        {
            title: "6. Collaboration Over Isolation: Reinforcing Human Relationships",
            abstract: "Technology's ultimate promise was connection, yet much of our software isolates us. How multi-user spatial planning encourages families and teams to collaborate in shared physical spaces.",
            date: "May 18, 2026",
            content: (
                <div className="space-y-5">
                    <p>
                        Technology's original promise was to bring humanity closer together. Yet much of modern consumer software isolates users in solitary, algorithmic feeds or competitive digital arenas void of real-world impact. However, pro-social technology can act as a bridge. By turning furniture and spatial design into an approachable digital game, we are taking the first step to invite multiple people to collaborate.
                    </p>
                    <p>
                        Yet, digital collaboration is only half the equation. <a href="https://en.wikipedia.org/wiki/Lev_Vygotsky" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Lev Vygotsky’s theories on social learning (1978)</a> assert that true cognitive development and deep bonding thrive on physical social interaction and shared problem-solving. This is where CORKBRICK Play becomes truly unique.
                    </p>
                    <h5 className="font-bold text-gray-900 mt-8 mb-4 text-xl">Combating the Decline of Community</h5>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Bowling_Alone" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Robert Putnam famously explored the decline of community and physical socialization in <em>Bowling Alone (2000)</em></a>. To combat this isolation, we must build technology that reinforces real-world human relationships. CORKBRICK Play uses the screen simply to organize the idea—but the main event happens offline.
                    </p>
                    <p>
                        A family might spend an evening gathered around a screen throwing ideas together for a new playroom divider. But next week, when the blocks arrive, no screens are involved. They work together to hoist the blocks, problem-solving in physical space, communicating, laughing, and building their shared environment. 
                    </p>
                    <p>
                        This physical collaboration is something purely digital games can never offer. As they manipulate the blocks by hand, they engage in spatial reasoning, compromise, and shared creative fulfillment, yielding stronger interpersonal bonds forged through the tactile act of collaborative construction.
                    </p>
                </div>
            )
        },
        {
            title: "7. The Open Source Philosophy for Physical Spaces",
            abstract: "Why we believe that the algorithms governing our physical spaces should be as open and collaborative as our software. A call to developers and designers to join the modular revolution.",
            date: "May 20, 2026",
            content: (
                <div className="space-y-5">
                    <p>
                        The software industry thrives on open-source principles: shared knowledge, rapid iteration, and community-driven improvement. We passionately believe physical architecture and spatial systems should operate within the exact same paradigm. 
                    </p>
                    <p>
                        In <a href="https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800"><em>The Cathedral and the Bazaar (1999)</em></a>, Eric S. Raymond demonstrated how decentralized community development vastly outperforms closed, top-down models. By publishing the CORKBRICK Play engine and encouraging developers to integrate it with robust CAD systems via open formats like .OBJ, we are fostering an open ecosystem geared toward resolving global spatial challenges.
                    </p>
                    <h5 className="font-bold text-gray-900 mt-8 mb-4 text-xl">Democratization of Design</h5>
                    <p>
                        Architect and researcher <a href="https://en.wikipedia.org/wiki/Carlo_Ratti" target="_blank" rel="noreferrer" className="text-indigo-600 underline hover:text-indigo-800">Carlo Ratti (2015) in <em>Open Source Architecture</em></a> envisioned a world where citizens actively participate in the design of their habitats. A modular, open-source architecture framework allows community contributions to dictate the evolution of spatial configurations, rather than relying solely on legacy architectural firms and proprietary furniture retailers.
                    </p>
                    <p>
                        Imagine browsing a global repository of CORKBRICK designs. You can "fork" a desk designed by someone in Tokyo, modify it perfectly in our digital playground to fit your specific Lisbon apartment, and then physically assemble it there a few days later. 
                    </p>
                    <p>
                        We invite developers, environmentalists, and system thinkers to join this open-source movement. Contribute to our repositories, extend our 3D API, and help us turn sustainable spatial challenges into universally accessible, physical platforms. You design freely in the digital world, but the legacy you leave is built in reality. Let’s build the physical world together.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shrink-0">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-indigo-600 font-black tracking-tight text-xl">
                        <Leaf className="text-green-600" /> CORKBRICK<span className="font-light text-gray-400">Play</span>
                    </div>
                    <button 
                        onClick={onBack}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors cursor-pointer"
                    >
                        Back to App
                    </button>
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Food for Thought</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Essays and perspectives on positive gamification, sustainable architecture, and the intersection of technology and physical spaces.
                    </p>
                </div>

                <div className="space-y-8">
                    {articles.map((article, i) => (
                        <article key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="text-sm text-indigo-600 font-semibold mb-2">{article.date}</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {article.abstract}
                            </p>
                            
                            {expandedArticle === i ? (
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-800 mb-6 text-xl">Full Article</h4>
                                    <div className="text-gray-700 leading-relaxed max-w-none text-base">
                                        {article.content}
                                    </div>
                                    <button 
                                        onClick={() => setExpandedArticle(null)}
                                        className="mt-8 text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1 group"
                                    >
                                        <ChevronUp size={18} /> Close Article
                                    </button>
                                </div>
                            ) : (
                                <button 
                                    onClick={() => setExpandedArticle(i)}
                                    className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1 group"
                                >
                                    Read Full Article 
                                    <ChevronDown size={18} className="transform transition-transform group-hover:translate-y-1" />
                                </button>
                            )}
                        </article>
                    ))}
                </div>
                
                <div className="mt-16 bg-indigo-50 rounded-2xl p-8 border border-indigo-100 text-center">
                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">Join the Conversation</h3>
                    <p className="text-indigo-700 mb-6 max-w-lg mx-auto">
                        Are you a developer or designer interested in building tech for good? We are an open platform looking for contributors to help us gamify sustainability.
                    </p>
                    <a href="https://github.com/corkbrick" target="_blank" rel="noreferrer" className="inline-flex mx-auto items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-transform hover:scale-105 shadow-sm">
                        <Users size={20} /> Contribute on GitHub
                    </a>
                </div>
            </main>
        </div>
    );
};
