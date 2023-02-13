cd ../src

rm assets
rm components
rm layouts
rm middleware
rm pages
rm routes
rm services


mkdir assets
cd assets
mkdir styles
mkdir images
cd ..
mkdir components
cd components
mkdir pages
cd ..

mkdir config
mkdir layouts
mkdir middleware
mkdir pages
mkdir routes
mkdir services

cd ../scripts

./setup-pages.sh
./update-files.sh

