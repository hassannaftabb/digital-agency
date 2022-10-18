import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/Auth/LogIn';
import SingUp from './pages/Auth/SingUp';
import Home from './pages/Home/Home';
import MainServicesPage from './pages/Services/Main';
import WebsiteDevelopment from './pages/Services/WebsiteDevelopment';
import AmazonVirtualAssisstance from './pages/Services/AmazonVirtualAssisstance';
import ContentWriting from './pages/Services/ContentWriting';
import MobileApplicationDevelopment from './pages/Services/MobileApplicationDevelopment';
import PayPerClick from './pages/Services/PayPerClick';
import ReputationManagement from './pages/Services/ReputationManagement';
import SearchEngineOptimization from './pages/Services/SearchEngineOptimization';
import SocialMediaMarketing from './pages/Services/SocialMediaMarketing';
import Footer from './components/Footer/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import ChatButtonCard from './components/UI/ChatButtonCard';
import Chat from './pages/Chat/Chat';

function App() {
  onAuthStateChanged(auth, async (currentUser) => {
    const myDoc = doc(db, 'users', currentUser?.uid);
    await getDoc(myDoc).then((r) => {
      let name = r.data().name;
      localStorage.setItem(
        'da-$user_obj',
        JSON.stringify({ ...currentUser, name })
      );
    });
  });
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Index  */}
        <Route path="/" element={<Home />} />
        {/* Auth  */}
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SingUp />} />
        {/* Services */}
        <Route path="/services" element={<MainServicesPage />} />
        <Route
          path="/services/web-development"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/search-engine-optimization"
          element={<SearchEngineOptimization />}
        />
        <Route path="/services/pay-per-click" element={<PayPerClick />} />
        <Route
          path="/services/mobile-app-development"
          element={<MobileApplicationDevelopment />}
        />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route
          path="/services/amazon-virtual-assisstance"
          element={<AmazonVirtualAssisstance />}
        />
        <Route
          path="/services/reputation-management"
          element={<ReputationManagement />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        {/* Chat */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <ChatButtonCard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
