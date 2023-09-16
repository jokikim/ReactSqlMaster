import { useState } from "react"
import NavigationMenu from "./components/layout/NavigationMenu";
import EditorTabs from "./components/editor/EditorTabs";
import { useSelector } from "react-redux";
import Editor from "./components/editor/Editor";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex dark:border-slate-100 h-screen divide-x dark:divide-slate-700">
        <NavigationMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        />
        <Editor />
    </div>
  )
}

export default App
