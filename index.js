function runAdditionTest(studentAddFunction) {
    const testCases = [
        { input: [1, 2], output: 3 },
        { input: [4, 5], output: 9 },
        { input: [10, -5], output: 5 },
    ];

    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const input = testCase.input;
        const expectedOutput = testCase.output;

        let studentOutput;
        try {
            studentOutput = studentAddFunction(...input);
        } catch (error) {
            console.error(`Error executing student's code for test case ${i + 1}:`, error);
            continue;
        }

        if (studentOutput === expectedOutput) {
            console.log(`Test case ${i + 1} passed!`);
        } else {
            console.log(`Test case ${i + 1} failed. Expected ${expectedOutput}, but received ${studentOutput}.`);
        }
    }
}