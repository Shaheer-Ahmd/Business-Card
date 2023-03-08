import react from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
export default function Footer() {
    return (
        <div className = "logos">

        <a href = "https://www.facebook.com"><img src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png" alt = "facebook" /></a>
        <a href = "https://www.linkedin.com/in/shaheer-ahmad-1ba9aa247/"><img src = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt = "linkedin"/></a>
        <a href = "https://www.github.com/Shaheer-Ahmd"><img src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt = "github"/></a>
        </div>
    );
    }