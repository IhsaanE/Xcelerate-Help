import React, {useEffect} from "react";
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'
import { videoStyles } from 'styles'
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group';

const Video = ({ slice }) => {
  const sectionClass =
    slice.slice_label ?
    `text-section-${slice.slice_label}` :
    'text-section-1col'

  return (
    <div>
      
    <section className={`content-section ${sectionClass}`}>
    <div class="videoWrapper">
      <div dangerouslySetInnerHTML={{__html: slice.primary.video.html}}></div>
    </div>
      
      <RichText
        //render={slice.items[0].question[0].text}
        linkResolver={linkResolver}
        serializeHyperlink={customLink}
      />
      <style jsx global>{videoStyles}</style>
    </section>
    </div>
  )
}

export default Video
