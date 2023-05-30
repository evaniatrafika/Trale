const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(username, gender, email, password, phone)
            values(?,?,?,?,?)`,
            [
                data.username,
                data.gender,
                data.email,
                data.password,
                data.phone
            ],
            (error, result, fields) => {
                if (error){
                    return callBack(error);
                }
                    return callBack(null, result);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id,username,gender,email,phone from registration`,
            [],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getUserByUserId: (id,callBack) => {
        pool.query(
            `select id,username,gender,email,phone from registration where id = ?`,
            [id],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },
    updateUser: (data,callBack)=>{
        pool.query(
            `update registration set username=?, gender=?, email=?, password=?, phone=? where id = ? `,
        [
            data.username,
            data.gender,
            data.email,
            data.password,
            data.phone,
            data.id
        ],
        (error, result, fields) =>{
            if(error){
                callBack(error);
            }
            return callBack(null, result);
        }
            );
    },
    deleteUser: (data,callBack)=>{
        pool.query(
            `delete from registration where id = ?`,
            [data.id],
            (error, result, fields) => {
                if(error){
                  return  callBack(error);
                }
                return callBack(null, result[0]);
            }
        );
    },
    getUserByUserEmail: (email,callBack) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
};