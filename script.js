// تعريف مصفوفه الطلاب اولا 
const students = [
    { id: 1, average: 85},
     { id: 2, average: 42},       // طالب متعثر
    { id: 3, average: 90},
    { id: 4, average: 48},        // طالب متعثر
];


// تصفيه المتعثرين واضافه درجات الرافه 

const stugglingStudesnts = students.filter( s => s.average >= 40 && s.average <= 49);

const upgradedGrades = stugglingStudesnts.map(s => s.average + 5);

// جمع الدرجات بعد التعديل 

const totalUpgraded = upgradedGrades.reduce((sum, grade) => sum + grade, 0);


// حساب المتوسط مع درع الحمايه 

let upgradeAverage =0;
if(stugglingStudesnts.length > 0){
    upgradeAverage = totalUpgraded / stugglingStudesnts.length;}

    console.log("متوسط درجات الطلاب بعد الرافه: ",  upgradeAverage );