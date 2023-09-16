import { sql } from '@codemirror/lang-sql'
import ReactCodeMirror from '@uiw/react-codemirror'
import React from 'react'

const CodeEditor = ({ query, setQuery }) => {

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  }

  return (
    <ReactCodeMirror 
    value={query}
    extensions={[sql()]}
    onChange={handleQueryChange}
    />
  )
}

export default CodeEditor
