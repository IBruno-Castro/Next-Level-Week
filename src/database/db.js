
const sqlite3 = require("sqlite3").verbose()

//criar objeto pra fazer op no banco de daods
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de dados para nossas operações
db.serialize(() => {
    /*criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir dados na tabela
    const query = `
    INSERT INTO places (
        image, 
        name, 
        address, 
        address2, 
        state, 
        city, 
        items
    ) VALUES (?,?,?,?,?,?,?)
`
    const values = [        
        "https://i.pinimg.com/236x/ae/f9/75/aef975b29837d07c946ac48468532ae0.jpg",
        "Paperside",
        "Guilherme Gemballa, Jardim America",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos eletrônicos, Lâmpadas"

    ]

    function afterInsertData(err){
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }
    
    db.run(query, values, afterInsertData)*/

    /*db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros")
        console.log(rows)
    })*/

    /*db.run(`DELETE FROM places WHERE id = ?`, [9], function(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    })*/

})