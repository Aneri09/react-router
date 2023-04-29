import React from 'react'
import Nav from './Nav'
import { Container } from '@chakra-ui/react'

function About() {
  return (
    <div >
      <Nav />

      <h6>Our Values.</h6>
      <p>Simplicity. Timelessness. Longevity.<br /><br />
        We're a team of designers endlessly inspired by the timeless elegance and innovative thought leadership of Apple. We created a destination that combines beautiful technology, with accessories we design to enhance your enjoyment with your favourite tech.
        <br /><br />
        Our products are designed to be cleverly functional whilst showcase elegant simplicity. We produce using high quality materials and processes, creating products that we hope you will enjoy using for many years. In a world of fast technology, we create slow products designed to last.
        <br /><br />
        Our range consists of considered personal tech accessories, and solutions designed for business, enterprise and education environments.

      </p>

      <h6>Born in Melbourne. Loved Globally.</h6>

      <p>Melbourne is Design.  From the buildings and public spaces to its cafes and restaurants, design is the defining feature of every space and experience.  We love sharing the streets of Melbourne with many great designers and a vibrant design community. We thrive on being a part of a city that lives and breathes the creation and enjoyment of great design.
      <br/><br/>
        Whilst we call Melbourne home, we ship to every corner of the globe, and pride ourselves on being your global source for the best in Apple accessories.

      </p>
      <img  className='center'  src="https://cdn.shopify.com/s/files/1/0597/6593/files/dukes_mel_r_supplied_253-V1_1150x863_93e54cce-3568-47c3-86ff-76baf448b393_2048x2048.jpg?v=1613091158" alt="" />

      <p>What started out as a single product launched in 2010, has grown to become a market defining line of modular accessories and cases for the iPad,  iPhone and Apple Watch. Proper products are loved by tech design enthusiasts globally, as well as businesses looking for innovative, experience centric device integration. Our simple mission? To create Proper technology experiences.</p>

      <h6>Business Solutions.</h6>

      <p>Not only are Apple products the leading choice amongst consumers, businesses are also leveraging powerful apps that deliver leading experience across internal and customer facing experiences.</p>

      <img className='center' src="https://cdn.shopify.com/s/files/1/0597/6593/files/biasol-no19-12-lr_1024x1024.jpg?v=1613090336" alt="" />

      <h6>Education.</h6>

      <p>Every child is born full of creativity. Nurturing it is one of the most important things educators do. Creativity makes your students better communicators and problem solvers. It prepares them to thrive in todays world — and to shape tomorrow’s. Apple is constantly creating resources to help educators do just that. Not only powerful products, but also tools, inspiration and curriculums to create magical learning experiences and make every moment of screen time worth it.<br/><br/>
      Apple products give students complete freedom of expression. iPad is so intuitive, anyone can instantly take an idea and run with it. Mac provides the power to pursue the most ambitious projects. Students can even start creating on iPad, then pick up where they left off on Mac. And with all-day battery life, iPad and Mac keep going long after the last class is over.
      </p>

    </div>

  )
}

export default About
