import './App.css';
import { Navbar, Exchanges, HomePage, CryptoDetails, Cryptocurrencies,News } from './components'; // this is the good practice to follow 
import { Layout, Space, Typography } from 'antd';
import { Route , Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/exchanges' element={<Exchanges/>} />
              <Route path='/news' element={<News/>} />
              <Route path='/cryptodetails' element={<CryptoDetails/>} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} />
            </Routes>
          </div>
        </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{color: 'white', textAlign: "center"}}>
          Cryptoverse <br></br>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/">Exchanges</Link>
          <Link to="/">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
