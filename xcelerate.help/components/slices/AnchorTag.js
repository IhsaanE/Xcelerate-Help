import React from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'prismic-configuration'
import { customLink } from 'utils/prismicHelpers'
import { anchorTagStyles } from 'styles'
import { useRouter } from 'next/router'

const AnchorTag = ({ slice }) => {
  const sectionClass =
    slice.slice_label ?
    `text-section-${slice.slice_label}` :
    'text-section-1col'
    
    const router = useRouter()

  return (
    <div>
      <a class="anchor" id={slice.primary.tagname[0].text.replace(/ /g,"_")}/>
      <style jsx global>{ anchorTagStyles }</style>
    </div>
    
  )
}

export default AnchorTag
