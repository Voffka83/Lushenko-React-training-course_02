import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Sidebar from './Main/Sidebar'


const site = {
	site_name: "react test",
	site_title: "my first site with react",
	
	nav: [
		{ "link": "nav1", "text": "my link" },
		{ "link": "nav2", "text": "my link 2" },
		{ "link": "nav3", "text": "my link 3" },
	]
}

function App() {
  return (
	  <div>
		  <Header />
		  <Main/>
		  <Sidebar />
		  <Footer />
	 </div>
  );
}
// 
export default App;
