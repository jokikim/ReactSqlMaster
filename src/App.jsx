import { useState } from "react"
import NavigationMenu from "./components/layout/NavigationMenu";
import Editor from "./components/editor/EditorCopy";
import EditorTabs from "./components/editor/EditorTabs";
import { useSelector } from "react-redux";

function App() {
  // const [query, setQuery] = useState('');
  // const [value, setValue] = useState("select * from customers");
  const [isOpen, setIsOpen] = useState(false);
  const value = useSelector((state) => state.app.value);
  const query = useSelector((state) => state.app.query);

  console.log({value})
  return (
    <div className="grid grid-cols-layout-desktop grid-rows-layout-desktop min-h-screen">
      <NavigationMenu
      // setQuery={setQuery}
      // setValue={setValue}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
      <div>
        <EditorTabs
        />
      </div>
    </div>
  )
}

export default App
