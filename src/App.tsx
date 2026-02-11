import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Heart Pattern Background */}
      <div className="absolute inset-0 bg-pink-50">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300 fill-pink-200"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Envelope and Letter Container */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="cursor-pointer"
              onClick={handleEnvelopeClick}
            >
              <div className="relative w-80 h-56">
                {/* Envelope Body */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-200 rounded-lg shadow-2xl border-2 border-red-200" />
                
                {/* Envelope Flap */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-red-200 to-pink-300 origin-top border-2 border-red-200"
                  style={{
                    clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                  }}
                  animate={{
                    rotateX: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Heart Seal */}
                <motion.div
                  className="absolute top-16 left-1/2 -translate-x-1/2 z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Heart className="w-12 h-12 text-red-500 fill-red-500 drop-shadow-lg" />
                </motion.div>

                {/* Click Hint */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="text-pink-600 font-medium">Click to open</p>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full max-w-2xl flex flex-col items-center gap-6 relative"
            >
              {/* Letter Paper */}
              <motion.div
                className="bg-gradient-to-br from-pink-50 to-white rounded-lg shadow-2xl p-8 md:p-12 border-4 border-pink-200 relative w-full"
                style={{ rotate: '-2deg' }}
              >
                {/* Decorative Hearts */}
                <div className="absolute top-4 right-4">
                  <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                </div>

                {/* Letter Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h1 className="text-center mb-6">
                    <Heart className="w-12 h-12 text-red-500 fill-red-500 mx-auto mb-2" />
                  </h1>
                  
                  <div className="space-y-4 text-gray-700 mb-8">
                    <p className="text-center italic">Dear Mikaela Calaunan Pablo ?!,</p>
                    
                    <p>
                      I am very happy to be with you C: . From our first date, to our many moments together, I am very grateful that we get to experience all those things together. Even if we aren't always happy or in terms, i always patient with you;
                      I hope that you do not disregard my feelings as I am very thankful of our time together. These bad times will pass and will always get better.
                    </p>
                    
                    <p>
                      As Valentine's Day approaches, This is another time we could celebrate it together due to us having not able to celebrate it last time. 
                    </p>
                    
                    <p className="text-center">
                      So, I have just one question for you...
                    </p>
                  </div>

                  <p className="text-center mt-6 text-gray-500 italic text-sm">
                    With all my love ❤️
                  </p>
                </motion.div>
              </motion.div>

              {/* Stamp Card - Detached */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-2xl border-2 border-red-300 w-full max-w-md"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ rotate: '3deg' }}
              >
                <h2 className="text-center text-2xl font-bold text-red-600 mb-6">
                  Will you be my Valentine?
                </h2>

                {!selectedAnswer ? (
                  <div className="flex gap-4 justify-center flex-wrap">
                    <motion.button
                      onClick={() => handleAnswer('Yes!')}
                      className="px-8 py-3 bg-red-500 text-white rounded-full font-bold shadow-lg hover:bg-red-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Yes!
                    </motion.button>
                    <motion.button
                      onClick={() => handleAnswer('Also Yes!')}
                      className="px-8 py-3 bg-pink-500 text-white rounded-full font-bold shadow-lg hover:bg-pink-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Yes!
                    </motion.button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      <Heart className="w-16 h-16 text-red-500 fill-red-500 mx-auto mb-3" />
                    </motion.div>
                    <p className="text-2xl font-bold text-red-600">
                      I knew you'd say yes! 💕
                    </p>
                    <p className="text-gray-600 mt-2">
                      Happy Valentine's Day!
                    </p>
                    
                    {/* Special Video */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="mt-4 rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto"
                    >
                      <video 
                        src="/gifs/glorp and gog.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-32 object-cover"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Celebration Gifs in Side Empty Spaces */}
      {selectedAnswer && (
        <>
          {/* Left Side - Top */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            style={{ position: 'fixed', top: '15vh', left: '3vw', zIndex: 50 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-pink-300 hover:scale-110 transition-transform">
              <img 
                src="/gifs/capoo bird.gif" 
                alt="Capoo Bird" 
                className="w-24 h-24 object-cover"
              />
            </div>
          </motion.div>
          
          {/* Right Side - Top */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            style={{ position: 'fixed', top: '20vh', right: '3vw', zIndex: 50 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-red-300 hover:scale-110 transition-transform">
              <img 
                src="/gifs/capoo-bugcat-capoo.gif" 
                alt="Capoo Bug Cat" 
                className="w-28 h-28 object-cover"
              />
            </div>
          </motion.div>
          
          {/* Left Side - Bottom */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            style={{ position: 'fixed', bottom: '15vh', left: '2vw', zIndex: 50 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-purple-300 hover:scale-110 transition-transform">
              <img 
                src="/gifs/glorp-booty-shake (1).gif" 
                alt="Glorp Booty Shake" 
                className="w-32 h-24 object-cover"
              />
            </div>
          </motion.div>
          
          {/* Bottom Right Corner */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            style={{ position: 'fixed', bottom: '20vh', right: '3vw', zIndex: 50 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-pink-400 hover:scale-110 transition-transform">
              <img 
                src="/gifs/meowl-heart.gif" 
                alt="Meowl Heart" 
                className="w-24 h-24 object-cover"
              />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}