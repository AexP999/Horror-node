const films = [
    {
        id:0,
        name:"Синяя бездна 2",
        year: 2019,
        country: "Великобритания",
        category: "ужасы",
        director : {
            name : "Йоханнес Робертс",
            photo:"Johannes_Roberts.png",
            rewards: []
        },
        actors : [
            {
                name : "Софи Нелисс", 
                photo:"Sophie_Nélisse.jpg",
                sex : "female",
                rewards : []
            },
            {
                name : "Корина Фокс", 
                photo:"Corinne_Foxx.jpg",
                sex : "female",
                rewards : []
            },
            {
                name : "Бриэнн Тджу", 
                photo:"Brienne_Tju.jpg",
                sex : "female",
                rewards : []
            },
            {
                name : "Систин Роуз Сталлоне", 
                photo:"Sistine_Rose_Stallone.jpg",
                sex : "female",
                rewards : []
            }
        ],
        poster: "47metersdownuncaged.webp",
        images : [
            "47metersdownuncaged_1.png",
            "47metersdownuncaged_2.png",
            "47metersdownuncaged_3.png",
            "47metersdownuncaged_4.png",
            "47metersdownuncaged_5.png",
            "47metersdownuncaged_6.png",
        ],
        trailer : "https://www.youtube.com/watch?v=X4fIFbzj8QA"
    },
    {
        id:1,
        name:"Оно",
        year: 2017,
        country: "США",
        category: "ужасы",
        director : {
            name : "Андрес Мускетти",
            photo:"Johannes_Roberts.png",
            rewards: []
        },
        actors : [
            {
                name : "Билл Скарсгард", 
                photo:"Bill_Skarsgard.jpg",
                sex : "male",
                rewards : []
            },
            {
                name : "Финн Вулфард", 
                photo:"Finn_Wolfhard.jpg",
                sex : "male",
                rewards : []
            },
            {
                name : "София Лиллис", 
                photo:"Sophia_Lillis.jpg",
                sex : "female",
                rewards : []
            },
            {
                name : "Джейден Мартелл", 
                photo:"Jaeden_Martell.jpg",
                sex : "male",
                rewards : []
            },
            {
                name : "Николас Хэмилтон", 
                photo:"Nicholas_Hamilton.jpg",
                sex : "male",
                rewards : []
            }
        ],
        poster: "it.jpg",
        images : [
            "it_01.png",
            "it_02.png",
            "it_03.png",
            "it_04.png",
            "it_05.png",
            "it_06.png",
            
        ],
        trailer : "https://www.youtube.com/watch?v=ztLymbD0b8k"
    },
    {
        id:2,
        name:"Тихое место",
        year: 2018,
        country: "США",
        category: "ужасы",
        director : {
            name : "Джон Красински",
            photo:"John_Krasinski.jpg",
            rewards: []
        },
        actors : [
            {
                name : "Эмили Блант", 
                photo:"",
                sex : "female",
                rewards : []
            },
            {
                name : "Ноа Джуп", 
                photo:"Noah_Jupe.jpg",
                sex : "male",
                rewards : []
            },
            {
                name : "Милли Симмондс", 
                photo:"Millicent_Simmonds.jpg",
                sex : "female",
                rewards : []
            }
        ],
        poster: "quiet_place.jpg",
        images : [
            "quiet_place_01.png",
            "quiet_place_02.png",
            "quiet_place_03.png",
        ],
        trailer : "https://www.youtube.com/watch?v=J-G1rs7N-XE"
    },
]

module.exports = films;