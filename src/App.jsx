import { useState } from "react"
import NavigationMenu from "./components/layout/NavigationMenu";
import Editor from "./components/editor/Editor";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex dark:border-slate-100 h-screen bg-white dark:bg-black divide-x dark:divide-slate-700">
        <NavigationMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        />
        <Editor />
    </div>
  )
}

export default App