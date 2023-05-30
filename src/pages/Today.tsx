import './Today.scss'

interface TodayProps {}

const Today: React.FC<TodayProps> = () => {
  return (
    <div className="main-view">
      <div className="today">
        <p>Today</p>
      </div>
    </div>
  );
};

export default Today;
