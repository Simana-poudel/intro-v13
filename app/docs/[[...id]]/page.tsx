import React from 'react'

type DocsProps = {
  params: any // Replace 'any' with the appropriate type for the 'params' prop
}

const Docs = ({ params }: DocsProps) => {
  console.log(params)

  return <div>Docs</div>
}

export default Docs
