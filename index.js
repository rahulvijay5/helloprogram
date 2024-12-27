// Store our sentence collections organized by word count
const sentenceBank = {
    1: [
      "Run!", "Think.", "Listen.", "Create.", "Explore.",
      "Dream.", "Learn.", "Grow.", "Build.", "Achieve."
    ],
    2: [
      "Stay focused.", "Dream big.", "Keep learning.", "Be kind.", "Work hard.",
      "Stay strong.", "Think positive.", "Move forward.", "Create beauty.", "Express yourself."
    ],
    3: [
      "Never give up.", "Follow your dreams.", "Make it happen.", "Keep moving forward.", "Learn from mistakes.",
      "Embrace the journey.", "Create new possibilities.", "Share your knowledge.", "Build your future.", "Express your creativity."
    ],
    4: [
      "Take one step forward.", "Make your dreams reality.", "Learn something new today.", "Create your own path.", "Build a better tomorrow.",
      "Share knowledge with others.", "Keep pushing your limits.", "Find joy in learning.", "Express yourself with confidence.", "Grow through what happens."
    ],
    5: [
      "Believe in yourself and take action.", "Create opportunities and pursue your dreams.", 
      "Learn every day and stay consistent.", "Find joy in everything you do.", 
      "Build relationships that help you grow.", "Work hard, dream big, stay focused.", 
      "Express your creativity and inspire others.", "Push boundaries and achieve the impossible.", 
      "Discover your potential through challenging moments.", "Stay determined and reach for greatness."
    ],
    6: [
      "Work hard and make your dreams real.", "Embrace the challenges and grow every day.", 
      "Create a path that inspires future generations.", "Learn from failures and build your success.", 
      "Keep moving forward despite setbacks and doubts.", "Be bold, creative, and follow your passion.", 
      "Find joy in small moments of progress.", "Explore new opportunities and redefine your limits.", 
      "Share wisdom, express kindness, and inspire greatness.", "Turn your vision into an achievable reality."
    ],
    7: [
      "Dream big, work hard, and stay focused.", "Learn every day and strive for excellence.", 
      "Take small steps to achieve great things.", "Create opportunities where others see challenges only.", 
      "Push beyond your comfort zone and grow.", "Build a future fueled by passion and dedication.", 
      "Discover the beauty in the process of learning.", "Keep exploring new paths that inspire growth.", 
      "Express yourself through actions that speak louder.", "Stay resilient and adapt to every challenge."
    ],
    8: [
      "Never stop exploring the endless possibilities of life.", "Create a legacy that inspires future generations profoundly.", 
      "Embrace every challenge as a chance to grow.", "Learn continuously to shape the person you become.", 
      "Share your knowledge and empower those around you.", "Push your boundaries and achieve the impossible dream.", 
      "Take control of your journey and lead confidently.", "Express your creativity through bold and inspiring actions.", 
      "Work relentlessly to make your dreams a reality.", "Find happiness in the process of achieving greatness."
    ],
    9: [
      "The path to success requires consistent effort and perseverance.", "Build a life of meaning through courage and determination.", 
      "Learn from every experience, even the challenging ones.", "Create a vision and take action to achieve it.", 
      "Find strength within yourself to overcome all obstacles.", "Embrace opportunities for growth and never stop improving.", 
      "Share your journey and inspire others to do more.", "Stay committed to your goals and believe in yourself.", 
      "Take bold steps toward the future you envision.", "Discover joy in striving for excellence every single day."
    ],
    10: [
      "Every journey begins with a single step forward toward your ultimate destination.",
      "Success comes to those who work hard and never give up on dreams.",
      "The best way to predict the future is to create it yourself today.",
      "Learning is a lifelong journey that never ends, always embracing new knowledge daily.",
      "Your potential is unlimited when you believe in yourself and take action now.",
      "Great achievements require hard work, perseverance, and relentless dedication to goals.",
      "The seeds of success are planted through continuous learning and improvement.",
      "Take responsibility for your dreams and create a meaningful life today.",
      "Inspiration comes from those who turn challenges into remarkable opportunities.",
      "The power to change the world begins with small intentional actions."
    ],
    30: [
      "The journey of personal growth and development is a continuous process that requires dedication, patience, and unwavering commitment to learning new skills while facing challenges head-on with determination and resilience.",
      "Success is not merely measured by achievements but by the countless small steps taken each day, the lessons learned from failures, and the persistent drive to become better than yesterday.",
      "In the pursuit of excellence, remember that every expert was once a beginner who chose to embrace challenges, learn from mistakes, and continuously push beyond their comfort zone.",
      "Growth requires stepping outside your comfort zone, making sacrifices, and staying consistent with your efforts, even when the results aren’t immediately visible or gratifying.",
      "The path to mastery is paved with discipline, curiosity, and the willingness to dedicate time and energy toward learning, practicing, and honing your craft over time.",
      "Embrace failures as stepping stones to success, and let each setback strengthen your resolve to keep striving for improvement, excellence, and achieving your ultimate goals.",
      "True leadership is not about commanding others but about inspiring them through actions, empathy, and the pursuit of a shared vision that benefits everyone.",
      "Every challenge in life is an opportunity to grow stronger, develop resilience, and build the mental toughness necessary to tackle future obstacles with confidence.",
      "Success is a journey that requires persistence, continuous learning, and an unyielding belief in your ability to overcome every barrier that stands in your way.",
      "The foundation of any great achievement lies in the small, consistent actions taken daily to improve, adapt, and persevere despite all odds."
    ]
  };
  
  
  /**
   * Combines sentences to reach the desired word count
   * @param {number} wordCount - Desired number of words
   * @returns {string} Combined sentences matching the requested word count
   */
  function generateMeaningfulText(wordCount) {
    if(wordCount == null){
        wordCount = 10
    }
    
    if (wordCount <= 0) {
      throw new Error('Word count must be greater than 0');
    }
  
    let result = [];
    let remainingWords = wordCount;
  
    while (remainingWords > 0) {
      // Find the largest possible sentence that fits in remaining words
      let bestFit = findBestFitSentence(remainingWords);
      
      if (bestFit === null) {
        break; // Unable to find a suitable sentence
      }
  
      // Get a random sentence of the chosen length
      const sentences = sentenceBank[bestFit];
      const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
      
      result.push(randomSentence);
      remainingWords -= bestFit;
    }
  
    return result.join(' ');
  }
  
  /**
   * Finds the largest sentence length that fits within the remaining word count
   * @param {number} remainingWords - Number of words still needed
   * @returns {number|null} Best fitting sentence length or null if none found
   */
  function findBestFitSentence(remainingWords) {
    const availableLengths = Object.keys(sentenceBank)
      .map(Number)
      .sort((a, b) => b - a); // Sort descending
  
    for (const length of availableLengths) {
      if (length <= remainingWords) {
        return length;
      }
    }
    
    return null;
  }
  
  // Export the main function and make it available as a named function
  module.exports = generateMeaningfulText;
  module.exports.random = generateMeaningfulText;