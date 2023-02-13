cd ../src

cd layouts
rm Default.jsx
touch Default.jsx

echo "
import {Outlet} from \"react-router-dom\";

const Default = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Default;
" > Default.jsx

cd ../pages
touch HomePage.jsx
echo "
import Home from \"../components/pages/Home\"

const HomePage = () => {
  return (
    <Home />
  )
}

export default HomePage
" > HomePage.jsx


cd ../components/pages

rm Home.jsx
touch Home.jsx

echo "
const Home = () => {
    return (
        <h1>this is the Homepage</h1>
    );
}

export default Home;
" > Home.jsx

cd ../../scripts
