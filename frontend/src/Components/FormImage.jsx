import {motion} from 'framer-motion';

export default function FormImage(props) {
  return (
    <motion.div 
      className="formImageContainer"
      initial={{
          backgroundColor: '#f5f8ff'
      }}
      animate={{
          backgroundColor: '#ffffff'
      }}
      transition={{
          duration: 0.5
      }}
      >
      <motion.img 
        className="formImage" 
        src={require('../images/money.jpg').default} 
        alt="money and coins"
        initial={{
          scale: 0.8, 
          opacity: 0, 
          y: 100
      }}
      animate={{
          scale: 1, 
          opacity: 1, 
          y: 0
      }}
      transition={{
          delay: 0.5
      }}
        />
    </motion.div>
  );
}
