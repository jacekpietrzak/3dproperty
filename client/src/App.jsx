import Home from './pages/Home';
import Customizer from './pages/Customizer';

function App() {
  return (
    <main className='app transition-all ease-in'>
      <Customizer />
      <Home />
      {/* <FlatViewer /> */}
    </main>
  );
}

export default App;
