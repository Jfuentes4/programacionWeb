let obj = {
    name: 'John Doe',
    greet: function (param, param2) {
        console.log(`Hello ${this.name} : ${param} : ${param2 != undefined ? param2 : 'vacio'}`);
    }
}

let param = 'no se';

obj.greet(param);
//call ejecuta la funcion bajo el contexto mandado en this y recibe parametros como lista
obj.greet.call({name: 'Jane Doe'}, param);
//Apply ejecuta la funcion bajo el contexto mandado en el this y recibe parametros en un array
obj.greet.apply({name: 'Jane Doe'}, [param, 'hola']);
obj.greet();

