import React, { useCallback, memo } from "react";
import { sql } from "@codemirror/lang-sql";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentEditorValue } from "../../redux/appSlice";

const CodeEditor = memo(function CodeEditor({ value, setValue }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);
  const isDarkMode = theme === "dark" ? true : false;

  const handleQueryChange = useCallback(
    (newQuery) => {
      dispatch(updateCurrentEditorValue(newQuery.trim()));
      setValue(newQuery.trim());
    },
    [dispatch, setValue]
  );

  return (
    <ReactCodeMirror
      value={value}
      extensions={[sql()]}
      onChange={handleQueryChange}
      theme={isDarkMode ? githubDark : githubLight}
    />
  );
});

export default CodeEditor;
