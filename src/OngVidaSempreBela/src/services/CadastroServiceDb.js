import DataBase from "./DbServices";

const DbExec = DataBase.getConnection();

export const getUsuarios = async () => {
    let results =  await DbExec('SELECT * FROM Cadastro');
    return results.rows.array;
}

export const insertUsuarios = async (params) => {
    let results =  await DbExec('INSERT INTO Cadastro(Nome, Email, Senha) VALUES(?,?,?)', [param.Nome, param.Email, param.Senha]);
    return results.rowsAffected;
}