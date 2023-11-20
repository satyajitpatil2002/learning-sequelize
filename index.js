const Sequelize = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('employeedb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the Student model with a custom table name
const Student = sequelize.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'studentAI' // Set the custom table name
});

// Define the Course model
const Course = sequelize.define('course', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Define the join table (StudentCourse)
const StudentCourse = sequelize.define('student_course', {
  // No need for any fields in the join table for a basic many-to-many relationship
});

// Define the associations (many-to-many)
Student.belongsToMany(Course, { through: StudentCourse });
Course.belongsToMany(Student, { through: StudentCourse });

// Synchronize the models with the database
sequelize.sync({ force: true, alter: true, logging: console.log })
  .then(() => {
    // Insert data into the studentAI table
    return Student.bulkCreate([
      { name: 'John' },
      { name: 'Jane' },
      { name: 'Bob' },
      { name: 'Alice' }
    ]);
  })
  .then(() => {
    // Insert data into the courses table
    return Course.bulkCreate([
      { name: 'Math' },
      { name: 'History' },
      { name: 'Physics' },
      { name: 'English' }
    ]);
  })
  .then(() => {
    // Associate students with courses
    return Promise.all([
      Student.findByPk(1).then(student => student.addCourses([1, 2])),
      Student.findByPk(2).then(student => student.addCourses([2, 3])),
      Student.findByPk(3).then(student => student.addCourses([3, 4])),
      Student.findByPk(4).then(student => student.addCourses([1, 4]))
    ]);
  })
  .then(() => {
    // Retrieve and display all students with associated courses
    return Student.findAll({
      include: [{ model: Course }]
    });
  })
  .then((studentsWithCourses) => {
    console.log('Students with Courses:');
    studentsWithCourses.forEach((student) => {
      console.log(`Student: ${student.name}`);
      const courses = student.courses;
      if (courses) {
        courses.forEach((course) => {
          console.log(`- Course: ${course.name}`);
        });
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
