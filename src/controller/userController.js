const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const xlxx = require('xlsx');
const Chat = require('../model/chatModel');
const sequelize = require('../../app');
const { Op } = require('sequelize');
exports.register = async (req, res) => {
  let userName = req.body.username;
  let password = req.body.password;

  try {
    let hashedPwd = await bcrypt.hash(password, 10);

    let newUser = await User.create({ userName, password });
    return res.json({ msg: 'User registered', status: true });
  } catch (error) {
    return res.status(400).json({ msg: 'err', status: false });
  }
};

exports.login = async (req, res) => {
  let userName = req.body.username;
  let password = req.body.password;

  try {
    let user = await User.findOne({ where: { userName } });
    if (!user)
      return res.status(400).json({ msg: 'User not found', status: false });

    let valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ msg: 'Invalid password', status: false });
    }
    let token = jwt.sign({ id: user.id }, 'secret_key', { expires: '1h' });

    return res.json({ msg: 'Login scccess', token: token, status: true });
  } catch (error) {
    return res.status(400).json({ msg: 'err', status: false });
  }
};

exports.chatImport = async (req, res) => {
  try {
    const file = req.file;
    const workBook = xlxx.readFile(file.path);
    const data = XLSX.utils.json_to_sheet(workBook);

    for (const row of data) {
      const user = await Chat.create({
        sender: row.sender,
        message: row.message,
        receiver: row.receiver,
      });
    }

    return res.json({ msg: 'Chat processed successfully', status: true });
  } catch (error) {
    return res.status(400).json({ msg: 'err', status: false });
  }
};

exports.filter = async (req, res) => {
  try {
    let { task } = req.query;
    let chats;
    if (task) {
      chats = await Chat.findAll({
        where: { task: { [Op.like]: `%${task}` } },
      });
    } else {
      //showall
      chats = await Chat.findAll();
    }

    return res.json({ data: chats, status: true });
  } catch (error) {
    return res.status(400).json({ msg: 'err', status: false });
  }
};
