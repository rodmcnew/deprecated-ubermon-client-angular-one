#!/usr/bin/env bash
npm run build
git remote add production git@github.com:ubermon-client-angular-one/ubermon-client-angular-one.github.io.git
git add . && git commit -m "add build files"
git push origin master
git subtree push --prefix build production master
