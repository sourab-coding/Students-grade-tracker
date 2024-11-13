const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 45 },
    { name: "Charlie", grade: 75 },
    { name: "Diana", grade: 40 },
  ];

function studentsdeatilstrack () {
    const avaragecal =  students.reduce((acc , curr)  => acc + curr.grade ,0)
    const toatlavrage = avaragecal / students.length
    console.log(`The Class Avarage is : ${toatlavrage}`)

    const findhighgradestudents = students.find((hightgrade) => hightgrade.grade)
    console.log(`The Class highest grade is : ${findhighgradestudents.name} and grade is ${findhighgradestudents.grade}`);

    console.log(`heigh score students`);
    
    const findhighgrade = students.filter(grades => grades.grade > 50 )
    if(findhighgrade){
        const mappassed = findhighgrade.map((passed) => ({
            names: passed.name,
            grade : passed.grade ,
            message : `good work`
        }))
        console.log(mappassed);
    }

    console.log(`low score students`);
    
    const lowescore = students.filter(studentslowscore => studentslowscore.grade < 50)
    if(lowescore){
        const maplowscorestduents = lowescore.map((lowescorestudents) => ({
            names : lowescorestudents.name,
            grade : lowescorestudents.grade,
            message : 'Next time work hard' 
        }))
        console.log(maplowscorestduents);
        
    }
  
    
    
}
studentsdeatilstrack()