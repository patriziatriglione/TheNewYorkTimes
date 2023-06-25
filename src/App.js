import React from 'react';
import './App.css';
import Header from "./pages/header/Header";
import Home from './pages/home/Home';
import Login from "./pages/Login";
import Error from "./pages/Error";
import SearchResults from './pages/category/SearchResults';
import ArticleCategory from './pages/category/articleCategory';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Footer from "./pages/footer/Footer";


function App() {
  const Layout = () => {

      return (
        <>
  <Header />
  <Outlet />
  <Footer />
  </>
      );
    }
    
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
       <Route path="/:section" element={<ArticleCategory />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  
    );
}

export default App;
