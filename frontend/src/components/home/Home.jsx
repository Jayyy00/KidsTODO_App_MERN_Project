import React from 'react';
import "./home.css";

const home = () => {
  return <div className="home ">
    <div className="container">
        <h1>
            Hello,<br/> Organize your <br/> studies and works,
            </h1>
            <p>become focused,organized,and clam with<br/> todo 
            app.The World's #1st kids task manager app.
             </p>
            <button className="home-btn p-3">Get Start</button>
            <img className="img-fluid homeback-jpg " src="https://lapbnl.in/wp-content/uploads/2022/08/a-1.webp"alt="/"/>
    </div>
    </div>;
  
};

export default home;