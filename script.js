 let currentPlayer = 'X';
        let board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];

        function checkWinner() {
            const winningCombinations = [
                [[0, 0], [0, 1], [0, 2]],
                [[1, 0], [1, 1], [1, 2]],
                [[2, 0], [2, 1], [2, 2]],
                [[0, 0], [1, 0], [2, 0]],
                [[0, 1], [1, 1], [2, 1]],
                [[0, 2], [1, 2], [2, 2]],
                [[0, 0], [1, 1], [2, 2]],
                [[0, 2], [1, 1], [2, 0]],
            ];

            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
                    return true;
                }
            }

            return false;
        }

        function checkDraw() {
            return board.flat().every(cell => cell !== '');
        }

        function makeMove(row, col) {
            if (board[row][col] === '' && !checkWinner() && !checkDraw()) {
                board[row][col] = currentPlayer;
                document.getElementsByTagName('th')[row * 3 + col].innerText = currentPlayer;
        
                if (checkWinner()) {
                    displayResult('Gracz ' + currentPlayer + ' wygrał!');
                } else if (checkDraw()) {
                    displayResult('Remis!');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }
        
        function displayResult(resultText) {
            const resultDiv = document.getElementById('result');
            const resultTextElement = document.getElementById('result-text');
            resultTextElement.innerText = resultText;
            resultDiv.classList.remove('hidden');
        }
        
        function restartGame() {
            board = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        
            const cells = document.getElementsByTagName('th');
            for (let i = 0; i < cells.length; i++) {
                cells[i].innerText = '';
            }
        
            const resultDiv = document.getElementById('result');
            resultDiv.classList.add('hidden');
        
            currentPlayer = 'X';
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            const resultDiv = document.getElementById('result');
            resultDiv.classList.add('hidden');
        });