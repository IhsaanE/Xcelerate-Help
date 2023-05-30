import React from 'react'
import { reset, globals } from 'styles'
import DefaultLayout from 'layouts'
import { LandingHeader, HomeBanner, SliceZone, MenuBar } from 'components'
import Prismic from 'prismic-javascript';
import { Client } from 'utils/prismicHelpers'

const HomePage = ({ doc, menu, allPages }) => {
  
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <div className='homepage'>
        <style jsx global>{ reset }</style>
        <style jsx global>{ globals }</style>
          
          <LandingHeader />
        
          <HomeBanner banner={doc.data.homepage_banner[0]}  menu={menu} allPages={allPages}/>
          
          <SliceZone sliceZone={doc.data.page_content} />
          
        </div>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return null
}



export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}
  var arrvar = [];
  const arr = menu.data.menuorder.map((item) => {
    arrvar = [...arrvar,  item.menuitemlink.uid ];
    
  });
  
  arrvar = [...arrvar, 'faq', 'deployment_notes', 'contact_us'];

  const allPages = await client.query(
    Prismic.Predicates.in('my.page.uid', arrvar)
  )

 

  return {
    props: {
      doc,
      menu,
      allPages,
      preview
    }
  }
}



export default HomePage
