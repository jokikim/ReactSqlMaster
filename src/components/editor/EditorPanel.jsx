import React, { useState } from 'react'
import CodeRunner from './CodeRunner'
import Split from 'react-split';
import CodeEditor from './CodeEditor';

const EditorPanel = ({ tabId, initialQueryName, initialQuery }) => {
  
  const [query, setQuery] = useState(initialQuery);
  const [splitSize, setSplitSize] = useState([100, 0]);

  return (
    <div>
      <CodeRunner
      query={query}
      setQuery={setQuery}
      />

      <Split
      direction='vertical'
      minSize={0}
      snapOffset={30}
      sizes={splitSize}
      >
        <div className='overflow-auto dark:bg-[#0d1117] text-base'>
          <CodeEditor
          query={query}
          setQuery={setQuery}
          />
        </div>


      </Split>
      
    </div>
  )
}

export default EditorPanel
