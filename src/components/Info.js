import react from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

export default function Info() {
  return (
    <div className = 'Info'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
      <h1>Shaheer Ahmad</h1>
      <h2>Front end react developer</h2>
      <button><a href = "mailto:shaheerahmad57575@gmail.com">Email</a></button>
      <button><a href = "https://www.linkedin.com/in/shaheer-ahmad-1ba9aa247/">Linkedin</a></button>
    </div>
  );
}