let studentCount = 16;
let mentorCount = 9;
let moreStudentsThanMentors = studentCount > mentorCount;
let roomMaxCapacity = 25;
let enoughSpaceInRoom = studentCount + mentorCount === 25;
let personA = 'Milvia'
let personB = 'Dayana'
let sameName = 'Milvia' === 'Dayana';


console.log("¿Hay más alumnos que mentores?", moreStudentsThanMentors);
console.log(
    "¿Hay suficiente espacio en la sala para todos los estudiantes y mentores?",
    enoughSpaceInRoom
);
console.log("¿La persona A y la persona B tienen el mismo nombre?", sameName);