const { Command } = require('commander');
const fs = require('fs');

const program = new Command();
const filePath = 'todo.json';


const readData = () => {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath));
};


const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); //null =>all properties is included and 2 for spaces in writing
};

program
    .command('add')
    .description('add a new to-do entry')
    .option('-t, --title <title>', 'Title of the entry')
    .action((options) => {
        if (!options.title) {
            console.error('error: Title is required!');
            process.exit(1);
        }

        const todos = readData();
        const newEntry = { id: todos.length + 1, title: options.title };
        todos.push(newEntry);
        writeData(todos);

        console.log(`Added new entry: ${newEntry.title} with ID ${newEntry.id}`);
    });


program
    .command('list')
    .description('List all to-do entries')
    .action(() => {
        const todos = readData();
        if (todos.length === 0) {
            console.log('No entries found.');
        } else {
            console.log('To-Do List:');
            todos.forEach((todo) => console.log(`ID: ${todo.id} - ${todo.title}`));
        }
    });

program
    .command('edit')
    .description('edit a to-do entry')
    .option('-i, --id <id>', 'ID of the entry to edit')
    .option('-t, --title <title>', 'eew title')
    .action((options) => {
        if (!options.id || !options.title) {
            console.error('error: ID and title are required!');
            process.exit(1);
        }

        const todos = readData();
        const index = todos.findIndex(todo => todo.id === parseInt(options.id));

        if (index === -1) {
            console.error(`error: no entry found with ID ${options.id}`);
            process.exit(1);
        }

        todos[index].title = options.title;
        writeData(todos);
        console.log(`entry ID ${options.id} updated to "${options.title}"`);
    });


program
    .command('delete')
    .description('Delete a to-do entry')
    .argument('<id>', 'ID of the entry to delete')
    .action((id) => {
        const todos = readData();
        const newTodos = todos.filter(todo => todo.id !== parseInt(id));

        if (todos.length === newTodos.length) {
            console.error(`error: No entry found with ID ${id}`);
            process.exit(1);
        }

        writeData(newTodos);
        console.log(`entry ID ${id} deleted successfully.`);
    });


program.parse(process.argv);
