// Access command-line arguments
console.log('Command-line Arguments:', process.argv);

// Access environment variables
console.log('Environment Variable:', process.env); // On Windows, use USERNAME

// Display the current working directory
console.log('Current Working Directory:', process.cwd());

// Exit the process manually
if (!process.env.USERNAME) {
    console.error('Username is not defined!');
    process.exit(1); // Exit with an error code
}
