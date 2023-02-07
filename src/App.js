import React from "react";
import InputBox from "./Components/InputBox";
import { SnackbarProvider} from 'notistack'

function App() {
  
  return (
    <div className="App">
      <SnackbarProvider>
        <InputBox/>
      </SnackbarProvider>
    </div>
  );
}

export default App;
