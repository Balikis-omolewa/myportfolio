import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <a><img src="img/logo-footer.png" alt="logo" className="logo" /></a>
                <div className="menu">
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="social-icons">
                    <a href="#"> <i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                    <a href="#"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bx-git-branch'></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer