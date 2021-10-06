
import './App.css';

//Component import
import Messenger from './component/Messenger';
import AccontProvider from './context/AccontProvider';
import TemplateProvider from './theme/TemplateProvider';
import UserProvider from './context/UserProvider';


function App() {
  return (
    <TemplateProvider>
      <UserProvider>

        <AccontProvider>
          <Messenger />
        </AccontProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
