import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';



const App = ({ state, dispatch, store }) => {
    const ProfileComponent = () => <Profile store={store} />;
    const DialogComponent = () => <DialogsContainer store={store} />;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                 <div className='app-wrapper-content'>
                    <Route path='/profile' render={ProfileComponent} />
                    <Route path='/dialogs' render={DialogComponent} />
                    {/* <Route exact path='/dialogs' component={Dialogs} /> */}
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
