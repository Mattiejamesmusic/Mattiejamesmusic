
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mic, Music as GuitarIcon, Music2 as BassIcon, Play, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Live = () => {
  const performances = [
    {
      icon: Mic,
      title: 'Jazz Vocalist',
      bio: 'UK-based vocalist with a velvet tone, swing sensibility, and storytelling finesse. Mattie is the frontman of the jazz outfit Boulevardier, performing alongside pianist Craig Milverton, delivering elegant and emotionally resonant vocal jazz.',
      highlights: [
        'Intimate vocals, lyrical clarity',
        'Authentic swing arrangements',
        'Ensemble chemistry',
        'Elegant stage presence',
      ],
      availability: 'Jazz festivals, weddings, vintage dance nights, private events, and clubs.',
      videos: [
        { url: 'https://youtu.be/b4Yo_bmZILs', thumbnail: 'Mattie James singing with Boulevardier jazz outfit' },
        { url: 'https://youtu.be/4KRPRN7oO38', thumbnail: 'Close-up of Mattie James performing a jazz standard' },
      ],
      color: 'from-purple-600 to-pink-700',
      image: 'Professional jazz vocalist performing on stage with warm spotlight, vintage microphone, and elegant evening attire'
    },
    {
      icon: GuitarIcon,
      title: 'Guitarist',
      bio: 'Versatile guitarist with groove-led rhythm work and expressive melodic phrasing. Fluent across jazz, soul, pop, acoustic, and funk. Mattie has performed in various lineups including jazz orchestras, soul groups, and session projects.',
      experience: [
        'Function bands (e.g., 52nd Street)',
        'Jazz orchestras (e.g., Exeter Jazz Orchestra)',
        'Session and live work',
      ],
      videos: [
        { url: 'https://youtu.be/liLsnV599KQ', thumbnail: 'Guitarist playing a solo in a jazz orchestra' },
        { url: 'https://youtu.be/sOSPTZZ4dD4', thumbnail: 'Rhythm guitar work in a soul group' },
        { url: 'https://youtu.be/Bg4D3tJC18A', thumbnail: 'Acoustic guitar performance' },
        { url: 'https://youtu.be/_6zYWEb3x-8', thumbnail: 'Funk guitar groove session' },
        { url: 'https://youtu.be/KrieCY4LuN0', thumbnail: 'Live performance with 52nd Street band' },
        { url: 'https://youtu.be/y5q0BFO6dYs', thumbnail: 'Close-up on guitar fretwork during a solo' },
        { url: 'https://youtu.be/jCVUmS_0gB0', thumbnail: 'Guitarist in a live function band setting' },
        { url: 'https://youtu.be/3u7ycp87AYQ', thumbnail: 'Expressive guitar melody performance' },
      ],
      color: 'from-orange-600 to-red-700',
      image: 'Skilled guitarist in recording studio with vintage jazz guitar, warm lighting, and professional equipment'
    },
    {
      icon: BassIcon,
      title: 'Bassist',
      bio: 'Groove-focused bassist with warm tone, deep pocket, and versatile feel across funk, soul, jazz, and acoustic pop. Reliable, musical, and expressive in both electric and upright bass work.',
      experience: [
        'Function bands like 52nd Street',
        'Collaborations with artists such as Rowan Stuart',
        'Session player with strong time, tone, and taste',
      ],
      videos: [
        { url: 'https://youtu.be/BY5TfSwgmB8', thumbnail: 'Bassist laying down a funk groove' },
        { url: 'https://youtu.be/4FToFOU0ey8', thumbnail: 'Upright bass performance in a jazz trio' },
        { url: 'https://youtu.be/FeOEdPCvB5s', thumbnail: 'Soulful bass line with a band' },
        { url: 'https://youtu.be/TZDuohmQRf0', thumbnail: 'Acoustic pop bass session' },
        { url: 'https://youtu.be/wDZqMFaTkIM', thumbnail: 'Live bass performance with 52nd Street' },
        { url: 'https://youtu.be/yhOWMKVWTsc', thumbnail: 'Close-up on bass fingerwork' },
        { url: 'https://youtu.be/mPDC16w6Zv8', thumbnail: 'Bassist collaborating with Rowan Stuart' },
        { url: 'https://youtu.be/gRvvQCeOecw', thumbnail: 'Deep pocket groove session' },
      ],
      color: 'from-teal-600 to-blue-700',
      image: 'Professional bassist performing with upright bass in jazz club setting, atmospheric lighting and intimate venue'
    }
  ];

  const handleBooking = () => {
    toast({
      title: "📅 Booking Inquiry",
      description: "🚧 Booking system isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const getYouTubeThumbnail = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <>
      <Helmet>
        <title>Live Performances - Mattie James Music</title>
        <meta name="description" content="Mattie James is a versatile UK-based live performer, available as a jazz vocalist, guitarist, and bassist for events, venues, and session work." />
      </Helmet>

      <div className="pt-16">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="playfair text-5xl md:text-6xl font-bold mb-6 jazz-text-gradient">
                Live Performances
              </h1>
              <p className="text-xl text-amber-200/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                Mattie James is a versatile UK-based live performer, bringing his musicality and style to jazz venues, function bands, swing nights, orchestras, and more. As a vocalist, bassist, and guitarist, Mattie’s live work is rooted in feel, tone, and authenticity — whether fronting a vintage swing ensemble or laying down soulful rhythm and groove.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-orange-300">
                <span className="flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  Jazz Vocalist
                </span>
                <span className="flex items-center gap-2">
                  <GuitarIcon className="w-4 h-4" />
                  Guitarist
                </span>
                <span className="flex items-center gap-2">
                  <BassIcon className="w-4 h-4" />
                  Bassist
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Performance Sections */}
        <section className="py-12 px-4 bg-gradient-to-r from-amber-950/50 to-orange-950/50">
          <div className="max-w-7xl mx-auto space-y-16">
            {performances.map((perf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 vinyl-shadow"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Icon and Title */}
                  <div className="lg:col-span-1 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 jazz-gradient rounded-full flex items-center justify-center mb-4 border-2 border-orange-400/50`}>
                      <perf.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="playfair text-3xl font-bold jazz-text-gradient">{perf.title}</h2>
                  </div>

                  {/* Bio and Details */}
                  <div className="lg:col-span-4">
                    <p className="text-lg text-amber-200/80 mb-6 leading-relaxed">{perf.bio}</p>
                    
                    {perf.highlights && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-orange-300 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {perf.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                              <span className="text-amber-200/90">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {perf.experience && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-orange-300 mb-3">Experience:</h4>
                        <ul className="space-y-2">
                          {perf.experience.map((exp, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Star className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                              <span className="text-amber-200/90">{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {perf.availability && (
                        <div className="mb-6 bg-orange-950/30 rounded-lg p-4 border border-orange-400/20">
                          <h4 className="font-semibold text-orange-300 mb-2">Performance Availability:</h4>
                          <p className="text-amber-200/80">{perf.availability}</p>
                        </div>
                    )}

                    {/* Video Gallery */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-orange-300 mb-4">Performance Videos:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {perf.videos.map((video, videoIndex) => (
                          <motion.a
                            key={videoIndex}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: videoIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="relative rounded-lg overflow-hidden group hover-lift"
                          >
                            <img
                              src={getYouTubeThumbnail(video.url)}
                              alt={video.thumbnail}
                              className="w-full h-auto aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 bg-red-600/80 rounded-full flex items-center justify-center">
                                <Play className="w-6 h-6 text-white ml-1" />
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 jazz-text-gradient">
                Book a Performance
              </h2>
              <p className="text-lg text-amber-200/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're planning an intimate gathering, corporate event, or special celebration, 
                let's create a musical experience that resonates with your audience and enhances your occasion.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass-effect rounded-lg p-6">
                  <h3 className="font-semibold text-orange-300 mb-2">Intimate Venues</h3>
                  <p className="text-amber-200/80 text-sm">Jazz clubs, restaurants, private events</p>
                </div>
                <div className="glass-effect rounded-lg p-6">
                  <h3 className="font-semibold text-orange-300 mb-2">Corporate Events</h3>
                  <p className="text-amber-200/80 text-sm">Conferences, receptions, brand activations</p>
                </div>
                <div className="glass-effect rounded-lg p-6">
                  <h3 className="font-semibold text-orange-300 mb-2">Special Occasions</h3>
                  <p className="text-amber-200/80 text-sm">Weddings, celebrations, festivals</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleBooking}
                  className="jazz-gradient hover:scale-105 transition-transform duration-300 px-8 py-3"
                >
                  Request Booking
                </Button>
                <Button 
                  variant="outline" 
                  className="border-orange-400 text-orange-400 hover:bg-orange-400/10 px-8 py-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  Discuss Requirements
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Live;
