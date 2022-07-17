import React, {useContext} from 'react';

import { NavigationDots, SocialMedia } from '../components';
import { ThemeContext } from '../context/ThemeProvider';

const AppWrap = (Component, idName, className) => function HOC() {
  const {theme}= useContext(ThemeContext);
  const classTheme = (theme === 'dark') ? ((className === 'app__whitebg') ? 'bg2__dark' : 'bg__dark') : '';
  return (
    <div id={idName} className={`app__container ${className}${' '}${classTheme} `}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
            <Component />
            
            <div className="copyright">
                <p className="p-text">@2022 HUYPHAM</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap