// import React, { useEffect, useState } from 'react';

// const Typewriter = ({ textList, period }) => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [txt, setTxt] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timeout;
//     const tick = () => {
//       const i = loopNum % textList.length;
//       const fullTxt = textList[i];

//       if (isDeleting) {
//         setTxt((prevTxt) => prevTxt.substring(0, prevTxt.length - 1));
//       } else {
//         setTxt((prevTxt) => fullTxt.substring(0, prevTxt.length + 1));
//       }

//       const delta = 200 - Math.random() * 100;
//       if (isDeleting) {
//         timeout = setTimeout(tick, delta / 2);
//       } else if (!isDeleting && txt === fullTxt) {
//         timeout = setTimeout(() => {
//           setIsDeleting(true);
//           setLoopNum((prevLoopNum) => prevLoopNum + 1);
//         }, period);
//       } else if (isDeleting && txt === '') {
//         setIsDeleting(false);
//         timeout = setTimeout(tick, 500);
//       } else {
//         timeout = setTimeout(tick, delta);
//       }
//     };

//     tick();

//     return () => clearTimeout(timeout);
//   }, [loopNum, txt, isDeleting, period, textList]);

//   return <span className="wrap">{txt}</span>;
// };

// const TypewriterContainer = () => {
//   useEffect(() => {
//     const elements = document.getElementsByClassName('typewrite');
//     for (let i = 0; i < elements.length; i++) {
//       const toRotate = elements[i].getAttribute('data-type');
//       const period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         const textList = JSON.parse(toRotate);
//         ReactDOM.render(
//           <Typewriter textList={textList} period={period} />,
//           elements[i]
//         );
//       }
//     }

//     const css = document.createElement('style');
//     css.type = 'text/css';
//     css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
//     document.body.appendChild(css);
//   }, []);

//   return <div className="typewrite"></div>;
// };

// export default TypewriterContainer;
