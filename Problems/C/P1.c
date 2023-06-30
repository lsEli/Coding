#include <stdio.h>

#define ROWS 10 // Defines the size of the maze
#define COLS 10 // Defines the size of the maze
#define USI unsigned short int // Defines an alias for unsigned short int
#define SI short int // Defines an alias for short int

// Print the maze
void printMaze(char maze[ROWS][COLS]) {
    for (USI row = 0; row < ROWS; row++) {
        for (USI column = 0; column < COLS; column++) {
            printf("%c ", maze[row][column]);
        }
        printf("\n");
    }
}

// Solve the maze
unsigned short int solveMaze(char maze[ROWS][COLS], SI startRow, SI startCol, SI endRow, SI endCol) {
    if (startRow < 0 || startRow >= ROWS || startCol < 0 || startCol >= COLS || maze[startRow][startCol] != ' ') {
        return 0; // if the coordinates are invalid or do not represent a valid path
    }

    if (startRow == endRow && startCol == endCol) {
        maze[startRow][startCol] = 'S';
        return 1; // if the exit has been reached
    }

    maze[startRow][startCol] = '.'; // Set the current cell as visited

    // Check if there is a path to the exit from the current cell
    if (solveMaze(maze, startRow - 1, startCol, endRow, endCol)) { // Up movement
        maze[startRow][startCol] = 'S'; // Draw the path to the exit
        return 1; // if the exit has been reached
    }
    if (solveMaze(maze, startRow + 1, startCol, endRow, endCol)) { // Down movement
        maze[startRow][startCol] = 'S';
        return 1;
    }
    if (solveMaze(maze, startRow, startCol - 1, endRow, endCol)) { // Left movement
        maze[startRow][startCol] = 'S';
        return 1;
    }
    if (solveMaze(maze, startRow, startCol + 1, endRow, endCol)) { // Right movement
        maze[startRow][startCol] = 'S';
        return 1;
    }

    return 0; // if a solution was not found
}

// Main function
int main() {
    char maze[ROWS][COLS] = {
        {' ', 'X', ' ', ' ', ' ', ' ', 'X', 'X', 'X', 'X'},
        {' ', 'X', 'X', 'X', 'X', ' ', 'X', ' ', ' ', 'X'},
        {' ', 'X', ' ', ' ', 'X', ' ', 'X', 'X', ' ', 'X'},
        {' ', 'X', 'X', ' ', 'X', ' ', ' ', ' ', ' ', 'X'},
        {' ', 'X', ' ', ' ', 'X', 'X', 'X', 'X', ' ', 'X'},
        {' ', 'X', 'X', 'X', ' ', ' ', ' ', 'X', ' ', 'X'},
        {' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X'},
        {' ', ' ', ' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X'},
        {'X', 'X', 'X', 'X', ' ', 'X', ' ', 'X', ' ', 'X'},
        {' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X'}
    }; // Maze to be solved

    USI startRow = 0; // Starting coordinates
    USI startCol = 0; // Starting coordinates
    USI endRow = 9; // Ending coordinates
    USI endCol = 9; // Ending coordinates

    printf("Maze:\n"); 
    printMaze(maze); // Print the maze

    if (solveMaze(maze, startRow, startCol, endRow, endCol)) { // Call the function to solve the maze
        printf("\nSolved Maze:\n");
        printMaze(maze); // Print the solved maze
    } else {
        printf("\nNo solution found for the maze.\n"); // if a solution was not found
    }

    return 0;
}
