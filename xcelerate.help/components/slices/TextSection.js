import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'
import { textSectionStyles } from 'styles'
import { useRouter } from 'next/router'

const TextSection = ({ slice }) => {
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
      
      
     <ol class="start" />
    <section className={`content-section ${sectionClass}`}>
    {slice.primary.rich_text.map((item, index, elements) => (
    
      
      item.type == "embed" ?
      <div class="tsvideoWrapper">
      <RichText
        render={[item]}
        linkResolver={linkResolver}
        serializeHyperlink={customLink}
      />
      </div>
      :
      item.type != "o-list-item" && index > 0 && elements[index - 1].type == "o-list-item" ?
      <>
      <ol class="start" />
      <RichText
      render={[item]}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    /></>

      :
      <RichText
      render={[item]}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    />

      
    ))}
      {}
      
      <style jsx global>{textSectionStyles}</style>
    </section>
    </div>
  )
}

export default TextSection
