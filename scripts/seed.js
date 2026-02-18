db = db.getSiblingDB("Mongoflix")

db.movies.drop()

print("--- Inicjalizacja bazy danych Mongoflix ---")

const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "../data/test.json")

const fileContent = fs.readFileSync(filePath, "utf8")
const data = JSON.parse(fileContent)

db.movies.insertMany(data)

print("--- działa ---")