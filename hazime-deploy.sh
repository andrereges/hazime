#!bin/bash
quasar build && cp dist/spa/index.html dist/spa/200.html && cp .htaccess dist/spa/.htaccess && surge dist/spa/ --domain hazime.surge.sh
