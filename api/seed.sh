#!/usr/bin/env bash

mongoimport mongodb://localhost:27017/vibe --collection schedules --type json --file seed/users.json
mongoimport mongodb://localhost:27017/vibe --collection schedules --type json --file seed/schedules.json
