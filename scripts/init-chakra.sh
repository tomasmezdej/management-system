cd ../src

touch App.jsx

echo "
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from \"./pages/HomePage\"
import Default from \"./layouts/Default\"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path=\"/\" element={<Default />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
" > App.jsx

cd ../scripts