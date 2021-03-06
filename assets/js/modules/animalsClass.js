// Clase padre Animal
class Animal {
	constructor(nombre, edad, img, comentarios, sonido){
		let _nombreAnimal = nombre;
		let _edad = edad;
		let _img = img;
		let _comentarios = comentarios;
		let _sonido = sonido;

		this.getNombre = () => _nombreAnimal;
		this.getEdad = () => _edad;
		this.getImg = () => _img;
		this.getComentarios = () => _comentarios;
		this.getSonido = () => _sonido;

		this.setComentarios = (commentary) => _comentarios = commentary;

	}

	get Nombre(){
		return this.getNombre()
	}

	get Edad(){
		return this.getNombre()
	}

	get Img(){
		return this.getNombre()
	}

	get Sonido(){
		return this.getNombre()
	}

	set Comentarios(new_commentary){
		this.setComentarios(new_commentary);
	}

}

// Clases hijas de Animal

// Clase Leon
class Leon extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido)
	}

	Rugir() {
		return console.log('Rugir');
	}
}

// Clase Lobo
class Lobo extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido)
	}

	Aullar() {
		return console.log('Aullar');
	}
}

// Clase Oso
class Oso extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido)
	}

	Grunir() {
		return console.log('Grunir');
	}
}

// Clase Serpiente
class Serpiente extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido)
	}

	Sisear() {
		return console.log('Sisear');
	}
}

// Clase Aguila
class Aguila extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido)
	}

	Chillar() {
		return console.log('Chillar');
	}
}

export {Animal, Leon, Lobo, Oso, Serpiente, Aguila}
