class Example {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    greet(name: string): string {
        return `${this.greeting}, ${name}!`;
    }
}

// Creating an instance of the Example class
const exampleInstance = new Example("Hello");

// Calling the greet method
const message = exampleInstance.greet("John");

console.log(message); // Output: Hello, John!
