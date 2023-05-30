import React, {useState, useCallback, useEffect } from 'react';
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Button} from 'react-bootstrap';

import { CSSTransition } from 'react-transition-group';
import { DocLink } from 'components'
import { headerStyles } from 'styles'
import MenuBar from './MenuBar';
import Sticky from 'react-sticky-el';

class MainSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSearchOpen: false};

    // This binding is necessary to make `this` work in the callback
    this.checkInputF = this.checkInputF.bind(this);
    this.checkInputB = this.checkInputB.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOff = this.handleClick.bind(this);
    this.state = {isSearchOpen: false};
  }

  checkInputF() {
    var query = document.getElementById('search').value;
        window.find(query,false,false,true);
        
  }

  checkInputB() {
    var query = document.getElementById('search').value;
        window.find(query,false,true,true);
        
  }

  handleClick() {
    this.setState(state => ({
      isSearchOpen: !state.isSearchOpen
    }));
  }



  render() {
    return (
      <>
      <div class="pagesearch">
          <Sticky>
          
          <CSSTransition
              in={!this.state.isSearchOpen}
              timeout={300}
              classNames="alerts"
              unmountOnExit
            >
              <div  class="containInline">
            <input class="searchTag" type="button" onClick={this.handleClick} value="&#x1F50D;"/>
            </div>
            </CSSTransition>
          <CSSTransition
              in={this.state.isSearchOpen}
              timeout={300}
              classNames="alerts"
              unmountOnExit
            >
            
            <div  class="containInline">
            <input class="searchTermMain" type="text" id="search"/>
            <input class="searchButton" type="button" id="submit_formd" onClick={this.checkInputF} value=">" />
            <input class="searchButton" type="button" id="submit_formu" onClick={this.checkInputB} value="<" />
            <input class="searchButton-last" type="button" id="submit_formu" onClick={this.handleClick} value="X" />
            </div>
            </CSSTransition>
            
            
            
          </Sticky>
          </div>
      </>
    )
  }
}

const useMediaQuery = (width) => {

  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Header = ({ menu, allPages }) => {
const isBreakpoint = useMediaQuery(1050)


return (
  <div>

  <header>
  
    <div class="head-rect">
    
    <NextLink href="/">
      <img class="icon-img" src="https://images.prismic.io/xcelerate-help-site/1cee6d66-a4d9-4558-a301-bd0dca48aa57_Xcelerate+Logo_195px+by+50px-01.png" alt="Xcelerate Logo" />
      </NextLink> 
      
      {!isBreakpoint ? 
      <div class="headermenu">
        
      <NextLink href="/">Home</NextLink>
      <NextLink href="/user_manual">User Manual</NextLink>
      <NextLink href="/faq">FAQ's</NextLink>
      <NextLink href="/deployment_notes">Deployment Notes</NextLink>
      <NextLink href="/contact_us">Contact Us</NextLink>
      </div>
      :
      null}
      <img class="underline-img" src="https://images.prismic.io/xcelerate-help-site/4c9a5ccb-aaba-41d7-8294-a685ce48f89b_HeaderLine.png" />
      <MainSearch />
    <div>
    
    
    <MenuBar menu={menu} allPages={allPages}/>

    </div>
    </div>
    
    <style jsx global>{ headerStyles }</style>
  </header>
  </div>
)}

export default Header
