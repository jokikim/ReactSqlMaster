import { sql } from '@codemirror/lang-sql'
import ReactCodeMirror from '@uiw/react-codemirror'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CodeEditor = ({ value, setValue }) => {
  const dispatch = useDispatch();
  // const value = useSelector((state) => state.app.value);
  // const updateValue = useSelector((state) => state.app.updateValue);
  // const query = useSelector((state) => state.app.query);

  const handleQueryChange = (newQuery) => {
    // dispatch(updateValue(newQuery));
    setValue(newQuery);
  }

  return (
    <ReactCodeMirror 
    value={value}
    extensions={[sql()]}
    onChange={handleQueryChange}
    />
  )
}

export default CodeEditor
