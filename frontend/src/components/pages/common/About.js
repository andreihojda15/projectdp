/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function About() {
  return (
    <div id="about" className="w-4/5 text-center rounded mt-6 mb-40">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-2 items-center align-center">
        <div className="text-sm md:text-lg px:3 md:px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean suscipit tortor eu tristique interdum. Ut ut mi quis odio dictum varius.
          <div className="hidden md:block md:text-lg">
            <br />
            Donec id dapibus libero.
            Suspendisse sollicitudin et velit eu vulputate.
            Nulla scelerisque, risus quis lacinia luctus, risus justo fringilla nisl, ultricies fringilla urna mi eu tellus.
            Phasellus sapien turpis, facilisis in elit et, tincidunt lobortis purus. Vestibulum auctor urna ut magna maximus bibendum.
            Fusce eu odio mauris. Pellentesque pharetra nulla id maximus suscipit.
            Cras urna velit, volutpat sed quam non, maximus auctor urna.
            Nam sit amet lectus est. Ut ligula libero, gravida id ornare sed, ullamcorper at libero.
            Nullam rutrum eleifend nisi, quis porta ipsum ultrices vel.
          </div>
        </div>
        <img src={require('../../../imgs/pic4.jpg')} alt="lofi image" className="object-cover  rounded" />
        <img src={require('../../../imgs/pic5.jpg')} alt="lofi image" className="object-cover  rounded" />
        <div className="text-sm md:text-lg px:3 md:px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean suscipit tortor eu tristique interdum. Ut ut mi quis odio dictum varius.
          <div className="hidden md:block md:text-lg">
            <br />
            Donec id dapibus libero.
            Suspendisse sollicitudin et velit eu vulputate.
            Nulla scelerisque, risus quis lacinia luctus, risus justo fringilla nisl, ultricies fringilla urna mi eu tellus.
            Phasellus sapien turpis, facilisis in elit et, tincidunt lobortis purus. Vestibulum auctor urna ut magna maximus bibendum.
            Fusce eu odio mauris. Pellentesque pharetra nulla id maximus suscipit.
            Cras urna velit, volutpat sed quam non, maximus auctor urna.
            Nam sit amet lectus est. Ut ligula libero, gravida id ornare sed, ullamcorper at libero.
            Nullam rutrum eleifend nisi, quis porta ipsum ultrices vel.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
