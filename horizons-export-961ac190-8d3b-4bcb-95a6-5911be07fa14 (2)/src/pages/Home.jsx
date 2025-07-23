import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music, Award, Users, Headphones, Feather, Sparkles, Music as Guitar, Mic, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Home = () => {
  const signatureQualities = [{
    icon: Waves,
    title: 'Emotional, Ambient Jazz & Acoustic Fusion',
    description: 'Crafting evocative instrumental tracks that blend organic textures with jazz harmony and ambient depth.'
  }, {
    icon: Feather,
    title: 'Composer-Led Instrumental Storytelling',
    description: 'Creating immersive, narrative-driven compositions that offer space for emotional reflection and escape.'
  }, {
    icon: Guitar,
    title: 'Deep Musicality Across Instruments',
    description: 'Drawing from experience as a vocalist, bassist, and guitarist to bring rich melodic tone and feel.'
  }, {
    icon: Award,
    title: 'Sync-Ready, One-Stop Cleared Recordings',
    description: 'Music ideal for film, television, and sync licensing, fully cleared for commercial use.'
  }, {
    icon: Sparkles,
    title: 'Themes Inspired by Nature & Inner Worlds',
    description: 'Concept-based albums and instrumental themes inspired by the natural world and cosmic atmospheres.'
  }];
  return <>
      <Helmet>
        <title>Mattie James Music - Composer & Multi-Instrumentalist</title>
        <meta name="description" content="Mattie James is a UK-based composer and multi-instrumentalist creating rich, cinematic soundscapes that blend organic textures with jazz harmony and ambient depth. Ideal for film, television, and sync licensing." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30" alt="Jazz musician performing in atmospheric lighting" src="https://images.unsplash.com/flagged/photo-1572142006557-c0dd58567433" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-orange-950/70 to-stone-950/90"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }}>
              <h1 className="playfair text-5xl md:text-7xl font-bold mb-6">
                <span className="jazz-text-gradient">Mattie James</span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-4 font-light">
                Composer & Multi-Instrumentalist
              </p>
              <p className="text-lg text-amber-200/80 mb-8 max-w-2xl mx-auto leading-relaxed">
Mattie James is a UK-based composer and multi-instrumentalist creating rich, cinematic soundscapes that blend organic textures with jazz harmony and ambient depth. Drawing from his experience as a vocalist, bassist, and guitarist, Mattie crafts evocative instrumental tracks that are ideal for film, television, and sync licensing.
His music moves fluidly between genres — from lush acoustic reveries to cosmic, electronic atmospheres — always with emotional clarity and musicality at the core.
Inspired by the natural world and narrative-driven composition, Mattie’s work is intentionally immersive. His concept-based albums and instrumental themes offer space for listeners to emotionally reflect, decompress, and momentarily escape from the noise of modern life.
Signature qualities:
Emotional, ambient jazz and acoustic fusion
Composer-led approach to instrumental storytelling
Deep musicality across bass, guitar, and voice
Focus on sync-ready, one-stop cleared recordings
Themes inspired by nature, atmosphere, and inner worlds
Whether scoring intimate moments or building immersive sonic worlds, Mattie James brings subtlety, feel, and rich melodic tone to every project.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/compositions">
                  <Button className="jazz-gradient hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg font-medium">
                    Explore Compositions
                  </Button>
                </Link>
                <Link to="/live">
                  <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400/10 px-8 py-3 text-lg font-medium">Live Performances</Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Floating musical notes animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute text-orange-400/20 text-2xl" style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i % 3 * 20}%`
          }} animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0]
          }} transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
                ♪
              </motion.div>)}
          </div>
        </section>

        {/* Signature Qualities Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 jazz-text-gradient">
                Signature Qualities
              </h2>
              <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
                Mattie's music moves fluidly between genres, always with emotional clarity and musicality at the core.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signatureQualities.map((quality, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="glass-effect rounded-lg p-6 hover-lift group">
                  <div className="w-12 h-12 jazz-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <quality.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-300">
                    {quality.title}
                  </h3>
                  <p className="text-amber-200/80 leading-relaxed">
                    {quality.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* About Preview Section - Simplified */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-950/50 to-orange-950/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 jazz-text-gradient">
                  Immersive Sonic Worlds
                </h2>
                <p className="text-lg text-amber-200/80 mb-6 leading-relaxed">
                  Inspired by the natural world and narrative-driven composition, Mattie’s work is intentionally immersive. His concept-based albums and instrumental themes offer space for listeners to emotionally reflect, decompress, and momentarily escape from the noise of modern life.
                </p>
                <p className="text-lg text-amber-200/80 mb-8 leading-relaxed">
                  Whether scoring intimate moments or building immersive sonic worlds, Mattie James brings subtlety, feel, and rich melodic tone to every project.
                </p>
                <Link to="/compositions">
                  <Button className="jazz-gradient hover:scale-105 transition-transform duration-300">
                    Discover My Music
                  </Button>
                </Link>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="art-deco-border rounded-lg overflow-hidden vinyl-shadow">
                  <img className="w-full h-96 object-cover" alt="Mattie James in recording studio with vintage instruments" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 jazz-gradient rounded-full flex items-center justify-center jazz-pulse">
                  <Music className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 jazz-text-gradient">
                Ready to Collaborate?
              </h2>
              <p className="text-xl text-amber-200/80 mb-8 max-2xl mx-auto">
                Let's create something beautiful together. Whether you need original compositions, 
                live performances, or sync-ready tracks, I'm here to bring your vision to life.
              </p>
              <Link to="/contact">
                <Button className="jazz-gradient hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Home;