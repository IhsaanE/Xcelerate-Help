import React from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'
import { deploymentNotesStyles } from 'styles'
import { useRouter } from 'next/router'
import { DocLink } from 'components'
import { CSSTransition } from 'react-transition-group';

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
    <div >
      
      <input class="searchTerm" type="text" placeholder="Search.." onChange={event => this.setTitle(event.target.value)} />
      {this.props.slice.items.map((dn) => (
        <div >
        <CSSTransition
        in={this.state.searchText.test(dn.deployment_note[0].text.toUpperCase() + " " + dn.deployment_date.toUpperCase() + " " + dn.keywords.reduce((acc, curr) => `${acc}${curr.text}|` ,'').toUpperCase())}
        timeout={300}
        classNames="deplist"
        unmountOnExit

      >
        
      <DocLink link={dn.file}>
            <h3>{dn.deployment_note[0].text + " (" + dn.deployment_date +")"}</h3>
          </DocLink> 
          
      </CSSTransition>
      
         
                   
        
        </div>
      ))}
     
    </div>
    )
  }
}
 
const DeploymentNotes = ({ slice }) => {
  const sectionClass =
    slice.slice_label ?
    `text-section-${slice.slice_label}` :
    'text-section-1col'
    
    const router = useRouter()
    //const fs = require('fs')
  

    //let data = "Learning how to write in a file."
      
    /*fs.writeFile('Output.txt', data, (err) => { 
          
        // In case of a error throw err. 
        if (err) throw err; 
    })*/
  return (
  <div>
    <section className={`content-section ${sectionClass}`}>
    
    <h2>Deployment Notes</h2>
    <Search slice={slice} />

      <style jsx global>{deploymentNotesStyles}</style>
    </section>
  </div>
  )
}



export default DeploymentNotes
