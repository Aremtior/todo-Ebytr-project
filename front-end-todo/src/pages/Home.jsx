import Header from '../components/Header';
import NewTask from '../components/NewTask';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <Header title="To do List" />
      <NewTask />
      <TaskList />
    </div>
  );
};

export default Home;
