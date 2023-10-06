import React, { memo, useEffect, useState } from "react";
import CodeRunner from "./CodeRunner";
import Split from "react-split";
import CodeEditor from "./CodeEditor";
import { useSelector } from "react-redux";
import CodeOutput from "./CodeOutput";
import useData from "../../hooks/useData";

const EditorPanel = memo(function EditorPanel({
  tabId,
  initialQuery,
}) {
  const activeTab = useSelector((state) => state.app.activeTab);
  const [value, setValue] = useState(initialQuery);
  const [tableName, setTableName] = useState("");
  const [outputData, setOutputData] = useState(null);
  const { data, runtime, isLoading, splitSize, setSplitSize } =
    useData(tableName);
  const fullScreen = useSelector((state) => state.app.fullScreen);
  const isActiveTab = tabId === activeTab;

  useEffect(() => {
    if (initialQuery) {
      setValue(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    setOutputData(data);
  }, [data]);

  return (
    <div className={`${isActiveTab === false && "hidden"}`}>
      <CodeRunner value={value} setTableName={setTableName} />

      <Split
        className={
          fullScreen ? "h-[calc(100vh-118px)]" : "h-[calc(100vh-68px)]"
        }
        direction="vertical"
        minSize={0}
        snapOffset={30}
        sizes={splitSize}
      >
        <div className="overflow-auto dark:bg-[#0d1117] text-base">
          <CodeEditor value={value} setValue={setValue} />
        </div>
        <div
          className={`overflow-auto relative dark:bg-slate-600 ${
            !fullScreen ? "w-full" : "w-[calc(100vw-301px)]"
          }`}
        >
          <CodeOutput
            isLoading={isLoading}
            data={outputData}
            runtime={runtime}
            setSplitSize={setSplitSize}
          />
        </div>
      </Split>
    </div>
  );
});

export default EditorPanel;
