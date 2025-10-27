/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1187046571")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1207088906",
    "max": 0,
    "min": 0,
    "name": "descriptif1",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3741050544",
    "max": 0,
    "min": 0,
    "name": "descriptif2",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2851919398",
    "max": 0,
    "min": 0,
    "name": "descriptif3",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1187046571")

  // remove field
  collection.fields.removeById("text1207088906")

  // remove field
  collection.fields.removeById("text3741050544")

  // remove field
  collection.fields.removeById("text2851919398")

  return app.save(collection)
})
