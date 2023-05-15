import React from 'react'
import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Preview = ({markdown , setMarkdown}) => {

  return (
    <>
    <div className='main-grid'>
        <div className="input-grid">
            <textarea name="" id="" value={markdown}
            onChange={(e)=>setMarkdown(e.target.value)}
            cols="30" rows="10" className="input"
            placeholder='Place your text 🪶'>

            </textarea>
        </div>
        <div className="preview-grid">
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </div>
    </div>
    </>
  )
}

export default Preview
