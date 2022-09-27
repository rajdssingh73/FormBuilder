import React from 'react'

const DisplayForm = ({ data }) => {
  return (
    <div>
        <h3>Form : {data.metadata.formId} </h3>
      <h3>Created By : {data.metadata.creatorName} </h3>
      <h3>Created At : {data.metadata.createTime} </h3>
      <pre> {JSON.stringify(data, null, 2)} </pre>
      <form>
        {Object.keys(data.data).map((item, index) => {
          return (
            <div key={index}>
              <h3>
                {data.data[item].title} : {data.data[item].name}
              </h3>
              <br />
            </div>
          );
        })}
      </form>
    </div>
  )
}

export default DisplayForm