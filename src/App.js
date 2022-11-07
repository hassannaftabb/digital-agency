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
import AdminDashboard from './admin/AdminHome';
import AdminLogin from './admin/AdminLogin';
import Messages from './admin/Messages';
import MyOrders from './pages/Orders/MyOrders';
import Orders from './admin/Orders';

function App() {
  const user = JSON.parse(localStorage.getItem('da-$user_obj'));
  const admin = JSON.parse(localStorage.getItem('da-$admin_obj'));
  onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser?.uid === 'xwsgWWZ7heMECB3d00xNHfy0Obx2') {
      const myDoc = doc(db, 'users', currentUser?.uid);
      await getDoc(myDoc).then((r) => {
        let name = r.data().name;
        localStorage.setItem(
          'da-$admin_obj',
          JSON.stringify({ ...currentUser, name })
        );
      });
    } else {
      const myDoc = doc(db, 'users', currentUser?.uid);
      await getDoc(myDoc).then((r) => {
        let name = r.data().name;
        localStorage.setItem(
          'da-$user_obj',
          JSON.stringify({ ...currentUser, name })
        );
      });
    }
  });
  return (
    <BrowserRouter>
      {!admin && <Navbar />}
      <Routes>
        {/* Index  */}
        <Route path='/' element={<Home />} />
        {/* Auth  */}
        <Route path='/sign-in' element={<LogIn />} />
        <Route path='/sign-up' element={<SingUp />} />
        {/* Services */}
        <Route path='/services' element={<MainServicesPage />} />
        <Route
          path='/services/web-development'
          element={<WebsiteDevelopment />}
        />
        <Route
          path='/services/search-engine-optimization'
          element={<SearchEngineOptimization />}
        />
        <Route path='/services/pay-per-click' element={<PayPerClick />} />
        <Route
          path='/services/mobile-app-development'
          element={<MobileApplicationDevelopment />}
        />
        <Route path='/services/content-writing' element={<ContentWriting />} />
        <Route
          path='/services/amazon-virtual-assisstance'
          element={<AmazonVirtualAssisstance />}
        />
        <Route
          path='/services/reputation-management'
          element={<ReputationManagement />}
        />
        <Route
          path='/services/social-media-marketing'
          element={<SocialMediaMarketing />}
        />
        <Route path='/my-orders' element={<MyOrders />} />
        {/* Chat */}
        <Route path='/chat' element={<Chat />} />
        {/* Admin  */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/messages' element={<Messages />} />
        <Route path='/admin/orders' element={<Orders />} />
      </Routes>
      {user && (
        <>
          <ChatButtonCard />
        </>
      )}
      {!admin && <Footer />}
    </BrowserRouter>
  );
}

export default App;
