import { Lightbulb } from 'lucide-react';
import './TipCard.css';

interface TipCardProps {
  title: string;
  content: string;
}

const TipCard = ({ title, content }: TipCardProps) => {
  return (
    <div className="tip-card fade-in-up">
      <div className="tip-header">
        <Lightbulb size={24} className="tip-icon" />
        <h3>DICAS</h3>
      </div>
      <div className="tip-content">
        <h4 className="tip-title">{title}</h4>
        <p className="tip-text">{content}</p>
      </div>
    </div>
  );
};

export default TipCard;
