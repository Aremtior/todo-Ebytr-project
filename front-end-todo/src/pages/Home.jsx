
import Header from '../components/Header';
import NewTask from '../components/NewTask';

const Home = () => {
  return (
    <div>
      <Header title='To do List' />
      <NewTask />
    </div>
  );
}

export default Home;
