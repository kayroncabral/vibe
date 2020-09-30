#!/usr/bin/env bash

mongoimport --db vibe --collection users --drop --type json --file seed/users.json --jsonArray
mongoimport --db vibe --collection schedules --drop  --type json --file seed/schedules.json --jsonArray
