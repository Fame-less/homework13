//подключаем стандартный модуль fs
const fs = require('fs');

// создаем пустой файл new_file.txt
fs.openSync('new_file.txt', 'w+');

//доавляем первую запись
fs.appendFileSync('new_file.txt', 'First line at the file');

// добавляем запись с новой строки
fs.appendFileSync('new_file.txt', '\nNew line at the file');

// читаем файл и выводим результат в консоль
let newFile = fs.readFileSync('new_file.txt', 'utf-8');
console.log(newFile);

// подключаем nodemailer
var nodemailer = require('nodemailer');

// отправляем письмо на почту
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	  user: 'anastasia564353@gmail.com',
	  pass: '**********'
	}
  });
  
  var mailOptions = {
	from: 'anastasia564353@gmail.com',
	to: 'anastasia564353@gmail.com',
	subject: 'Неписаное правило №1',
	text: 'Если вы по-настоящему серьезно относитесь к решению проблемы, то лучший способ этого достичь — предоставить собеседнику максимально ясную картину того, как выглядит проблема.'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	}
  });