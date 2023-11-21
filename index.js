// ***how to create table using index.js file ***
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   dialect: 'mysql'
// });

// // Define the User model
// const User = sequelize.define('user', {
//   username: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.DataTypes.STRING
//   },
//   age: {
//     type: Sequelize.DataTypes.INTEGER,
//     defaultValue: 21
//   }
// });

// // Sync the model with the database
// User.sync()
//   .then(() => {
//     console.log('Table and model synced successfully');
//   })
//   .catch((error) => {
//     console.error('Error syncing table and model:', error);
//   });






// ***insert the data ****

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   dialect: 'mysql'
// });

// // Define the User model
// const User = sequelize.define('user', {
//   username: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.DataTypes.STRING
//   },
//   age: {
//     type: Sequelize.DataTypes.INTEGER,
//     defaultValue: 21
//   }
// });

// // Sync the model with the database
// User.sync()
//   .then(() => {
//     console.log('Table and model synced successfully');

//     // Inserting multiple rows into the 'user' table
//     const userData = [
//       { username: 'sanchit', password: '111' },
//       { username: 'vivek', password: '444' },
//       { username: 'ram', password: '555' },
//       { username: 'sham', password: '666' },
//       { username: 'vikas', password: '777' },
//       { username: 'alok', password: '88' },
//       { username: 'mayank', password: '999' }
//     ];

//     return User.bulkCreate(userData);
//   })
//   .then((newUsers) => {
//     console.log('Inserted users:');
//     newUsers.forEach((user) => {
//       console.log(user.get());
//     });
//   })
//   .catch((error) => {
//     console.error('Error syncing table and model:', error);
//   });
     


//json format***

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   dialect: 'mysql'
// });

// // Define the User model
// const User = sequelize.define('user', {
//   username: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.DataTypes.STRING
//   },
//   age: {
//     type: Sequelize.DataTypes.INTEGER,
//     defaultValue: 21
//   }
// });

// // Sync the model with the database
// User.sync()
//   .then(() => {
//     console.log('Table and model synced successfully');

//     // Inserting multiple rows into the 'user' table
//     const userData = [
//       { username: 'sanchit', password: '111' },
//       { username: 'vivek', password: '444' },
//       { username: 'ram', password: '555' },
//       { username: 'sham', password: '666' },
//       { username: 'vikas', password: '777' },
//       { username: 'alok', password: '88' },
//       { username: 'mayank', password: '999' }
//     ];

//     return User.bulkCreate(userData);
//   })
//   .then((newUsers) => {
//     console.log('Inserted users in JSON format:');
//     newUsers.forEach((user) => {
//       console.log(JSON.stringify(user.toJSON(), null, 2));
//     });

//     // Update the username from 'vivek' to 'IIT'
//     return User.update({ username: 'IIT' }, { where: { username: 'vivek' } });
//   })
//   .then(() => {
//     console.log('Username updated to "IIT" for user with the username "vivek".');
//   })
//   .catch((error) => {
//     console.error('Error syncing table and model:', error);
//   });

//************************************************************************************************************** */

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   dialect: 'mysql'
// });

// // Define the User model
// const User = sequelize.define('user', {
//   username: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.DataTypes.STRING
//   },
//   age: {
//     type: Sequelize.DataTypes.INTEGER,
//     defaultValue: 21
//   }
// });

// // Synchronize the model with the database and insert/update records
// User.sync()
//   .then(() => {
//     console.log('Table and model synced successfully');

//     // Inserting multiple rows into the 'user' table only if they don't exist
//     const userData = [
//       { username: 'alpha', password: '111' },
//       { username: 'beta', password: '444' },
//       { username: 'gama', password: '555' },
//       { username: 'sin', password: '666' },
//       { username: 'cos', password: '777' },
//       { username: 'tan', password: '88' },
//       { username: 'cot', password: '999' }
//     ];

//     const promises = userData.map((user) => {
//       // Check if the user with the specified username exists
//       return User.findOne({ where: { username: user.username } })
//         .then((existingUser) => {
//           if (existingUser) {
//             // If the user exists, update the username
//             existingUser.username = 'IIT';
//             return existingUser.save();
//           } else {
//             // If the user doesn't exist, insert a new user
//             return User.create(user);
//           }
//         });
//     });

//     return Promise.all(promises);
//   })
//   .then((updatedUsers) => {
//     console.log('Updated users in JSON format:');
//     updatedUsers.forEach((user) => {
//       console.log(JSON.stringify(user.toJSON(), null, 2));
//     });

//     // After updating/inserting records, query and display results
//     return User.findAll({
//       attributes: [['username', 'myName'], 'password']
//     });
//   })
//   .then((data) => {
//     console.log('Users in JSON format:');
//     data.forEach((element) => {
//       console.log(element.toJSON());
//     });
//   })
//   .catch((error) => {
//     console.error('Error syncing table and model:', error);
//   });
//   ******************************************************************************************************************



// Here's an example of using the findAll method in Sequelize:

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   dialect: 'mysql'
// });

// // Define the User model
// const User = sequelize.define('user', {
//   username: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.DataTypes.STRING
//   },
//   age: {
//     type: Sequelize.DataTypes.INTEGER,
//     defaultValue: 21
//   }
// });

// // Synchronize the model with the database
// User.sync()
//   .then(() => {
//     console.log('Table and model synced successfully');

//     // Using findAll to find users whose usernames start with 'A'
//     return User.findAll({ where: { username: { [Sequelize.Op.like]: 'A%' } } });
//   })
//   .then((users) => {
//     // Displaying the results
//     console.log('Users with usernames starting with A:');
//     users.forEach((user) => {
//       console.log(user.toJSON());
//     });
//   })
//   .catch((error) => {
//     console.error('Error syncing table and model:', error);
//   });
/***************************************************************************************************************** */

////// code for find one

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   dialect: 'mysql'
// });

// // Define the User model
// const User = sequelize.define('user', {
//   username: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.DataTypes.STRING
//   },
//   age: {
//     type: Sequelize.DataTypes.INTEGER,
//     defaultValue: 21
//   }
// });

// // Synchronize the model with the database
// User.sync()
//   .then(() => {
//     console.log('Table and model synced successfully');

//     // Using findOne to find a user with a specific username
//     return User.findOne({ where: { username: 'alpha' } });
//   })
//   .then((user) => {
//     // Displaying the result
//     if (user) {
//       console.log('User found:');
//       console.log(user.toJSON());
//     } else {
//       console.log('User not found.');
//     }
//   })
//   .catch((error) => {
//     console.error('Error syncing table and model:', error);
//   });
/***************************************************************************** */

// GEETER SETTER AND VIRTUALS 


// 1ST GEETER

// setters are used to apply transformations to the username and password attributes before they are stored in the database.
// getters are used to apply transformations to the firstName attribute before it is retrieved from the database.
// A virtual field fullName is defined, which is not stored in the database but computed based on firstName and lastName.

// /////code 
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', 'mypassword', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     get() {
//       // Get the first name in uppercase
//       return this.getDataValue('firstName').toUpperCase();
//     }
//   }
// });

// sequelize.sync({ force: true })
//   .then(() => {
//     return User.create({
//       firstName: 'John'
//     });
//   })
//   .then((user) => {
//     console.log('User with Getter applied:');
//     console.log('First Name (Uppercase):', user.firstName);
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });



// **********************************************************************************************************

// setter /////ode for passward hide 

// const Sequelize = require('sequelize');
// const bcrypt = require('bcrypt');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const User = sequelize.define('user', {
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//     set(value) {
//       // Set the username to lowercase before saving
//       this.setDataValue('username', value.toLowerCase());
//     }
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     set(value) {
//       // Hash the password before saving
//       const hashedPassword = bcrypt.hashSync(value, 10);
//       this.setDataValue('password', hashedPassword);
//     }
//   }
// });

// sequelize.sync({ force: true })
//   .then(() => {
//     return User.create({
//       username: 'JohnD',
//       password: 'mypassword'
//     });
//   })
//   .then((user) => {
//     console.log('User with Setter applied:');
//     console.log('Stored Password:', user.getDataValue('password'));

//     // Check if a provided password matches the stored hashed password
//     const providedPassword = 'mypassword';
//     const isPasswordMatch = bcrypt.compareSync(providedPassword, user.password);
//     console.log('Password Match:', isPasswordMatch);
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });

// **********************************************************************************************************

// virtual


// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   fullName: {
//     type: Sequelize.VIRTUAL,
//     get() {
//       // Compute the full name based on firstName and lastName
//       return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
//     },
//     set(value) {
//       // You can customize the setter behavior if needed
//       throw new Error('Cannot set fullName directly.');
//     }
//   }
// });

// sequelize.sync({ force: true })
//   .then(() => {
//     return User.create({
//       firstName: 'John',
//       lastName: 'Doe'
//     });
//   })
//   .then((user) => {
//     console.log('User with Virtual Field applied:');
//     console.log('Full Name:', user.fullName);
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });
/************************************************************************************************************************************* */

// ************************************************************************************************* 
// ///****************************************************************************************************************** assosiation one to one 

//  ****associations 
// //one to one 
// code :

// const Sequelize = require('sequelize');

// // Connect to the database
// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Define the Student model
// const Student = sequelize.define('student', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// // Define the Information model with additional fields (rollNo, grade, age)
// const Information = sequelize.define('information', {
//   rollNo: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   grade: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   age: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   detail: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// // Define the association (one-to-one)
// Student.hasOne(Information);
// Information.belongsTo(Student);

// // Synchronize the models with the database
// sequelize.sync({ force: true })
//   .then(() => {
//     // Insert data into the students table
//     return Student.bulkCreate([
//       { name: 'John' },
//       { name: 'Jane' },
//       { name: 'Bob' },
//       { name: 'Alice' }
//     ]);
//   })
//   .then(() => {
//     // Insert data into the information table with rollNo, grade, and age
//     return Information.bulkCreate([
//       { rollNo: '101', grade: 'A', age: 20, detail: 'Student information for John' },
//       { rollNo: '102', grade: 'B', age: 22, detail: 'Student information for Jane' },
//       { rollNo: '103', grade: 'A+', age: 21, detail: 'Student information for Bob' },
//       { rollNo: '104', grade: 'B-', age: 23, detail: 'Student information for Alice' }
//     ]);
//   })
//   .then(() => {
//     // Retrieve and display all students with associated information
//     return Student.findAll({
//       include: [{ model: Information, required: true }]
//     });
//   })
//   .then((studentsWithInfo) => {
//     console.log('Students with Information:');
//     studentsWithInfo.forEach((student) => {
//       console.log(`Student: ${student.name}, Roll No: ${student.information.rollNo}, Grade: ${student.information.grade}, Age: ${student.information.age}, Detail: ${student.information.detail}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });
// *********************************************************************************************************

// one to many:

// const Sequelize = require('sequelize');

// // Connect to the database
// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Define the Student model
// const Student = sequelize.define('student', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// // Define the Information model with additional fields (rollNo, grade, age)
// const Information = sequelize.define('information', {
//   rollNo: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   grade: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   age: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   detail: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// // Define the association (one-to-many)
// Student.hasMany(Information);
// Information.belongsTo(Student);

// // Synchronize the models with the database
// sequelize.sync({ force: true })
//   .then(() => {
//     // Insert data into the students table
//     return Student.bulkCreate([
//       { name: 'John' },
//       { name: 'Jane' },
//       { name: 'Bob' },
//       { name: 'Alice' }
//     ]);
//   })
//   .then(() => {
//     // Insert data into the information table with rollNo, grade, and age
//     return Information.bulkCreate([
//       { studentId: 1, rollNo: '101', grade: 'A', age: 20, detail: 'Student information for John' },
//       { studentId: 2, rollNo: '102', grade: 'B', age: 22, detail: 'Student information for Jane' },
//       { studentId: 1, rollNo: '103', grade: 'A+', age: 21, detail: 'Additional information for John' },
//       { studentId: 3, rollNo: '104', grade: 'B-', age: 23, detail: 'Student information for Bob' }
//     ]);
//   })
//   .then(() => {
//     // Retrieve and display all students with associated information
//     return Student.findAll({
//       include: [{ model: Information }]
//     });
//   })
//   .then((studentsWithInfo) => {
//     console.log('Students with Information:');
//     studentsWithInfo.forEach((student) => {
//       console.log(`Student: ${student.name}`);
//       const informations = student.get('informations');
//       if (informations) {
//         informations.forEach((info) => {
//           console.log(`- Roll No: ${info.rollNo}, Grade: ${info.grade}, Age: ${info.age}, Detail: ${info.detail}`);
//         });
//       }
//     });
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });
// **********************************************************************************************************


// many to many 



// const Sequelize = require('sequelize');

// // Connect to the database
// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Define the Student model with a custom table name
// const Student = sequelize.define('student', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// }, {
//   tableName: 'studentAI' // Set the custom table name
// });

// // Define the Course model
// const Course = sequelize.define('course', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// // Define the join table (StudentCourse)
// const StudentCourse = sequelize.define('student_course', {
//   // No need for any fields in the join table for a basic many-to-many relationship
// });

// // Define the associations (many-to-many)
// Student.belongsToMany(Course, { through: StudentCourse });
// Course.belongsToMany(Student, { through: StudentCourse });

// // Synchronize the models with the database
// sequelize.sync({ force: true, alter: true, logging: console.log })
//   .then(() => {
//     // Insert data into the studentAI table
//     return Student.bulkCreate([
//       { name: 'John' },
//       { name: 'Jane' },
//       { name: 'Bob' },
//       { name: 'Alice' }
//     ]);
//   })
//   .then(() => {
//     // Insert data into the courses table
//     return Course.bulkCreate([
//       { name: 'Math' },
//       { name: 'History' },
//       { name: 'Physics' },
//       { name: 'English' }
//     ]);
//   })
//   .then(() => {
//     // Associate students with courses
//     return Promise.all([
//       Student.findByPk(1).then(student => student.addCourses([1, 2])),
//       Student.findByPk(2).then(student => student.addCourses([2, 3])),
//       Student.findByPk(3).then(student => student.addCourses([3, 4])),
//       Student.findByPk(4).then(student => student.addCourses([1, 4]))
//     ]);
//   })
//   .then(() => {
//     // Retrieve and display all students with associated courses
//     return Student.findAll({
//       include: [{ model: Course }]
//     });
//   })
//   .then((studentsWithCourses) => {
//     console.log('Students with Courses:');
//     studentsWithCourses.forEach((student) => {
//       console.log(`Student: ${student.name}`);
//       const courses = student.courses;
//       if (courses) {
//         courses.forEach((course) => {
//           console.log(`- Course: ${course.name}`);
//         });
//       }
//     });
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });
// ***********************************************************************************************************






















// const Sequelize = require('sequelize');

// // Connect to the database
// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Define the Student model with a custom table name
// const Student = sequelize.define('student', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// }, {
//   tableName: 'studentAI' // Set the custom table name
// });

// // Define the Course model
// const Course = sequelize.define('course', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// // Define the join table (StudentCourse)
// const StudentCourse = sequelize.define('student_course', {
//   // No need for any fields in the join table for a basic many-to-many relationship
// });

// // Define the associations (many-to-many)
// Student.belongsToMany(Course, { through: StudentCourse });
// Course.belongsToMany(Student, { through: StudentCourse });

// // Synchronize the models with the database
// sequelize.sync({ force: true, alter: true, logging: console.log })
//   .then(() => {
//     // Insert data into the studentAI table
//     return Student.bulkCreate([
//       { name: 'John' },
//       { name: 'Jane' },
//       { name: 'Bob' },
//       { name: 'Alice' }
//     ]);
//   })
//   .then(() => {
//     // Insert data into the courses table
//     return Course.bulkCreate([
//       { name: 'Math' },
//       { name: 'History' },
//       { name: 'Physics' },
//       { name: 'English' }
//     ]);
//   })
//   .then(() => {
//     // Associate students with courses
//     return Promise.all([
//       Student.findByPk(1).then(student => student.addCourses([1, 2])),
//       Student.findByPk(2).then(student => student.addCourses([2, 3])),
//       Student.findByPk(3).then(student => student.addCourses([3, 4])),
//       Student.findByPk(4).then(student => student.addCourses([1, 4]))
//     ]);
//   })
//   .then(() => {
//     // Retrieve and display all students with associated courses
//     return Student.findAll({
//       include: [{ model: Course }]
//     });
//   })
//   .then((studentsWithCourses) => {
//     console.log('Students with Courses:');
//     studentsWithCourses.forEach((student) => {
//       console.log(`Student: ${student.name}`);
//       const courses = student.courses;
//       if (courses) {
//         courses.forEach((course) => {
//           console.log(`- Course: ${course.name}`);
//         });
//       }
//     });
//   })
//   .catch((error) => {
//     console.error('Error:', error.message)
//   });

/************************************************************************************************************************************ */




//eager loading

// const { Sequelize, DataTypes } = require('sequelize');

// // Connect to the database
// const sequelize = new Sequelize('employeedb', 'root', '1234', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// // Define the Pixel model
// const Pixel = sequelize.define('Pixel', {
//   x: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   y: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// // Define the Color model
// const Color = sequelize.define('Color', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// // Define the association between Pixel and Color
// Pixel.belongsTo(Color);

// // Synchronize the models with the database
// sequelize.sync({ force: true })
//   .then(() => {
//     // Insert data into the Color table
//     return Color.bulkCreate([
//       { name: 'Red' },
//       { name: 'Green' },
//       { name: 'Blue' },
//       { name: 'Yellow' },
//     ]);
//   })
//   .then(() => {
//     // Insert random data into the Pixel table with associated Color
//     return Pixel.bulkCreate([
//       { x: 10, y: 20, ColorId: 1 },
//       { x: 30, y: 40, ColorId: 2 },
//       { x: 50, y: 60, ColorId: 3 },
//       { x: 70, y: 80, ColorId: 4 },
//     ]);
//   })
//   .then(() => {
//     // Retrieve Pixels with associated Color using eager loading
//     return Pixel.findAll({
//       include: [{ model: Color }],
//     });
//   })
//   .then((pixelsWithColor) => {
//     console.log('Pixels with Color (Eager Loading):');
//     pixelsWithColor.forEach((pixel) => {
//       console.log(`Pixel at (${pixel.x}, ${pixel.y}) with Color: ${pixel.Color.name}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });



/************************************************************************************************************************** */
//lazy loading 

const { Sequelize, DataTypes } = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('employeedb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Pixel model
const Pixel = sequelize.define('Pixel', {
  x: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  y: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define the Color model
const Color = sequelize.define('Color', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the association between Pixel and Color
Pixel.belongsTo(Color);

// Synchronize the models with the database
sequelize.sync({ force: true })
  .then(() => {
    // Insert data into the Color table
    return Color.bulkCreate([
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
      { name: 'Yellow' },
    ]);
  })
  .then(() => {
    // Insert random data into the Pixel table with associated Color
    return Pixel.bulkCreate([
      { x: 10, y: 20, ColorId: 1 },
      { x: 30, y: 40, ColorId: 2 },
      { x: 50, y: 60, ColorId: 3 },
      { x: 70, y: 80, ColorId: 4 },
    ]);
  })
  .then(() => {
    // Retrieve Pixels without eager loading
    return Pixel.findAll({ include: [] });
  })
  .then((pixels) => {
    console.log('Pixels with Color (Lazy Loading):');
    const result = pixels.map(async (pixel) => {
      // Use lazy loading to retrieve associated Color
      const color = await pixel.getColor();
      return {
        pixel: {
          x: pixel.x,
          y: pixel.y,
        },
        color: {
          id: color.id,
          name: color.name,
        },
      };
    });

    return Promise.all(result);
  })
  .then((jsonResult) => {
    console.log(JSON.stringify(jsonResult, null, 2));
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
