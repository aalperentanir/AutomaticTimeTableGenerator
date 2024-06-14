# Genetic Algorithm for Optimized Exam/Course Schedule
##Overview
The Genetic Algorithm (GA) is an optimization technique inspired by biological evolution, used here to create an optimized exam or course schedule. This approach mimics natural selection and genetic recombination to iteratively improve schedules based on specified criteria.

## Project Goals:
The goal of this project is to automate the creation of optimized schedules using genetic algorithms. Key objectives include:

- **Importing Data:** Data from test_data.xlsx, including instructor availability, classroom details, and department requirements, is imported for scheduling.

- **Optimization:** Using GA to generate optimal schedules for each department, considering instructor availability, classroom suitability, and other constraints.

**User Interaction:** Providing an interface where administrators and instructors can interact:

- **Admin:** Can create, update, and manage schedules; update instructor information and classroom status.
- **Instructor:** Can specify availability, which influences schedule generation.
- **Output:** Schedules are presented in PDF format, accessible via a web interface for students and downloadable as detailed PDFs.

### Genetic Algorithm Steps
**1. Initial Population Creation:** Randomly generate an initial population of schedules.

**2. Fitness Function Definition:** Evaluate each schedule based on constraints and objectives (e.g., minimizing overlaps, meeting availability).

**3. Selection:** Choose schedules with higher fitness to proceed to the next generation.

**4. Crossover:** Combine selected schedules to create new offspring with varied characteristics.

**5. Mutation:** Introduce random changes to offspring to maintain diversity and explore new solutions.

**6. New Population:** Form a new population from selected offspring and mutated individuals.

**7. Termination:** Repeat steps 2-6 until termination conditions are met (e.g., number of generations, desired fitness level).

### Benefits
- **Efficiency:** Reduces manual effort and time spent on scheduling.
- **Optimization:** Uses AI to find better solutions than traditional methods.
- **Flexibility:** Allows for adjustments based on instructor feedback and changing constraints.

### Implementation
The application leverages genetic algorithms to intelligently schedule exams or courses, promoting efficient use of resources and satisfying various constraints. This approach not only automates scheduling but also improves the overall quality of schedules generated.

