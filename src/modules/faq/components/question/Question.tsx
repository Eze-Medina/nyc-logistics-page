import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import style from './question.module.css'

interface Props {
  question: string;
  answer: string;
}

export const Question = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.question_container}>
      <div className={style.box}>
        <div className={style.box_content} onClick={() => setOpen(!open)}>
          <p>{question}</p>
          <ChevronDown />
        </div>
        <div className={`${style.content} ${open ? style.open : ""}`}>
          <p style={{ color: 'rgb(158, 157, 157)' }}>{answer}</p>
        </div>
      </div>
    </div>
  );
};