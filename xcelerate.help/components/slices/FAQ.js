import React, {useState} from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'
import { faqStyles } from 'styles'
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
        <div class="headingdiv">
      
      <label class="togglelabel" onClick={this.handleClick}>
        {this.state.isToggleOn ? '–'  : '+'}
      </label>
      
      <h3><RichText render={this.props.qa.question}/></h3>
         <CSSTransition
              in={this.state.isToggleOn}
              timeout={300}
              classNames="ddlist"
              unmountOnExit

            >
              <div class="ansdiv">
              <ol class="start" />
        <RichText render={this.props.qa.answer}/>    
              </div>
        </CSSTransition>   
    </div>
    )
  } 
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: new RegExp("")};
    this.setTitle = this.setTitle.bind(this);
    // This binding is necessary to make `this` work in the callback
    
  }
  setTitle(val){
      this.setState(state => ({
        searchText: new RegExp("(?=.*?" + val.toUpperCase().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/ /g,")(?=.*?") + ")")
        
      }));
  }

  render() {
    return (
    <div class="headingdiv">
      
      <input class="searchTerm" type="text" placeholder="Search.." onChange={event => this.setTitle(event.target.value)} />
      {this.props.slice.items.map((qa) => (
        <>
        
        
        <CSSTransition
        in={this.state.searchText.test(qa.question[0].text.toUpperCase() + " " + qa.answer.reduce((acc, curr) => `${acc}${curr.text}|` ,'').toUpperCase())}
        timeout={300}
        classNames="faqlist"
        unmountOnExit

      >
        <div class="faqdiv">
        <Toggle qa={qa}/>
        </div>
        </CSSTransition>
        
        
        </>
      ))}
     
    </div>
    )
  } 
}



const FAQ = ({ slice }) => {
  const sectionClass =
    slice.slice_label ?
    `text-section-${slice.slice_label}` :
    'text-section-1col'
    
  return (
    <div>
      
      
     
    <section className={`content-section ${sectionClass}`}>
      {/*slice.items[0].question[0].text*/}
      <h2>Frequently asked questions</h2>
      <Search slice={slice}/>
      <style jsx global>{faqStyles}</style>
    </section>
    </div>
  )
}

export default FAQ
