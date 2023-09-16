import React, { useEffect, useState } from "react";
import CodeRunner from "./CodeRunner";
import Split from "react-split";
import CodeEditor from "./CodeEditor";
import { useSelector } from "react-redux";
import CodeOutput from "./CodeOutput";
import useData from "../../hooks/useData";

const EditorPanel = ({ tabId, initialQueryName, initialQuery }) => {
  // const value = useSelector((state) => state.app.value);

  const activeTab = useSelector((state) => state.app.activeTab);
  const [query, setQuery] = useState(initialQueryName);
  const [value, setValue] = useState(initialQuery);
  // const [splitSize, setSplitSize] = useState([100, 0]);
  // const [csvData, setCsvData] = useState(null);
  const executableQuery = useSelector((state) => state.app.executableQuery);
  const [outputData, setOutputData] = useState(null);
  const { data, runtime, isLoading, splitSize, setSplitSize } = useData(executableQuery);

  useEffect(() => {
    if (initialQuery) {
      setValue(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    setOutputData(data);
    // setSplitSize([40, 60]);
  }, [data]);

  console.log("value from panel", value);
  const isActiveTab = tabId === activeTab;

  const handleQueryReset = () => {
    const userConfirmed = window.confirm(
      'Are you sure? you want to reset editor?'
    );
    if (!userConfirmed) return;
    setQuery(initialQuery);
  };

  return (
    <div className={`${isActiveTab === false && "hidden"}`}>
      <CodeRunner
        query={query}
        setQuery={setQuery}
        value={value}
        setValue={setValue}
        handleQueryReset={handleQueryReset}
      />

      <Split 
      className="h-[calc(100vh-109px)] text-slate-600"
      direction="vertical" minSize={0} snapOffset={30} sizes={splitSize}>
        <div className="overflow-auto dark:bg-[#0d1117] text-base">
          <CodeEditor
            query={query}
            setQuery={setQuery}
            value={value}
            setValue={setValue}
          />
        </div>
        <div className="overflow-auto relative dark:bg-slate-600">
          <CodeOutput
            isLoading={isLoading}
            data={outputData}
            runtime={runtime}
            splitSize={splitSize}
            setSplitSize={setSplitSize}
            // value={value}
            // query={query}
          />
        </div>
      </Split>
    </div>
  );
};

export default EditorPanel;
