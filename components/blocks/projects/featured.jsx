import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { m, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "../../utils/icon.util";
import css from "../../../styles/sections/projects/featured.module.scss";

export default function FeaturedProject({ content }, index) {
  const { project, descriptionTitle, description, stack, images } = content;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, images.length]);

  const current = images[currentIndex];

  const swipeVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <m.section
      key={index}
      className={css.project}
      //framer-motion
      ref={ref}
      variants={container}
      initial={["rest", "hidden"]}
      whileHover="hover"
      animate={controls}
    >
      <div className={css.details}>
        <span className={css.icon}>
          <Icon icon={["fat", "palette"]} />
        </span>
        <div className={css.projectHeader}>
          <div className={css.header}>
            <h3>{project}</h3>
          </div>
          <p>
            <strong>{descriptionTitle}</strong> {description}
          </p>
        </div>
      </div>

      <div
        className={css.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered((prev) => !prev)}
      >
        <span className={css.imageAnimationContainer}>
          <AnimatePresence mode="wait">
            <m.div
              key={`sketch-${images[currentIndex].key}-${currentIndex}`} // Unique key for each transition
              variants={swipeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={current.url}
                alt="Charcoal Portrait"
                height={current.h}
                width={current.w}
                priority
              />
            </m.div>
          </AnimatePresence>
        </span>
      </div>
    </m.section>
  );
}

const container = {
  hidden: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.0625,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.25,
    },
  },
  rest: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
  hover: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0,
    },
  },
};

const item = {
  hidden: {
    y: 75,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.35,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const hoverLeft = {
  rest: {
    x: 0,
  },
  hover: {
    x: -20,
  },
};

const hoverRight = {
  rest: {
    x: 0,
  },
  hover: {
    x: 20,
  },
};
