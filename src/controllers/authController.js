const userModel = require("../models/userModel");
const bcrypt = require("bcrypt"); /* Encriptar contraseña en el registro */
const jwt = require("jsonwebtoken"); /* Crear token en login */

const JWT_SECRET =
  process.env.JWT_SECRET || "mysecretkey"; /* Encriptar el token */

exports.register = async (req, res) => {
  try {
    const { name, lastname, nick, email, password, bio, role } = req.body;
    console.log(req.body);
    const existingUser = await userModel.findOne({ email})
    console.log(existingUser);
    if(existingUser){
      return res.status(400).json({message: "El usuario ya existe"})
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      lastname,
      nick,
      email,
      password: hash,
      bio,
      role,
    });

    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear usuario" });
  }
};
exports.login = async (req, res) => {};
