import React from 'react'
import Prismic from 'prismic-javascript';
import DefaultLayout from 'layouts'
import { Header, SliceZone } from 'components'

import { queryRepeatableDocuments } from 'utils/queries'
import { reset, globals } from 'styles'
import { Client } from 'utils/prismicHelpers'
import { MenuBar } from '../components'


const Page = ({ doc, menu, allPages }) => {
  
  if (doc && doc.data) {
    return (
      <DefaultLayout>
       s
        <div className="page">
        <style jsx global>{ reset }</style>
        <style jsx global>{ globals }</style>
          <Header menu={menu} allPages={allPages}/>
          <div class="anchors"/>
          <SliceZone sliceZone={doc.data.page_content} />
          
        </div>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return null;
}


export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const client = Client()

  const doc = await client.getByUID('page', params.uid, ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}
  
  const allPages = await client.query(
    Prismic.Predicates.at('document.type', 'page'),
    { orderings: '[my.page.page_order_number]' }
  )
    
  return {
    props: {
      preview,
      menu,
      doc,
      allPages
    }
  }
};

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
  return {
    paths: documents.map(doc => `/${doc.uid}`),
    fallback: true,
  }
}

export default Page
