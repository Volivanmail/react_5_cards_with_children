import { ICard } from '../models';

export function Card (card: ICard) {


    return (
        <div className="card card-bottom">
            {card.children}
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">{card.btnText}</a>
            </div>
        </div>
    );
}