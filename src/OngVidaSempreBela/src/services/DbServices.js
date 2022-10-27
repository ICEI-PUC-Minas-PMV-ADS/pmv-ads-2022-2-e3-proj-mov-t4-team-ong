import * as SQLite from 'expo-sqlite';

export const DataBase = {

    getConnection: () => {
        const DB = SQLite.openDataBase('canalvsb_db');

        DB.transaction((ts) => {
            ts.executeSql('create table if not exists Cadastro(IdDoador VARCHAR (10) PRIMARY KEY IDENTITY(1,1), Nome VARCHAR (20), Email VARCHAR (100), Senha CHAR (6))');
        });

        const ExecuteQuery = (sql, params = []) =>
            new Promise((resolve, reject) => {
                db.transaction((trans) => {
                    trans.executeSql(
                        sql,
                        params,
                        (trans, results) => {
                            resolve(results);
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                });
            });

        return ExecuteQuery;

    },
};




export default DataBase;