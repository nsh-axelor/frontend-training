import React from 'react'
import "./Body.css"
function Body() {
    return (
        <div className="bodyComponent">
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2hX38B7GAB9ArY_VfjF3nY1tk8tOsdg0oQ&usqp=CAU" alt="Nandit" />
            <h1>Hello My Name is Nandit!</h1>
            <div className="introducton">
                <p>
                    Hey There!!! My Name is Shah Nandit. I am an engineering student in the field of information & technology at Government Engineering College, Gandhinagar. I am currently in my last year of engineering.
                    <br />
                    <br />

                    I am born and brought up in Vadodara, Gujarat. My hobbies are reading and writing blogs, Learning new technolodgies and gettting knowlodge of stock market.
                    <br />
                    <br />
                    Currently I work as a React Developer Intern at Axelor India Limited where I have completed my 3 month and gained skills like Java, Git Version control,
                    Rest-Easy, Hibernate, JPA, HTML, CSS etc. And recently my frontend training has started.
                </p>
            </div>
        </div>
    )
}

export default Body
