import { ICard } from '../models';

interface CardProps {
    card: ICard;
    children: React.Node;
}

export default function Card ({ card, children }: CardProps) {
    return (
        <div className="card card-bottom">
            {children}
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">{card.btnText}</a>
            </div>
        </div>
    );
}