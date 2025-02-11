import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Descripition</li>
              <li>Investor Relation</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>help center</li>
              <li>Jobs</li>
              <li>cookie preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of use</li>
              <li>corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>privacy</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>
            Service Code
          </p>
        </div>
        <div className="copy-write">
          &copy; 1997-2024 Netflix, inc
        </div>
      </div>

    </div>
  )
}

export default Footer