/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2932444164")

  // add field
  collection.fields.addAt(5, new Field({
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
      "chat"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2932444164")

  // remove field
  collection.fields.removeById("select4273923375")

  return app.save(collection)
})
