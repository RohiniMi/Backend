Why Does Sync Code Run First?
Synchronous Code (Blocking)

Executes immediately and blocks the event loop until the task is complete.
The code execution stops until the synchronous task is done.
Asynchronous Code (Non-Blocking)

Executes the asynchronous task (like fs.readFile) and then continues executing the next lines of code without waiting for the async task to complete.
The actual async operation is handled in the background via Node.js's event loop and callback queue.

file operations
1) read   fs.readFile(), fs.readFileSync()
2) write  fs.writeFile(), fs.writeFileSync()
3) append  fs.appendFile(), fs.appendFileSync()
4) delete  fs.unlink(), fs.unlinkSync()
5) rename   fs.rename(), fs.renameSync()

Directory operation

1) create dir    mkdir(), mkdirSync()
2) read dir      readdir(), readdirSync()
3) delete dir    rmdir(), rmdirSync()
4) rename        fs.rename(), fs.renameSync()