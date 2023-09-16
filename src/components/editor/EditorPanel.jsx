import React, { useState } from 'react'
import CodeRunner from './CodeRunner'
import Split from 'react-split';
import CodeEditor from './CodeEditor';
import { useSelector } from 'react-redux';

const EditorPanel = ({ tabId, initialQueryName, initialQuery }) => {
  
  // const value = useSelector((state) => state.app.value);
  
  const activeTab = useSelector((state) => state.app.activeTab);
  const [query, setQuery] = useState(initialQueryName);
  const [value, setValue] = useState(initialQuery);
  const [splitSize, setSplitSize] = useState([100, 0]);
  // const [csvData, setCsvData] = useState(null);

  const isActiveTab = tabId === activeTab;

  return (
    <div className={`${isActiveTab === false && 'hidden'}`}>
      <CodeRunner
      query={query}
      setQuery={setQuery}
      value={value}
      setValue={setValue}
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
      <div className='overflow-auto relative dark:bg-slate-600'>

      </div>  

      </Split>
      
    </div>
  )
}

export default EditorPanel
