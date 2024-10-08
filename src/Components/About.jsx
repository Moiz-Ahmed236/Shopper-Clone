import React from 'react'


const About = () => {
  return (
       <>
         <div className="container my-3 py-3">
        <h1 className="h1-1">About Us</h1>
        <hr />
        <p className="lead text-center">
        <b> Welcome to Shopper</b>, your one-stop destination for stylish and affordable fashion. We believe that everyone deserves to feel confident and look their best, no matter the occasion. That’s why we’ve curated a wide range of clothing for both MEN, WOMEN & also KIDS, designed to suit every style, preference, and budget.
        <br></br>
        At <b>Shopper</b>, fashion is more than just trends—it’s about expressing yourself. Our collections are thoughtfully selected, keeping comfort, quality, and uniqueness in mind. From timeless classics to the latest trends, we offer everything from casual wear to statement pieces, ensuring you find something you love.
        <br></br>
        We take pride in delivering an exceptional shopping experience with customer satisfaction as our top priority. With fast shipping, secure payments, and friendly customer support, we’re here to make your fashion journey seamless and enjoyable.
        </p>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card-101">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card-102">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card-103">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card-104">
              <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-17313.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Kids Clothing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </>
  )
}

export default About
