'use client'

import React, { useState } from 'react';

const RangeSlider = () => {
  const [minprice, setMinPrice] = useState(100);
  const [maxprice, setMaxPrice] = useState(7000);
  const min = 100;
  const max = 10000;

  const minthumb = ((minprice - min) / (max - min)) * 100;
  const maxthumb = 100 - (((maxprice - min) / (max - min)) * 100);

  const mintrigger = (e:any) => {
    setMinPrice(Math.min(parseInt(e.target.value, 10), maxprice - 500));
  };

  const maxtrigger = (e:any) => {
    setMaxPrice(Math.max(parseInt(e.target.value, 10), minprice + 500));
  };

  return (
    <div className="">
      <div className="relative w-4/6">
        <div>
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            onChange={mintrigger}
            value={minprice}
            className="absolute z-10 w-full opacity-0 cursor-pointer"
          />

          <input
            type="range"
            step="100"
            min={min}
            max={max}
            onChange={maxtrigger}
            value={maxprice}
            className="absolute z-10 w-full opacity-0 cursor-pointer"
          />

          <div className="relative z-0 h-2">
            <div className="absolute z-0 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

            <div
              className="absolute z-10 top-0 bottom-0 rounded-md bg-gray-500"
              style={{ right: `${maxthumb}%`, left: `${minthumb}%` }}
            ></div>

            <div
              className="absolute z-20 w-6 h-6 top-0 left-0 bg-gray-500 rounded-full -mt-2 -ml-1"
              style={{ left: `${minthumb}%`, zIndex: 20 }}
            ></div>

            <div
              className="absolute z-20 w-6 h-6 top-0 right-0 bg-gray-500 rounded-full -mt-2 -mr-3"
              style={{ right: `${maxthumb}%`, zIndex: 20 }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={mintrigger}
              value={minprice}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={maxtrigger}
              value={maxprice}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
