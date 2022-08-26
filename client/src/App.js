import logo from './logo.svg';
import './App.css';
// import Home from './pages/home';
import Sidebar from './pages/sidebar/sidebar';
import { Route, Routes,BrowserRouter  } from 'react-router-dom';
// import JavaScript from './pages/javascript/javaScript';
import Weather from './pages/weather/Weather';
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
 
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
<BrowserRouter>
<Sidebar/>
    <Routes>

      <Route path="/" element={<Weather />} />
      <Route path="/home" element={<Weather />} />
      {/* <Route path="/JavaScript" element={<JavaScript />} /> */}
    </Routes>
  </BrowserRouter>
</QueryClientProvider>
    // <div className="App">
    // <label for="browser">Choose your browser from the list:</label>
    // <input list="browsers" name="browser" id="browser"/>

    // <datalist id="browsers">
    //   <option value="Edge"/>
    //   <option value="Firefox"/>
    //   <option value="Chrome"/>
    //   <option value="Opera"/>
    //   <option value="Safari"/>
    // </datalist>
    // </div>
  );
}

export default App;
