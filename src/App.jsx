import { useState } from "react"
import NavigationMenu from "./components/layout/NavigationMenu";
import Editor from "./components/editor/Editor";

function App() {
  const [query, setQuery] = useState('');
  const [value, setValue] = useState("select * from customers");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-layout-desktop grid-rows-layout-desktop min-h-screen">
      <NavigationMenu
      setQuery={setQuery}
      setValue={setValue}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
      <Editor 
       setQuery={setQuery}
       value={value}
       setValue={setValue}
       isOpen={isOpen}
      />
    </div>
  )
}

export default App
