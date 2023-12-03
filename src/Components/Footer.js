import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div class="footer">
    <div class="footer-ul">

        <ul class="space">

            <li class="head-li">Company</li>
            <li>About us</li>
            <li>Jobs</li>
            <li>For the Record</li>
        </ul>
        <ul class="space">
            <li class="head-li">Communities</li>
            <li>For Artists </li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investers</li>
            <li>Vendors</li>
        </ul>

        <ul class="space">
            <li class="head-li">Useful links</li>
            <li>Support</li>
            <li>Free Mobile App</li>
        </ul>


    </div>
    <span class="footer-social-links">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-facebook"></i>
    </span>
</div>
  )
}

export default Footer