/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3435586565")

  // remove field
  collection.fields.removeById("editor1207088906")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3435586565")

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1207088906",
    "maxSize": 0,
    "name": "descriptif1",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
