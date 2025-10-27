/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_434264334")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select4273923375",
    "maxSelect": 1,
    "name": "icone",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "pencil",
      "tools",
      "palette"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_434264334")

  // remove field
  collection.fields.removeById("select4273923375")

  return app.save(collection)
})
