/* const express = require('express')
const routes = express.Router()

//ALUMNOS----------------------
routes.get('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM alumnos',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })

    })
})
routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        

        conn.query('INSERT INTO alumnos set ?', [req.body]     ,(err,rows)=>{
            if(err) return res.send(err)

            res.send('Alumno registrado!!')
        })

    })
})
routes.delete('/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        

        conn.query('DELETE FROM alumnos WHERE id_alumnos = ?', [req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Alumno eliminado de la lista!')
        })

    })
})
//DIAS ----------
routes.get('/dias', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM dias',(err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })

    })
})

module.exports = routes 


 
 */