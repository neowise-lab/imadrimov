import models from "../models";

const database = models.database

class ProjectsRepo {

    create(project) {
        let sql = "insert into projects (title, description, thumb) values($1, $2, $3) returning id"
        const rows = (await database.query(sql, [project.title, project.description, project.thumb])).rows
        return rows[0].id
    }

    findAll() {
        let sql = "select * from projects"
        const rows = (await database.query(sql)).rows
        return rows
    }

    findOne(id) {
        let sql = "select * from projects where id=$1"
        const rows = (await database.query(sql, [id])).rows
        return rows.length === 0 ? null : rows[0]
    }
}