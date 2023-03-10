const express = require("express")
const axios = require('axios');
const https = require('https');
const app = express()
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const firebase = require('firebase/compat/app');
require("firebase/compat/firestore");
require('firebase/compat/database');

const firebaseConfig = {

    apiKey: "AIzaSyC5jLQAezHjVaqaL1y3nfPOHXH6KFJ-0oU",

    authDomain: "snkrsxu.firebaseapp.com",
    databaseURL: "https://snkrsxu-default-rtdb.firebaseio.com/",
    projectId: "snkrsxu",

    storageBucket: "snkrsxu.appspot.com",

    messagingSenderId: "652819388919",

    appId: "1:652819388919:web:b77272440eb923c3ebf6f2",

    measurementId: "G-PTF4FMRF51"

};


const app2 = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()



firebase
    .database()
    .ref("/sneakers")
    .once("value")
    .then((snapshot) => {
        const sneakers = snapshot.val();
        console.log(sneakers);
    });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
var index = require('./public/index');

app.use(express.static(__dirname + './public/index'))

let Sneakers =
    [
        {
            id: 0, brand: "nike", model: "air max penny", price: "3599", sizes: ["43", "44", "45", "46"], gender: "men", colors: ["faded spruce", "faded white"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/files/3x2-footwear_86231b59-0ff7-4d7d-b452-b030b951aad5.jpg?v=1674081480"]
        },
        {
            id: 1, brand: "nike", model: " nike x florida a&m lebron 7", price: "200", sizes: ["42", "43", "44", "45"], gender: "unisex", colors: ["black/team", "orange/george gree"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/files/Sneaker-Politics-Nike-Bron7FAMUBlck-IGPost-5.png?v=1673537606",
                "https://cdn.shopify.com/s/files/1/0214/7974/files/Sneaker-Politics-Nike-Bron7FAMUBlck-Web-2.jpg?v=1673537546"]
        },
        {
            id: 2, brand: "nike", model: "women's air jordan 5 retro", price: "200", sizes: ["41", "42", "43", "44", "45", "46"], gender: "men", colors: ["red"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/files/3x2-footwear_1_2343c8ee-eedf-4d05-aa3e-bf682234eaff.jpg?v=1673534107",
                "https://cdn.shopify.com/s/files/1/0214/7974/files/Womens_Air_Jordan_5_retro_Red_IG_CROP-7.jpg?v=1673648146"]
        },
        {
            id: 3, brand: "nike", model: "air max penny", price: "3599", sizes: ["43", "44", "45", "46"], gender: "men", colors: ["faded spruce", "faded white"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/files/3x2-footwear_86231b59-0ff7-4d7d-b452-b030b951aad5.jpg?v=1674081480"]
        },
        {
            id: 4, brand: "nike", model: "air jordan 4 retro (gs)", price: "1599", sizes: ["42", "43", "44", "45", "46"], gender: "men", colors: ["blue", "white"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/files/Air_Jordan_4_Kids_Mesy_Room_Sneaker_POlitics_Blog-Landscape.jpg?v=1673538949",
                "https://cdn.shopify.com/s/files/1/0214/7974/files/Air_Jordan_4_Kids_Mesy_Room_Sneaker_POlitics_IG_Square_-8.jpg?v=1673539037"]
        },
        {
            id: 5, brand: "nike", model: "air max penny", price: "3599", sizes: ["43", "44", "45", "46"], gender: "men", colors: ["faded spruce", "faded white"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/files/3x2-footwear_86231b59-0ff7-4d7d-b452-b030b951aad5.jpg?v=1674081480"]
        },
        {
            id: 6, brand: "nike", model: "jayson tatum x jordan", price: "3599", sizes: ["43", "44", "45", "46"], gender: "men", colors: ["faded yellow"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/files/Sneaker-Politics-Jordan-TatumLow-Web-1.png?v=1674840513",
                "https://cdn.shopify.com/s/files/1/0214/7974/files/Sneaker-Politics-Jordan-AJ1LowTatum-IGPost-2.png?v=1674840426"]
        },
        {
            id: 7, brand: "adidas", model: "pharrell nmd s1 mahbs", price: "3599", sizes: ["43", "44", "45", "46"], gender: "men", colors: ["white", "blue"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0214/7974/products/AdidasHUmanRacePharrellWhites.jpg?v=1674755705",
                "https://cdn.shopify.com/s/files/1/0214/7974/products/AdidasHUmanMadePharrellWhites4.jpg?v=1674755705"]
        },
        {
            id: 8, brand: "nike", model: "air max 97", price: "1800", sizes: ["41", "42", "43", "44", "45", "46"], gender: "unisex", colors: ["gold"],
            images_urls: ["https://www.solebox.com/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-solebox-master-de/default/dwd79b621d/2169676_PS.jpg?sw=780&sh=780&sm=fit&sfrm=png",
                "https://www.solebox.com/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-solebox-master-de/default/dwac8f7e97/2169676_PS2.jpg?sw=780&sh=780&sm=fit&sfrm=png"]
        },
        {
            id: 9, brand: "nike", model: "air force 1 low x", price: "1500", sizes: ["43", "44", "45", "46"], gender: "men", colors: ["black"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0011/8574/2900/products/nike-DV2957-001_01_600x.jpg?v=1674879495"]
        },
        {
            id: 10, brand: "adidas", model: "sean wotherspoon", price: "1200", sizes: ["42", "43", "44", "45", "46"], gender: "men", colors: ["white", "gold", "blue"],
            images_urls: ["https://cdn.shopify.com/s/files/1/0011/8574/2900/products/adidas_GX9682_01_600x.jpg?v=1661433734",
                "https://cdn.shopify.com/s/files/1/0011/8574/2900/products/adidas_GX9682_02_600x.jpg?v=1661433742"]
        },
        {
            id: 11, brand: "nike", model: "dunk hi retro bttys", price: "1599", sizes: ["42", "43", "44", "45", "46"], gender: "men", colors: ["black", "blue"],
            images_urls: ["https://img01.ztat.net/article/spp-media-p1/937d4ed757d442f5bab2eea5935851c9/66e2b206cf5247f4b100e08f9a319555.jpg?imwidth=1800&filter=packshot",
                "https://img01.ztat.net/article/spp-media-p1/d87405fc3bc64bd5a9be70623ba07c72/d65e5c4ab59841b38ca21ee2302a17ba.jpg?imwidth=1800&filter=packshot"]
        },
        {
            id: 12, brand: "Cabron", model: "dunk hi retro bttys", price: "1599", sizes: ["42", "43", "44", "45", "46"], gender: "men", colors: ["black", "blue"],
            images_urls: ["https://img01.ztat.net/article/spp-media-p1/937d4ed757d442f5bab2eea5935851c9/66e2b206cf5247f4b100e08f9a319555.jpg?imwidth=1800&filter=packshot",
                "https://img01.ztat.net/article/spp-media-p1/d87405fc3bc64bd5a9be70623ba07c72/d65e5c4ab59841b38ca21ee2302a17ba.jpg?imwidth=1800&filter=packshot"]
        }
    ]


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/users", async (req, res) => {
    await getUsersFirebase(res);
});
app.get("/addSneaker.html", (req, res) => {
    res.sendFile(__dirname + "/addSneaker.html")
})

app.get("/deleteSneaker.html", (req, res) => {
    res.sendFile(__dirname + "/deleteSneaker.html")
})

//Show sneakers with get
app.get("/sneakers", (req, res) => {
    res.send(Sneakers)
})

//show sneakers with post
app.post("/sneakers", async (req, res) => {

    try {
        const querySnapshot = await db.collection("snkrsxu").get();
        const sneakers = [];
        querySnapshot.forEach((doc) => {
            sneakers.push(doc.data());
        });
        res.send(sneakers);
    } catch (error) {
        console.error(`Error getting sneakers data: ${error.message}`);
        res.status(500).send({ error: 'Error getting users data' });
    }
    //res.send(Sneakers);
});




// //Add sneaker
app.post("/addSneaker", async (req, res) => {
    let sneakerId = guid();
    let sneakerBrand = req.body.sneakerBrand + ""
    let sneakerModel = req.body.sneakerModel + ""
    let Price = req.body.price
    let Sizes = (req.body.sizes?.trim() ?? '').split(' ').filter((s) => s != '' && s != ' ')
    const SizesObject = Sizes.map((size, index) => ({ id: index + 1, name: size }))
    let Gender = req.body.gender
    const Colors = (req.body.colors?.trim() ?? '').split(' ').filter((s) => s != '' && s != ' ')
    const ColorsObject = Colors.map((color, index) => ({ id: index + 1, name: color }))
    let Images = (req.body.images + "").trim().split(' ').filter((s) => s != '' && s != ' ')
    const ImagesObject = Images.map((image, index) => ({ id: index + 1, name: image }))

    let sneaker = { id: sneakerId, brand: sneakerBrand, model: sneakerModel, price: Price, sizes: SizesObject, gender: Gender, colors: ColorsObject, images_urls: ImagesObject }
    const query = db.collection("snkrsxu").where("id", "==", sneaker.id);
    const querySnapShot = await query.get();
    if (querySnapShot.empty) {
        await db.collection("snkrsxu").add(sneaker);
        res.write(` The sneaker brand  ${sneaker.brand.toUpperCase()} and model ${sneaker.model.toUpperCase()} was added to the list`)
    } else {
        res.write(`The Sneaker id ${sneaker.id} already exists`)
    }


    // res.send(sneakers);


    res.send()
})
//Delete sneaker
app.post("/deleteSneaker", async (req, res) => {
    let Brand = req.body.sneakerBrand + ""
    let Model = req.body.sneakerModel + ""
    let sneaker = { brand: Brand, model: Model }
    await db.collection("snkrsxu")
        .where("brand", "==", sneaker.brand)
        .where("model", "==", sneaker.model)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete();
            });
        });
    res.write(`The sneaker brand ${sneaker.brand} and model ${sneaker.model} was deleted from you firebase database `)
    res.send()
})

// //Add sneaker
app.post("/addSneakerXu", (req, res) => {
    let sneaker = req.body;
    if (Sneakers.find(s => s.brand.toLowerCase() == sneaker.brand && s.model.toLocaleLowerCase() == sneaker.model)) {
        console.log("sneaker already added")
    } else {
        Sneakers.push(sneaker)
        console.log(` The sneaker brand  ${sneaker.brand.toUpperCase()} and model ${sneaker.model.toUpperCase()} was added to the list`)
    }
    res.send()
})




app.get("/snkrs", async (req, res) => {
    await getSneakersSqlDataBase(res);
});

//Delete Sneaker
app.post("/deleteSneakerXu", (req, res) => {
    let sneaker = req.body

    if (Sneakers.find(s => s.brand.toLowerCase() == sneaker.brand.toLowerCase() && s.model.toLowerCase() == sneaker.model.toLowerCase())) {
        let sneakerIndex = Sneakers.findIndex(s => s.brand.toLowerCase() == sneaker.brand.toLowerCase() && s.model.toLowerCase() == sneaker.model.toLowerCase())
        Sneakers.splice(sneakerIndex, 1)
        console.log(` the brand ${sneaker.brand.toUpperCase()} with model ${sneaker.model.toLocaleUpperCase()} was deleted from the list`)
    } else {
        console.log(`${sneaker.model.toUpperCase()} Is not in the list`)
    }
    res.send()
})

app.listen(PORT, () => {
    console.log("listening to port " + PORT)
})


const options = {
    hostname: 'localhost',
    port: 7203,
    path: '/Sneakers',
    method: 'GET',
    rejectUnauthorized: false
};

async function getSneakersSqlDataBase(res) {
    try {
        const req2 = https.request(options, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', async () => {
                try {
                    const sneakers = JSON.parse(data);
                    for (const element of sneakers) {
                        const query = db.collection("snkrsxu").where("id", "==", element.id);
                        const querySnapShot = await query.get();
                        if (querySnapShot.empty) {
                            await db.collection("snkrsxu").add(element);
                        } else {
                            console.log(`Sneaker with id ${element.id} already exists`)
                        }
                    }

                    res.send(sneakers);
                } catch (error) {
                    console.error(`Error parsing JSON data: ${error.message}`);
                    res.status(500).send({ error: 'Error parsing JSON data' });
                }
            });
        });

        req2.on('error', (error) => {
            console.error(`Error making request: ${error.message}`);
            res.status(500).send({ error: 'Error making request' });
        });

        req2.end();
    } catch (error) {
        console.error(`Error getting sneakers data: ${error.message}`);
        res.status(500).send({ error: 'Error getting sneakers data' });
    }
}

async function getUsersFirebase(res) {
    try {
        const querySnapshot = await db.collection("users").get();
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push(doc.data());
        });
        res.send(users);
    } catch (error) {
        console.error(`Error getting users data: ${error.message}`);
        res.status(500).send({ error: 'Error getting users data' });
    }
}


let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}