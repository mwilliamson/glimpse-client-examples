glimpse.data.initMetadata({
    plugins: {
        "Fruit": {
            layout: [[
                {data: "name", title: "Name"},
                {data: "colour", title: "Colour"}
            ]]
        }
    }
});

glimpse.data.initData({
    data: {
        "Fruit": {
            name: 'Fruit',
            data: [
                {name: "Apple", colour: "Red"},
                {name: "Banana", colour: "Yellow"},
                {name: "Coconut", colour: "Brown"}
            ]
        }
    }
});