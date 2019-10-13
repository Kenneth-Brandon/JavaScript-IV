// CODE here for your Lambda Classes

// Base Class Person
class Person {
    constructor(attribute){
      this.name = attribute.name;
      this.age = attribute.age;
      this.location = attribute.location
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
  }
  
  // Instructor, of Person
  class Instructor extends Person {
    constructor(attribute){
      super(attribute);
      this.specialty = attribute.specialty;
      this.favLanguage = attribute.favLanguage;
      this.catchPhrase = attribute.catchPhrase;
    }
    demo(subject){
      return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
      return `${student} receives a perfect score on ${subject}`
    }
    //Stretch Goal -- add inability to exceed 100
    checkWork(student){
      let number = Math.floor(Math.random()*10); // math.floor returns largest integer less than or equal to a given number and math.random will give a random number between 0 and 0.99
      let determinant = Math.random();
      if(determinant > .5){
      student.grade = student.grade - number;
      console.log(`${this.name} is grading ${student.name}\'s work for a reduction of ${number} resulting in a grade of ${student.grade}`)} else {
        student.grade = student.grade + number;
        console.log(`${this.name} is grading ${student.name}\'s work for an increase of ${number} resulting in a grade of ${student.grade}`)};
      return student.grade;
    }
  }
  
  //Student, of Person
  class Student extends Person{
    constructor(attribute){
      super(attribute);
      this.previousBackground = attribute.previousBackground;
      this.className = attribute.className;
      this.favSubjects = attribute.favSubjects;
      this.grade = attribute.grade;
      this.canGraduate = attribute.canGraduate;
    }
    listsSubjects(){
      return `${this.favSubjects}`;
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate(){
      if(this.grade > 70){
        this.canGraduate = true;
        console.log(`${this.name} can graduate`)
        return this.canGraduate;
      } else if(this.grade < 70) {
        this.canGraduate = false;
        console.log(`${this.name} cannot graduate`)
        return this.canGraduate;
      }
    }
  }
  
  // ProjectManager, of Person-->Instructor
  class ProjectManager extends Instructor{
    constructor(attribute){
      super(attribute);
      this.gradClassName = attribute.gradClassName;
      this.favInstructor = attribute.favInstructor;
    }
    standUp(channel){
      return `${this.name} announces to ${channel} @channel standy times`;
    }
    debugsCode(studentObject, subject){
      return `${this.name} debugs ${studentObject.name}\'s code on ${subject}`
    }
  }
  
  // Instructor Instantiations
  const instructorOne = new Instructor({
    name: 'Pace',
    age: 35,
    location: 'Arizona',
    specialty: 'HTML, CSS, Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Good luck!'
  });
  
  const instructorTwo = new Instructor({
    name: 'Ryan',
    age: 34,
    location: 'California',
    specialty: 'Javascript, React',
    favLanguage: 'Javascript',
    catchPhrase: 'Go get \'em tiger!'
  });
  
  const instructorThree = new Instructor({
    name: 'Josh',
    age: 40,
    location: 'Utah',
    specialty: 'HTML, CSS, Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Break a leg!'
  });
  
  // Student Instantiations
  const studentOne = new Student({
    name: 'Kenneth',
    age: 36,
    location: 'Arizona',
    previousBackground: 'Web Content Editor',
    className: 'WEB PT 11',
    favSubjects: 'Unk',
    grade: 10,
    canGraduate: '',
  })
  
  const studentTwo = new Student({
    name: 'Mike',
    age: 26,
    location: 'Michigan',
    previousBackground: 'Graphic Design',
    className: 'WEB PT 11',
    favSubjects: 'Adobe Premier',
    grade: 89,
    canGraduate: '',
  })
  const studentThree = new Student({
    name: 'Nate',
    age: 24,
    location: 'New York',
    previousBackground: 'Gas Station Clerk',
    className: 'WEB PT 11',
    favSubjects: 'C#',
    grade: 88,
    canGraduate: '',
  })
  
  //ProjectManager Instantiations
  const pmOne = new ProjectManager({
    name: 'Bradley',
    age: 28,
    location: 'Russia',
    gradClassName: 'WEB19',
    favInstructor: 'Josh'
  })
  
  const pmTwo = new ProjectManager({
    name: 'Sam',
    age: 28,
    location: 'California',
    gradClassName: 'WEB20',
    favInstructor: 'Ryan'
  })
  
  const pmThree = new ProjectManager({
    name: 'Julie',
    age: 25,
    location: 'Texas',
    gradClassName: 'WEB17',
    favInstructor: 'Josh'
  })
  
  
  //Instructor Tests
  console.log(instructorOne.speak());
  console.log(instructorTwo.speak());
  console.log(instructorThree.speak());
  
  //Student Tests
  console.log(studentOne.speak());
  console.log(studentTwo.speak());
  console.log(studentThree.speak());
  console.log(studentOne.grade);
  console.log(studentTwo.grade);
  console.log(studentThree.grade);
  console.log(studentOne.listsSubjects());
  console.log(studentTwo.PRAssignment('JS IV'));
  console.log(studentThree.sprintChallenge('PreProcessing II'));
  
  //ProjectManager Tests
  console.log(pmOne.speak());
  console.log(pmTwo.speak());
  console.log(pmThree.speak());
  console.log(pmThree.favInstructor);
  console.log(pmOne.standUp('WEB23'));
  console.log(pmThree.debugsCode(studentTwo, 'JSII'));
  
  // Streth Goal Test
  
  console.log(pmThree.checkWork(studentOne));
  console.log(pmOne.checkWork(studentTwo));
  console.log(pmTwo.checkWork(studentThree));