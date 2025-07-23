
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Plus, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const initialGalleryImages = [
  {
    id: 1,
    category: 'performance',
    title: 'Jazz Club Performance',
    description: 'Intimate performance at a renowned jazz venue',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'portrait',
    title: 'Studio Portrait',
    description: 'Professional portrait session with vintage instruments',
    image: 'https://images.unsplash.com/photo-1595872018818-97555653a011?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'album',
    title: 'Smooth Soul & Jazz Album',
    description: 'Album artwork for the Smooth Soul & Jazz collection',
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/961ac190-8d3b-4bcb-95a6-5911be07fa14/2dd15b7afd1bb1e4d4b50b723d999d00.png',
  },
  {
    id: 4,
    category: 'performance',
    title: 'Guitar Session',
    description: 'Live guitar performance showcasing technical skill',
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'portrait',
    title: 'Recording Studio',
    description: 'Behind the scenes in the recording studio',
    image: 'https://images.unsplash.com/photo-1587933959905-0f724ca45eaa?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'album',
    title: 'Urban Nocturne Album',
    description: 'Contemporary jazz meets urban sophistication',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 7,
    category: 'performance',
    title: 'Bass Performance',
    description: 'Dynamic bass performance with upright bass',
    image: 'https://images.unsplash.com/photo-1579952210309-7a6b442d4edf?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 8,
    category: 'portrait',
    title: 'Artistic Portrait',
    description: 'Creative portrait emphasizing musical artistry',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1965&auto=format&fit=crop',
  },
  {
    id: 9,
    category: 'album',
    title: 'Wellness & Ambience',
    description: 'Serene album artwork for meditation and wellness',
    image: 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 10,
    category: 'performance',
    title: 'Vocal Performance',
    description: 'Captivating vocal performance with emotional depth',
    image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 11,
    category: 'portrait',
    title: 'Musician at Work',
    description: 'Candid shot of creative process in action',
    image: 'https://images.unsplash.com/photo-1460036521480-ff49c08c2781?q=80&w=2073&auto=format&fit=crop',
  },
  {
    id: 12,
    category: 'album',
    title: 'Cinematic Emotions',
    description: 'Dramatic album cover for cinematic compositions',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1932&auto=format&fit=crop',
  }
];

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [newImage, setNewImage] = useState({ title: '', description: '', image: '', category: 'performance' });

  useEffect(() => {
    try {
      const storedImages = localStorage.getItem('mattieJamesGalleryImages');
      if (storedImages) {
        setGalleryImages(JSON.parse(storedImages));
      }
    } catch (error) {
      console.error("Failed to parse images from localStorage", error);
      setGalleryImages(initialGalleryImages);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('mattieJamesGalleryImages', JSON.stringify(galleryImages));
    } catch (error) {
      console.error("Failed to save images to localStorage", error);
    }
  }, [galleryImages]);

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'performance', label: 'Performance' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'album', label: 'Album Artwork' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setNewImage(prev => ({ ...prev, category: value }));
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!newImage.title || !newImage.image || !newImage.description) {
      toast({
        title: "Incomplete Information",
        description: "Please fill out all fields to add an image.",
        variant: "destructive",
      });
      return;
    }
    const newImageWithId = { ...newImage, id: Date.now() };
    setGalleryImages(prev => [newImageWithId, ...prev]);
    setAddModalOpen(false);
    setNewImage({ title: '', description: '', image: '', category: 'performance' });
    toast({
      title: "Image Added!",
      description: `"${newImage.title}" has been added to your gallery.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Mattie James Music</title>
        <meta name="description" content="Explore the visual gallery of Mattie James Music featuring performance photos, professional portraits, and album artwork showcasing the artistry and atmosphere of jazz music." />
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
                Visual Gallery
              </h1>
              <p className="text-xl text-amber-200/80 max-w-3xl mx-auto mb-8">
                A curated collection of performance moments, artistic portraits, and album artwork 
                that capture the essence and atmosphere of jazz music in visual form.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter & Add Button */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'jazz-gradient text-white'
                      : 'border-orange-400 text-orange-400 hover:bg-orange-400/10'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
              <Button onClick={() => setAddModalOpen(true)} className="jazz-gradient hover:scale-105 transition-transform duration-300">
                <Plus className="w-4 h-4 mr-2" />
                Add Image
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg glass-effect hover-lift cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img  
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        alt={image.title}
                        src={image.image}
                        onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1932&auto=format&fit=crop' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 jazz-gradient rounded-full flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                      <p className="text-xs text-amber-200/80">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  onClick={() => setSelectedImage(null)}
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
                
                <div className="glass-effect rounded-lg overflow-hidden">
                  <img  
                    className="w-full h-auto max-h-[70vh] object-contain" 
                    alt={selectedImage.title}
                    src={selectedImage.image}
                  />
                  <div className="p-6">
                    <h2 className="playfair text-2xl font-bold mb-2 jazz-text-gradient">
                      {selectedImage.title}
                    </h2>
                    <p className="text-amber-200/80 leading-relaxed">
                      {selectedImage.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-orange-950/30 rounded-full text-sm text-orange-300 border border-orange-400/20 capitalize">
                        {selectedImage.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Image Modal */}
        <Dialog open={isAddModalOpen} onOpenChange={setAddModalOpen}>
          <DialogContent className="sm:max-w-[425px] bg-stone-900 border-orange-400/30 text-amber-100">
            <DialogHeader>
              <DialogTitle className="jazz-text-gradient text-2xl">Add New Image</DialogTitle>
              <DialogDescription className="text-amber-200/70">
                Enter the details for your new gallery image.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddImage}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right text-amber-200/80">
                    Title
                  </Label>
                  <Input id="title" name="title" value={newImage.title} onChange={handleInputChange} className="col-span-3 bg-stone-800 border-orange-400/50 focus:ring-orange-400" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right text-amber-200/80">
                    Description
                  </Label>
                  <Input id="description" name="description" value={newImage.description} onChange={handleInputChange} className="col-span-3 bg-stone-800 border-orange-400/50 focus:ring-orange-400" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image" className="text-right text-amber-200/80">
                    Image URL
                  </Label>
                  <Input id="image" name="image" value={newImage.image} onChange={handleInputChange} className="col-span-3 bg-stone-800 border-orange-400/50 focus:ring-orange-400" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right text-amber-200/80">
                    Category
                  </Label>
                  <Select onValueChange={handleCategoryChange} defaultValue={newImage.category}>
                    <SelectTrigger className="col-span-3 bg-stone-800 border-orange-400/50 focus:ring-orange-400">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-stone-900 border-orange-400/50 text-amber-100">
                      <SelectItem value="performance" className="focus:bg-orange-400/20">Performance</SelectItem>
                      <SelectItem value="portrait" className="focus:bg-orange-400/20">Portrait</SelectItem>
                      <SelectItem value="album" className="focus:bg-orange-400/20">Album Artwork</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="jazz-gradient">Save Image</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-950/50 to-orange-950/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="playfair text-4xl md:text-5xl font-bold mb-6 jazz-text-gradient">
                Capture Your Event
              </h2>
              <p className="text-lg text-amber-200/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Professional photography and documentation services available for performances, 
                events, and promotional materials. Let's create visual memories that complement the musical experience.
              </p>
              <Button onClick={() => toast({ title: "🚧 Feature not implemented yet!" })} className="jazz-gradient hover:scale-105 transition-transform duration-300 px-8 py-3">
                Discuss Photography Services
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
