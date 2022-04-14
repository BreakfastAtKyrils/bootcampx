const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

input = process.argv.slice(2);
const cohort_name = input[0];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = '${cohort_name}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${cohort}: ${user.teacher}`);
  })
});