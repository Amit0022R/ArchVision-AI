import { Box } from 'lucide-react'
import React from 'react'
import Button from './ui/Button';

const Navbar = () => {


    const isSignedIn = false;
    const username = "amit";

    
    const handleAuthClick = async () => {
        // console.log("Auth clicked");
    }


  return (
    <header className="navbar">
        <nav className="inner">
            <div className="left" >
                <div className="brand">
                    <Box className="logo" />
                    <span className="name">ArchVision AI</span>
                </div>

                <ul className="links" >
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Community</a>
                    <a href="#">Enterprise</a>                   
                </ul>
            </div>

            <div className="actions">

                {isSignedIn ? (
                    <>
                       <span className="greeting" >{username ? `hi, ${username}` : "Signed in"}</span>

                       <Button size='sm' onClick={handleAuthClick} className="btn" >Logout</Button>
                    </>
                ) : (
                    <>
                        <Button size='sm' onClick={handleAuthClick} variant='ghost' >
                            Log In
                        </Button>

                        <a href="#upload" className="cta" >Get Started</a>
                    </>
                )}

            </div>
        </nav>
    </header>
  )
}

export default Navbar