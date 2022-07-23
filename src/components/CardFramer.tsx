import { motion } from 'framer-motion';
import { useState } from 'react';
import './CardFramer.scss';

type props = {
  title: string;
  description?: string | undefined;
  item?: Array<string> | undefined;
  url?: Array<Array<string>> | undefined;
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
          {props.url != null && (
            <ul>
              {props.url.map((url) => (
                <li key={url[0]}>
                  <a href={url[1]}>{url[0]}</a>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default CardFramer;
