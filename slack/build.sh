docker-compose run --rm frontend npm run build
cp src/dist/build.js product/dist/build.js
cp src/dist/build.js.LICENSE.txt product/dist/build.js.LICENSE.txt
cp src/dist/index.html product/dist/index.html