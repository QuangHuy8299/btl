import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const OfferCollection = props => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('July 05, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  })

  return (
    <div className="offer-colection-area container-fluid">
      <div className="section-space--ptb_120 bg-img countdown-img">
        <div className="row">
          <div className="container">
            <div className="row pl-md-0 pl-3 pr-md-0 pr-3">
              <div className="col-lg-7 col-md-7">
                <div className="colection-info-wrap">
                  <div className="section-title mb-30">
                    <h2 className="section-title--one ">
                      Deco Collection
                    <span className="text-red">50% OFF</span>
                    </h2>
                  </div>
                  <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced for those. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum</p>
                  <div className="timer text-center section-space--mt_60">
                    <div className="countdown-deals counter-style--one">
                      <div className="single-countdown">
                        <span className="single-countdown__time">{timerDays}</span>
                        <span className="single-countdown__text">DAYS</span>
                      </div>
                      <div className="single-countdown">
                        <span className="single-countdown__time">{timerHours}</span>
                        <span className="single-countdown__text">HOURS</span>
                      </div>
                      <div className="single-countdown">
                        <span className="single-countdown__time">{timerMinutes}</span>
                        <span className="single-countdown__text">MINTS</span>
                      </div>
                      <div className="single-countdown">
                        <span className="single-countdown__time">{timerSeconds}</span>
                        <span className="single-countdown__text">SECS</span>
                      </div>
                    </div>
                  </div>
                  <div className="button-box section-space--mt_60">
                    <Link to="/" className="btn--md btn--black btn">
                      Shop now
                    <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCollection;