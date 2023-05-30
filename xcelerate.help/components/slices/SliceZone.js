import React from 'react'
import {
  TextSection,
  AnchorTag,
  Quote,
  FullWidthImage,
  ImageGallery,
  ImageHighlight,
  DeploymentNotes,
  FAQ,
  Video,
  VideoFile,
} from './'

const SliceZone = ({ sliceZone }) => (
  <div className="container">
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('text_section'):
          return <TextSection slice={slice} key={`slice-${index}`} />
        case ('faq'):
          return <FAQ slice={slice} key={`slice-${index}`} />
        case ('video'):
          return <Video slice={slice} key={`slice-${index}`} />
        case ('videofile'):
          return <VideoFile slice={slice} key={`slice-${index}`} />
        case ('deployment_notes'):
          return <DeploymentNotes slice={slice} key={`slice-${index}`} />
        case ('anchortag'):
          return <AnchorTag slice={slice} key={`slice-${index}`} />
        case ('quote'):
          return <Quote slice={slice} key={`slice-${index}`} />
        case ('full_width_image'):
          return <FullWidthImage slice={slice} key={`slice-${index}`} />
        case ('image_gallery'):
          return <ImageGallery slice={slice} key={`slice-${index}`} />
        case ('image_highlight'):
          return <ImageHighlight slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </div>
)

export default SliceZone
