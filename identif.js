let user = null; // puse null ya que no me gustaba cómo se sentía un string en blanco jaja
let password = null;
function login(user,password){
    switch(user){
        case 'admin' :
            console.log('Hola, admin, ingrese su contraseña');
            break;
        case null :
            console.log('Por favor, ingrese su usuario')
            break;
        default:
            console.log('Usuario incorrecto');
            break;
    }
    switch(password){
        case '1234' :
            console.log('Aguarde un instante por favor...');
            break;
        case null :
            console.log('Por favor, ingrese su contraseña.');
            break;
        default:
            console.log('Contraseña incorrecta.');
            break;
    }
    switch(user,password){
        case 'admin','1234' :
            console.log('Bienvenido a nuestro sitio!');
            break;
        case null, null :
            console.log('Debe ingresar los datos requeridos*');
            break;
        default:
            console.log('Usuario y contraseña incorrectos.');
            break;
    }
}
login(user,password);