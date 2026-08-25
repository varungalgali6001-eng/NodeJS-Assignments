const fs = require("fs");

const originalFileName = "student.txt";
const newFileName = "studentDetails.txt";

// Task 1: Create file
function createStudentFile() {
    const studentInfo =
        "Name: Varun Galgali\nCourse: Full Stack Development\nTechnology: Node.js\n";

    fs.writeFile(originalFileName, studentInfo, (err) => {
        if (err) {
            console.log("Error creating file");
            return;
        }

        console.log("Task 1: File created successfully");
        readStudentFile();
    });
}

// Task 2: Read file
function readStudentFile() {
    fs.readFile(originalFileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("\nTask 2: File content:");
        console.log(data);

        updateStudentFile();
    });
}

// Task 3: Add more information
function updateStudentFile() {
    const additionalInfo =
        "Experience: 1 Year\nCity: Kolkata\n";

    fs.appendFile(originalFileName, additionalInfo, (err) => {
        if (err) {
            console.log("Error updating file");
            return;
        }

        console.log("Task 3: Data updated successfully");

        fs.readFile(originalFileName, "utf8", (err, data) => {
            if (err) {
                console.log("Error reading updated file");
                return;
            }

            console.log("\nUpdated file content:");
            console.log(data);

            renameStudentFile();
        });
    });
}

// Task 4: Rename file
function renameStudentFile() {
    fs.rename(originalFileName, newFileName, (err) => {
        if (err) {
            console.log("Error renaming file");
            return;
        }

        console.log("\nTask 4: File renamed successfully");
        deleteStudentFile();
    });
}

// Task 5: Delete file
function deleteStudentFile() {
    fs.unlink(newFileName, (err) => {
        if (err) {
            console.log("Error deleting file");
            return;
        }

        console.log("\nTask 5: File deleted successfully");
        console.log("\nAll tasks completed successfully!");
    });
}

createStudentFile();