import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ChannelBotLinkerTos from './Pages/Bots/channelbotlinker';
import NotImplemented from './Pages/notimplemented';

const TermsOfServicePages = [
    
    { path: '/ChannelBotLinker', component: <ChannelBotLinkerTos/>, name: 'ChannelBotLinker' },
    { path: '/Juky', component: <NotImplemented/>, name: 'Juky' },
    { path: '/Rolebot', component: <NotImplemented/>, name: 'Rolebot' },
    { path: '/AutoChat', component: <NotImplemented/>, name: 'AutoChat' },
    { path: '/BestKeystone', component: <NotImplemented/>, name: 'BestKeystone' },
    { path: '/RoleButtons', component: <NotImplemented/>, name: 'RoleButtons' },
    { path: '/PrivateRoomBot', component: <NotImplemented/>, name: 'PrivateRoomBot' },
    { path: '/WarBot', component: <NotImplemented/>, name: 'WarBot' },
    { path: '/BotMonitor', component: <NotImplemented/>, name: 'BotMonitor' },

]
export const AppPages = [
    ...TermsOfServicePages
]

function AppRouter() {

    const renderPages = () => {
        

        return AppPages.map((x,i)=> {
            if( i===0 ) {
                return (
                    <React.Fragment key={i}>
                        <Route key={i - 1} path={'/'} element={x.component} />
                        <Route key={i} path={x.path} element={x.component} />
                    </React.Fragment>
                )
            }
            return <Route key={i} path={x.path} element={x.component} />
        })
    }

  return (
    <Router>
        <Routes>
            {renderPages()}
        </Routes>
    </Router>
  )
}

export default AppRouter