#!/usr/bin/env bash
git remote add production git@github.com:ubermon-client-angular-one/ubermon-client-angular-one.github.io.git
git add . && git commit -m "add build files"
git push origin master
git push production master
