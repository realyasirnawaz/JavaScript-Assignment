// alert("kiya javascript chll rhi hai ")

var subject1 = prompt("which subject you want to learn first") ;

var subject2 = prompt("which subject you want to learn After") ;

var subject3 = prompt("which subject you want to learn in Last") ;

var totalmarks = 100 ;
var fullTotalmarks = 300; 

var obtainedMarks1 = +prompt(`How much Numeber you got in ${subject1} `);

var subject1Percentage = obtainedMarks1  * 100 / totalmarks  + "%" ;

var obtainedMarks2 = +prompt(`How much Numeber you got in  ${subject2} ` );


var subject2Percentage = obtainedMarks2  * 100 / totalmarks    + "%"  ;


var obtainedMarks3 = +prompt(`How much Numeber you got in  ${subject3}`);


var subject3Percentage = obtainedMarks3  * 100 / totalmarks + "%" ; 


var totalobtainedmarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3 ;

// var totalobtainedmarks2 = marks.reduce( (a, b)  => a + b , 0 )

var Percentage = (totalobtainedmarks *100 / fullTotalmarks) + "%"  ;
// console.log( totalobtainedmarks *100 / fullTotalmarkstotalmarks)




document.write( `
            <table border="1">
            <tr>
            <th>Subject</th>
             <th>Totalmarks</th>
              <th>ObtainedMarks</th>
              <th>Percentage</th>
            </tr>
            <tr>
            <td> ${subject1}</td>
             <td> ${totalmarks}</td>
             <td> ${obtainedMarks1}</td>
              <td> ${subject1Percentage}</td>
            </tr>
             <tr>
            <td> ${subject2}</td>
             <td> ${totalmarks}</td>
             <td> ${obtainedMarks2}</td>
              <td> ${subject2Percentage}</td>
            </tr>
             <tr>
            <td> ${subject3}</td>
             <td> ${totalmarks}</td>
             <td> ${obtainedMarks3}</td>
              <td> ${subject3Percentage}</td>
            </tr>
           
             <tr>
             <td>Result</td>
            <td> ${fullTotalmarks}</td>
            <td> ${totalobtainedmarks}</td>
             <td> ${Percentage}</td>
              
            </tr>
            </table>
            `)
            