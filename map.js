function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Leo', 'Admin');
usuarios.set('Leticia', 'Admin');
usuarios.set('Gordo', 'User');
usuarios.set('Princesa', 'User');

console.log(getAdmins(usuarios));