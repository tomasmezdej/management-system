cd ../src
rm App.css
rm setupTests.js
rm reportWebVitals.js
rm logo.svg
rm App.test.js
mv index.css ./assets/styles

rm App.js
touch App.jsx

echo "
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import HomePage from \"./pages/HomePage\"
import Default from \"./layouts/Default\"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=\"/\" element={<Default />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;" > App.jsx

rm index.js
touch index.jsx

echo "
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);" > index.jsx

cd ../scripts