import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Download, Clock, Music, Award, Feather, Layers, SlidersHorizontal, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Compositions = () => {
  const albums = [
    {
      id: 1,
      title: 'Smooth Soul & Jazz',
      description: 'A warm, polished collection of jazz and soul-inspired instrumentals designed for sophisticated storytelling, late-night moods, and stylish scenes. This set blends expressive melodies, smoky harmonies, and laid-back grooves with a vintage-modern feel — perfect for content that calls for character, subtle emotion, and refined energy.',
      artwork: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/961ac190-8d3b-4bcb-95a6-5911be07fa14/2dd15b7afd1bb1e4d4b50b723d999d00.png',
      tracks: [
        { title: 'Velvet Soul', duration: '3:45' },
        { title: 'Brass and Breeze', duration: '4:12' },
        { title: 'City at Night', duration: '3:28' },
        { title: 'Midnight Frequency', duration: '4:35' },
      ],
      usage: 'Ideal for Film/TV drama, Urban lifestyle content, Fashion or cocktail advertising, Upscale brand storytelling, Late-night radio and podcast syncs.',
      color: 'from-amber-600 to-orange-700'
    },
    {
      id: 2,
      title: 'Urban Nocturne',
      description: 'Contemporary jazz meets city vibes with modern production and urban sophistication.',
      artwork: 'Modern urban jazz album cover with city skyline silhouette, neon lights, and contemporary jazz instruments',
      tracks: [
        { title: 'City Lights', duration: '4:02' },
        { title: 'Neon Reflections', duration: '3:38' },
        { title: 'Metropolitan Groove', duration: '4:15' },
        { title: 'Late Night Transit', duration: '3:55' },
        { title: 'Urban Pulse', duration: '4:28' }
      ],
      usage: 'Perfect for modern commercials, urban documentaries, and contemporary lifestyle content.',
      color: 'from-blue-600 to-purple-700'
    },
    {
      id: 3,
      title: 'Wellness & Ambience',
      description: 'A serene and spacious collection of ambient and wellness-focused instrumentals designed to calm, restore, and centre the listener. These tracks blend gentle acoustic textures with subtle synths, nature-inspired tones, and slow, evolving arrangements — ideal for content that needs clarity, space, and emotional ease. This is music created with mindfulness and flow in mind — perfect for wellness brands, meditation content, spa visuals, nature documentaries, and slow cinema. Each track provides a sonic environment that supports without overwhelming.',
      artwork: 'Serene wellness album cover with soft natural tones, featuring peaceful nature elements and gentle musical notes',
      tracks: [
        { title: 'Underwater Spa', duration: '5:12' },
        { title: 'Open Spaces', duration: '4:45' },
        { title: 'Shifting Light', duration: '3:58' },
        { title: 'Rising Sun', duration: '6:02' },
        { title: 'Midnight Frequency', duration: '4:33' }
      ],
      usage: 'Excellent for Mindfulness, wellness, and yoga content, Spa and retreat advertising, Nature and slow-travel documentaries, Emotional underscore in film/TV, Sleep, relaxation, and breathing apps.',
      color: 'from-green-600 to-teal-700'
    },
    {
      id: 4,
      title: 'Cinematic Emotions',
      description: 'Dramatic orchestral jazz pieces that evoke deep emotions and enhance storytelling.',
      artwork: 'Cinematic album cover with dramatic lighting, orchestral instruments, and film reel elements in rich burgundy tones',
      tracks: [
        { title: 'Epic Journey', duration: '5:45' },
        { title: 'Emotional Crescendo', duration: '4:18' },
        { title: 'Dramatic Tension', duration: '3:42' },
        { title: 'Heartfelt Melody', duration: '4:55' },
        { title: 'Triumphant Resolution', duration: '5:28' }
      ],
      usage: 'Ideal for film scores, documentaries, emotional advertising, and dramatic content.',
      color: 'from-red-600 to-pink-700'
    }
  ];

  const bioFeatures = [
      { icon: Feather, text: "Strong melodic instincts and understated elegance" },
      { icon: Layers, text: "Thoughtful structure, subtle development, and emotional tone" },
      { icon: SlidersHorizontal, text: "High-quality mixes and alternate versions (loops, 30s cuts, instrumentals)" },
      { icon: Shuffle, text: "Adaptability across jazz, soul, ambient, cinematic, and acoustic folk" }
  ];

  const handlePlayTrack = (albumTitle, trackTitle) => {
    toast({
      title: "🎵 Track Preview",
      description: `🚧 Audio preview for "${trackTitle}" from "${albumTitle}" isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const handleDownload = (albumTitle) => {
    toast({
      title: "📥 Download Album",
      description: `🚧 Download feature for "${albumTitle}" isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Compositions - Mattie James, Composer Bio</title>
        <meta name="description" content="Mattie James is a UK-based composer creating sync-ready music for film and media. Explore his work in jazz, soul, and ambient wellness." />
      </Helmet>

      <div className="pt-16">
        {/* Composer Bio Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="playfair text-5xl md:text-6xl font-bold mb-6 jazz-text-gradient">
                Composer Bio
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 glass-effect p-8 rounded-lg"
              >
                <h2 className="playfair text-3xl font-bold mb-4 text-orange-300">Mattie James</h2>
                <p className="text-lg text-amber-200/80 mb-4 leading-relaxed">
                    Mattie James is a UK-based composer, vocalist, and multi-instrumentalist creating expressive, sync-ready music for film, television, and digital media. His work blends smooth jazz, soulful grooves, and ambient wellness textures — all crafted with emotional clarity and musical depth.
                </p>
                <p className="text-lg text-amber-200/80 mb-4 leading-relaxed">
                    Specialising in vintage-inspired jazz cues and soothing, meditative soundscapes, Mattie’s compositions sit at the intersection of atmosphere and storytelling. These styles are consistently in high demand across sync briefs, offering editors and music supervisors rich, characterful music that enhances without distracting.
                </p>
                <p className="text-lg text-amber-200/80 leading-relaxed">
                    From retro-tinged city jazz to spacious spa-ready ambience, his tracks are ready to support lifestyle content, advertising, documentaries, and wellness-focused media.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="art-deco-border rounded-lg overflow-hidden vinyl-shadow">
                  <img  
                    className="w-full h-auto object-cover" 
                    alt="Artistic portrait of Mattie James, composer"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
              </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 glass-effect p-8 rounded-lg"
            >
                <h3 className="playfair text-2xl font-bold mb-6 text-center jazz-text-gradient">Known For</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {bioFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-10 h-10 jazz-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <feature.icon className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-amber-200/90">{feature.text}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-amber-200/80 mt-8">
                  All music is composed, recorded, and produced independently, making it fully <strong>one-stop cleared</strong> and licensing-ready. Mattie is <strong>PRS/MCPS affiliated</strong> and available for sync licensing, brand campaigns, and bespoke scoring projects.
                </p>
            </motion.div>
          </div>
        </section>

        {/* Albums Grid */}
        <section className="py-12 px-4 bg-gradient-to-r from-amber-950/50 to-orange-950/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="playfair text-4xl md:text-5xl font-bold mb-12 text-center jazz-text-gradient">
              Musical Catalogue
            </h2>
            <div className="grid gap-12">
              {albums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 vinyl-shadow"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Album Artwork */}
                    <div className="lg:col-span-1">
                      <div className="relative group">
                        <div className="art-deco-border rounded-xl overflow-hidden">
                          <img  
                            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" 
                            alt={`${album.title} album artwork`}
                           src={album.artwork} />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${album.color} opacity-20 rounded-xl`}></div>
                        <div className="absolute top-4 right-4">
                          <Button
                            onClick={() => handleDownload(album.title)}
                            size="icon"
                            className="jazz-gradient hover:scale-110 transition-transform duration-300"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Album Info */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h2 className="playfair text-3xl md:text-4xl font-bold mb-3 jazz-text-gradient">
                          {album.title}
                        </h2>
                        <p className="text-lg text-amber-200/80 mb-4 leading-relaxed">
                          {album.description}
                        </p>
                        <div className="bg-orange-950/30 rounded-lg p-4 border border-orange-400/20">
                          <h4 className="font-semibold text-orange-300 mb-2">Ideal For:</h4>
                          <p className="text-amber-200/80">{album.usage}</p>
                        </div>
                      </div>

                      {/* Track List */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-orange-300">Tracks in this album:</h3>
                        <div className="space-y-2">
                          {album.tracks.map((track, trackIndex) => (
                            <motion.div
                              key={trackIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: trackIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center justify-between p-3 rounded-lg bg-amber-950/20 hover:bg-amber-950/40 transition-colors duration-300 group"
                            >
                              <div className="flex items-center gap-3">
                                <Button
                                  onClick={() => handlePlayTrack(album.title, track.title)}
                                  size="icon"
                                  variant="ghost"
                                  className="w-8 h-8 text-orange-400 hover:text-orange-300 hover:bg-orange-400/10"
                                >
                                  <Play className="w-4 h-4" />
                                </Button>
                                <span className="font-medium text-amber-100 group-hover:text-orange-300 transition-colors duration-300">
                                  {track.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-amber-200/60">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{track.duration}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Compositions;