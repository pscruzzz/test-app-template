import React from "react"
import { Layout, PageHeader, PageBlock } from 'vtex.styleguide'

interface IGetUsersEmail {
    type: string,
    email: string
}

const Shared: React.FC = () => {

  return (
      <Layout
        pageHeader={
          <PageHeader
            title="Spotify"
            subtitle="Here it's some of your favorites"
          >
          </PageHeader>
        }
      >
        <PageBlock variation="full" >
          <div className="flex flex-column items-center justify-center w-100">
              Hello World
          </div>
        </PageBlock>
      </Layout>
  )
}

export default Shared
