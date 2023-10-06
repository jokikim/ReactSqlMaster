import NavigationMenu from "./components/layout/NavigationMenu";
import Editor from "./components/editor/Editor";
import Toast from "./components/reusable/Toast";

function App() {

  return (
    <>
    <div className="flex dark:border-slate-100 h-screen bg-white dark:bg-black divide-x dark:divide-slate-700">
        <NavigationMenu />
        <Editor />
    </div>
    <Toast />
    </>
  )
}

export default App