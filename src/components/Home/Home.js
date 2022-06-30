import React from "react";
import headerImage from "../../img/Airplane2.jpeg";
import familyImage from "../../img/Family_with_Luggage2.jpeg";
import staffImage from "../../img/Airport_Staff.jpeg";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="container home">
      <header className="content-section">
        <img src={headerImage} alt="" />
        <h1 className="fun-bus-img">Welcome To KidsFlyy</h1>
        <p>
          As a parent, it's next to impossible to fly if you have multiple kids.
          Holding a baby while trying to carry your own luggage, the baby's
          luggage, the toddler's luggage, the carseat, the stroller, etc. is
          physically impossible. KidsFly alerts airport staff when you arrive to
          have an airport employee ready at the curb when you arrive.
        </p>
      </header>
      <div className="inverse-content"></div>
      <section class="content-section">
        <div class="text-content">
          <h2>Let's Go!</h2>

          <p>
            Flying with young children can be a challenge. Has this ever
            happened to you? You arrive either late or with only a few minutes
            to spare, and you now have to juggle a million things.
          </p>
          <p>
            You are thinking there is no way you are making this flight and you
            just want to give up.
          </p>
        </div>
        <div class="img-content">
          <img src={familyImage} alt="A Family with tons of Luggage" />
        </div>
      </section>
      <section class="content-section inverse-content">
        <div class="img-content">
          <img
            src={staffImage}
            class="img-fluid rounded"
            alt="curbside with airport staff helping parent."
          />
        </div>
        <div class="text-content">
          <h2>Help Arrives</h2>
          <p>
            With KidsFlyy you can now arrange for someone to help yoiu carry all
            of the things you need to make your trip worthwhile. When you leave
            for the airport, just click a button and it will alert airport staff
            you are on your way. One more click whne you arrive and it's smooth
            sailing to the gate. The only things you need to worry aboutis
            getting the humans to the gate.
          </p>
        </div>
      </section>
      <section class="content-section">
        <h2>Pick Your Destination</h2>
        <p>
          KidsFlyy is available with most airlines in major cities. When you
          plan your trip, you can look up where we are and pre-arrange your
          help. If you decide you don't need help after all, no worries just
          click on cancel. There are no cancelllation fees.
        </p>
      </section>
      <Footer />
    </div>
  );
}
