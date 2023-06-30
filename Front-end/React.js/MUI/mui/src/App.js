import './App.css' // Imports CSS
import { MuiButtonGroups } from './components/MuiButtonGroups' // Imports MuiButtonGroups component
import { MuiButtons } from './components/MuiButtons' // Imports MuiButtons component
import { MuiSelects } from './components/MuiSelects'; // Imports MuiSelects component
import { MuiTextFields } from './components/MuiTextFields'; // Imports MuiTextFields component
import { MuiTypography } from './components/MuiTypography' // Imports MuiTypography component
import { MuiToggleButtons } from './components/ToggleButtons'; // Imports MuiToggleButtons component

function App() { /// App component
  return (
    <div className='App'>
      <MuiTypography />
      <MuiButtons />
      <MuiButtonGroups />
      <MuiToggleButtons />
      <MuiTextFields />
      <MuiSelects />
    </div>
  );
}

export default App;
