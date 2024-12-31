<h1 align="center">Tic Tac Toe</h1>

<p align="center">
  A classic game of Tic Tac Toe implemented in <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. 
  This project features a clean and interactive user interface, robust game logic, and support for both human vs. human 
  and human vs. AI gameplay.
</p>

---

<h2>Features</h2>
<ul>
  <li><strong>Dynamic Board Rendering:</strong> Real-time updates based on player actions.</li>
  <li><strong>Human vs. Human Mode:</strong> Two players can take turns competing.</li>
  <li><strong>AI Mode:</strong> Play against a simple AI with random move generation.</li>
  <li><strong>Game Logic:</strong> Detects wins, draws, and handles invalid moves.</li>
  <li><strong>Reset Button:</strong> Easily restart the game at any point.</li>
</ul>

---

<h2>Technologies Used</h2>
<ul>
  <li><strong>HTML5:</strong> For the structure and layout of the game.</li>
  <li><strong>CSS3:</strong> For styling the game board and user interface.</li>
  <li><strong>JavaScript (ES6):</strong> For game functionality and interactivity.</li>
</ul>

---

<h2>How to Play</h2>
<ol>
  <li><strong>Start the Game:</strong>
    <ul>
      <li>Open the game in your browser.</li>
      <li>Player 1 is <code>X</code>, and Player 2 (or AI) is <code>O</code>.</li>
    </ul>
  </li>
  <li><strong>Take Turns:</strong> Click on an empty cell to place your marker.</li>
  <li><strong>Win or Draw:</strong> The game detects a win or draw automatically and displays a message.</li>
  <li><strong>Reset:</strong> Click the "Reset" button to restart the game.</li>
</ol>

---

<h2>Project Structure</h2>
<ul>
  <li><strong><code>gameBoard</code>:</strong> Manages the board state, marker placement, win detection, and board reset.</li>
  <li><strong><code>gameController</code>:</strong> Handles player turns, switching between players, and resetting the game logic.</li>
  <li><strong><code>displayController</code>:</strong> Renders the game board, listens for user interactions, and updates the display.</li>
</ul>

---

<h2>Game Logic</h2>
<h3>Win Detection</h3>
<p>The game determines a win based on:</p>
<ul>
  <li><strong>Rows:</strong> All cells in a row have the same marker (<code>X</code> or <code>O</code>).</li>
  <li><strong>Columns:</strong> All cells in a column have the same marker.</li>
  <li><strong>Diagonals:</strong> Both diagonals are checked for identical markers.</li>
</ul>

<h3>AI Behavior</h3>
<p>The AI chooses a random empty cell for its move.</p>

---

<h2>Getting Started</h2>
<h3>Clone the Repository</h3>
<pre>
<code>
git clone https://github.com/&lt;your-username&gt;/tic-tac-toe.git
cd tic-tac-toe
</code>
</pre>

<h3>Open in Browser</h3>
<ol>
  <li>Open the <code>index.html</code> file in your browser.</li>
  <li>Start playing—no additional setup required.</li>
</ol>

---

<p><em>(Add your screenshots in the <code>screenshots</code> folder and update the links above.)</em></p>

---

<h2>Future Enhancements</h2>
<ul>
  <li><strong>Smarter AI:</strong> Use a minimax algorithm for strategic gameplay.</li>
  <li><strong>Customizable Board Sizes:</strong> Enable larger or custom grids.</li>
  <li><strong>Player Names:</strong> Allow players to input their names.</li>
  <li><strong>Score Tracker:</strong> Track wins, losses, and draws over multiple rounds.</li>
</ul>

---

<h2>License</h2>
<p>This project is for <strong>practice and learning purposes</strong> and is not intended for production use. Feel free to use or modify the code.</p>
