import { useState } from "react"
import NavigationMenu from "./components/layout/NavigationMenu";

function App() {
  const [query, setQuery] = useState('');
  const [value, setValue] = useState("select * from customers");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <NavigationMenu
      value={value}
      setValue={setValue}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default App
