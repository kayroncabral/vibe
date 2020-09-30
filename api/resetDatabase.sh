#!/usr/bin/env mongo

const db = new Mongo().getDB("vibe");

db.users.deleteMany({});
db.appointments.deleteMany({});
db.schedules.deleteMany({});
