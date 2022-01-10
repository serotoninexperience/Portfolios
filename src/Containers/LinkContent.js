import React from 'react'
import ProfileImg from 'Components/ProfileImg'
import Link from 'Components/Link'
import links from 'Data/Links/Links'
import '../Styles/styles.css'

export default function LinkContent() {
    return (
        <div className='links-content' style={{backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F7qOwD8U.jpg&f=1&nofb=1)`, backgroundSize: 'cover'}}>
            <ProfileImg img={"https://i.imgur.com/hxmTqUn.jpg?1"}/>

            <div className='links-profile-info'>
                <h3 className='links-profile-header'>Name of Creator</h3>
        
                <p className='links-profile-para'>Let's talk about who we are for a bit, I want to introduce myself to these beautiful people</p>
                <hr className='header-underline'></hr>
            </div>

            {links.map((link, key) => {
                return <Link img={link[0]} title={link[2]} link={link[1]} media={link[3]} key={`social-link-${key}`}/>
            })}

            <div className='logo-clicker'>

            </div>
        </div>
    )
}
