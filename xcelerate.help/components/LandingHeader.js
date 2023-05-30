import React, {useState, useCallback, useEffect } from 'react';
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { Button} from 'react-bootstrap';

import { CSSTransition } from 'react-transition-group';
import { DocLink } from 'components'
import { headerStyles } from 'styles'
import MenuBar from './MenuBar';
import Sticky from 'react-sticky-el';

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

const sendReturn = () => {
  //console.log(global.top)
  //this.postMessage('test','*');
}

const LandingHeader = () => {
  const isBreakpoint = useMediaQuery(1050)
return (
  <div>

  <header>
    
    <div class="head-rect">
    <a href="https://xcelerate.ioh.co.za/" target="_parent">
      <img class="qsure-img" src="https://images.prismic.io/xcelerate-help-site/f94e301b-0349-43a6-8654-089cc74d058d_Qsure_Logo-01+%282%29.png" alt="Xcelerate Logo" />
      </a>
      {!isBreakpoint ? 
      <div class="headermenu">
      <NextLink href="/">Home</NextLink>
      <NextLink href="/user_manual">User Manual</NextLink>
      <NextLink href="/faq">FAQ's</NextLink>
      <NextLink href="/deployment_notes">Deployment Notes</NextLink>
      <NextLink href="/contact_us">Contact Us</NextLink>
      
      </div>
    :null}
    <div>

    </div>
    </div>
    
    <style jsx global>{ headerStyles }</style>
  </header>
  </div>
)}

export default LandingHeader
