import { motion } from 'framer-motion';
import { useState } from 'react';

type props = {
  title: string;
  description?: string | undefined;
  item?: Array<string> | undefined;
};

function CardFramer(props: props) {
  const [cardOpen, setCardOpen] = useState(false);
  const toggleCard = () => {
    setCardOpen(!cardOpen);
  };
  return (
    <motion.div
      transition={{ layout: { duration: 0.5 } }}
      layout
      className='card'
      onClick={toggleCard}
    >
      <motion.h2 layout='position'>{props.title}</motion.h2>
      {cardOpen && (
        <motion.div>
          {props.description != null && <p>{props.description}</p>}
          {props.item != null && (
            <ul>
              {props.item?.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default CardFramer;
