SELECT SUM(assignment_submissions.duration) as total_duration
FROM assignment_submissions 
INNER JOIN students ON assignment_submissions.student_id = students.id
WHERE students.name = 'Ibrahim Schimmel';
ON students.cohort_id = cohorts.id
WHERE FROM cohort.name = 'FEB12';

