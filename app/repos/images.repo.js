import models from "../models/index.js";

const database = models.database

class ImagesRepo {

    async add(pid, photos) {
        let sql = "insert into images (pid, path) values($1, $2)"
        for (let i = 0; i < photos.length; i++) {
            const photo = photos[i];
            await database.query(sql, [pid, photo])
        }
    }


    async find(pid) {
        let sql = "select * from images where pid=$1"
        const rows = (await database.query(sql, [pid])).rows
        return rows
    }
}

export default new ImagesRepo()