<h1>🔐 React Password Generator</h1>
A highly efficient and responsive password generator built with React and Tailwind CSS. This project was developed as part of a learning journey inspired by the Chai aur Code YouTube series to master React Hooks and logic-building. 

<h2>🚀 Features</h2>
Customizable Length: Adjust password length (8–20 characters) using a range slider.
Dynamic Options: Toggle inclusion of Numbers and Special Characters (e.g., !@#$%^&*?).
One-Click Copy: Instantly copy the generated password to your clipboard.
Real-time Updates: Passwords regenerate automatically whenever settings change. 

<h2>🛠️ Tech Stack & Concepts</h2>
This project focuses on the core principles of React:
<ol>
  <li>useState: Manages the state of the password, length, and character permissions.</li>
  <li>useRef: Used for the "Copy to Clipboard" functionality to provide a better user experience by selecting the input text.</li>
  <li>useCallback: Memoizes the passwordGenerator function to prevent unnecessary re-creations on every render, optimizing performance.</li>
  <li>useEffect: Synchronizes the UI by triggering the generator whenever dependencies like length or character toggles change.</li>
</ol>
Tailwind CSS: For a clean, modern, and dark-themed UI.
