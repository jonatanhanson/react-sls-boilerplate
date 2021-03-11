import '../App.css';

const Card = ({ children }) =>
  <div className="c-card --default">
    <div className="c-card__body">
      <p className="c-typography c-typography__variant--p">
        {children}
      </p>
    </div>
  </div>;

export default Card;
