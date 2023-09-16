import React from 'react'
import EditorTabs from './EditorTabs'
import EditorPanel from './EditorPanel'
import { useSelector } from 'react-redux';

const Editor = () => {
  const tabs = useSelector((state) => state.app.tabs);

  return (
    <div className='w-[100vw] min-h-screen h-[100vh]'>
      <div>
        <EditorTabs />
      </div>
      <div>
      {
      tabs.map((tab) => (
        <EditorPanel
        key={tab.id}
        tabId={tab.id}
        initialQueryName={tab.queryName}
        initialQuery={tab.query}
        />
      ))
    }
      </div>

    </div>
  )
}

export default Editor
