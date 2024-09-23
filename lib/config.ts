export const navRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Our Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
] as const;

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "How long are the surf lessons?",
    answer:
      "Each lesson lasts about 2 hours, giving you plenty of time to learn and practice.",
    value: "item-1",
  },
  {
    question: "Do I need to bring my own equipment?",
    answer:
      "Nope! We provide all the equipment you need, including boards and wetsuits.",
    value: "item-2",
  },
  {
    question: "What if I’ve never surfed before?",
    answer:
      "That’s what we’re here for! Our beginner lessons are designed to teach you everything you need to get started.",
    value: "item-3",
  },
  {
    question: "Can I rent a surfboard even if I don’t take lessons?",
    answer:
      "Absolutely! You can rent a board anytime, even if you’re just here to enjoy the waves on your own.",
    value: "item-4",
  },
  {
    question: "What’s the best time to surf in Bali?",
    answer:
      "Bali has waves year-round, but the best surf conditions are typically from April to October.",
    value: "item-5",
  },
];

export const heroCopy = {
  message: `
    Welcome to King Surf Bali Surf School. Where the thrill of the waves meets expert guidance! 
    🏄 Immerse yourself in the art of surfing with our certified instructors amidst the stunning backdrop of Bali’s beaches. 
    Whether you’re a beginner catching your first wave or an experienced surfer seeking advanced techniques, 
    our personalized lessons cater to all skill levels. Join us for an unforgettable surf experience, blending passion, 
    professionalism, and the pure joy of riding Bali’s iconic waves. Let the adventure begin!
    `,
};

export const reviews = [
  {
    name: "Varun J.",
    message:
      "Kingsurfbali is for sure the best surfing in Bali, great guys, good for a surf, chat and great vibes! Good for beginners and more experienced. Had a great experience here. Great spot to watch m sunset as well after surfing.",
    date: "June 2024",
  },
  {
    name: "Adam Cannavo",
    message:
      "Great surf lesson. First-time beginner was up and standing in the first lesson. Had a great time after, too. Good vibes and great times, with occasional live music and Aussie classics.",
    date: "July 2024",
  },
  {
    name: "Nicolas Courtine",
    message:
      "Today was Awesome! The owner is an angel, cheaper price of the whole beach came at 9:00 left at 19:00 because everything was so great, nice board, all the guys there are taking care of everything, giving a place with shadow, invite you to join for an after surf musique session. We were overwelmed by how nice these guys were really. Thanks a lot, we are coming back tomorrow and the next day and the next day… and actually coming to sleep on the beach waiting for you all !! I recommande this place for everyone.",
    date: "May 2024",
  },
  {
    name: "Hana Drahokoupilová",
    message:
      "We borrowed a surf from Presley almost every day and we had also one lesson with him, which helped us a lot. 100 % recommendation. It was fun with guys on the beach!",
    date: "April 2024",
  },
  {
    name: "Liza Pichugina",
    message:
      "Thank you very much!We really liked the lesson, it is explained very clearly and easily!!🙏🏼 We will definitely come back again",
    date: "June 2024",
  },
  {
    name: "Kimberly Naomi Tödt",
    message:
      "It’s very good here, Nice Teachers, they teach very good, so I learned to surf fastly. They also make nice music, play guitar and sing.",
    date: "July 2024",
  },
];
