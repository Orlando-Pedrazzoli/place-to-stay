import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Login from './components/user/Login';
import Notification from './components/user/Notification';

function App() {
  return (
    <>
      <Loading />
      <Notification />
      <Login />
      <Navbar />
    </>
  );
}

export default App;
