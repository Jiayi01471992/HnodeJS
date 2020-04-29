import Mock from "mockjs"
let dataList = [
    {
        "id":"0",
        "src": "images/1.png",
        "title": "Chryseia",
        "year": "2011",
        "region": "Douro",
        "varietal": "Touriga Nacional",
        "alcohol": "13%",
        "price": "$55.90",
        "cla":false
    },
    {
        "id":"1",
        "src": "images/2.png",
        "title": "Meiomi Pinot Noir",
        "year": "2013",
        "region": "California",
        "varietal": "Pinot Noir",
        "alcohol": "12%",
        "price": "$19.90",
        "cla":false
    },
    {
        "id":"2",
        "src": "images/10.png",
        "title": "Antucura Cabernet Sauvignon",
        "year": "2013",
        "region": "Argentina",
        "varietal": "Cabernet Sauvignon ",
        "alcohol": "12%",
        "price": "$15.90",
        "cla":false
    },
    {
        "id":"3",
        "src": "images/4.png",
        "title": "Leonetti Sangiovese",
        "year": "2012",
        "region": "Washington",
        "varietal": "Sangiovese",
        "alcohol": "13%",
        "price": "$85.90",
        "cla":false
    },
    {
        "id":"4",
        "src": "images/5.png",
        "title": "Chateau Pontet-Canet",
        "year": "2009",
        "region": "Pauillac, Bordeaux",
        "varietal": "Bordeaux ",
        "alcohol": "12%",
        "price": "$269.00",
        "cla":false
    },
    {
        "id":"5",
        "src": "images/6.png",
        "title": "Quintessa",
        "year": "2011",
        "region": "California",
        "varietal": "Cabernet Sauvignon",
        "alcohol": "12%",
        "price": "$125.90",
        "cla":false
    },
    {
        "id":"6",
        "src": "images/7.png",
        "title": "Clarendon Hills Astralis",
        "year": "2006",
        "region": "McLaren Vale",
        "varietal": "Syrah, Shiraz",
        "alcohol": "12%",
        "price": "$153.90",
        "cla":false
    },
    {
        "id":"7",
        "src": "images/8.png",
        "title": "Lapostolle Clos Apalta",
        "year": "2010",
        "region": "Chile",
        "varietal": "Bordeaux",
        "alcohol": "12%",
        "price": "$82.90",
        "cla":false
    },
    {
        "id":"8",
        "src": "images/9.png",
        "title": "Bodega Colome Reserva",
        "year": "2009",
        "region": "Argentina",
        "varietal": "Malbec",
        "alcohol": "13%",
        "price": "$99.90",
        "cla":false
    },
    {
        "id":"9",
        "src": "images/10.png",
        "title": "Montevertine Le Pergole Torte",
        "year": "2011",
        "region": "Tuscany",
        "varietal": "Sangiovese ",
        "alcohol": "12%",
        "price": "$119.90",
        "cla":false
    },
    {
        "id":"10",
        "src": "images/2.png",
        "title": "Massolino Vigna Parussi Barolo",
        "year": "2009",
        "region": "Piedmont",
        "varietal": "Nebbiolo",
        "alcohol": "12%",
        "price": "$169.90",
        "cla":false
    },
    {
        "id":"11",
        "src": "images/4.png",
        "title": "Chateau Branaire-Ducru",
        "year": "2009",
        "region": "St-Julien, Bordeaux",
        "varietal": "Bordeaux",
        "alcohol": "13%",
        "price": "$99.90",
        "cla":false
    }
]

Mock.mock("/list",()=>{
    return dataList
})