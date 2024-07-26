
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import add from "../../../../public/images/add-icon.png";
import remove from "../../../../public/images/remove.png";

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
    const [items, setItems] = useState([
        { id: 1, title: ' What harsh truths do you prefer to ignore?', content: 'Exercitation in fugiat est ut ad ea cupidatat ut incupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eureprehenderit enim.', isOpen: false },
        { id: 2, title: ' Is free will real or just an illusion?', content: '  In ad velit in ex nostrud dolore cupidatat consecteturea in ut nostrud velit in irure cillum tempor laborissed adipisicing eu esse duis nulla non.', isOpen: false },
        { id: 3, title: ' Is free will real or just an illusion?', content: 'In ad velit in ex nostrud dolore cupidatat consecteturea in ut nostrud velit in irure cillum tempor laborissed adipisicing eu esse duis nulla non.', isOpen: false },
      ]);

      const toggleItem = (id:any) => {
        setItems(
          items.map((item) =>
            item.id === id ? { ...item, isOpen: !item.isOpen } : item
          )
        );
      };
    
    return (

        <div className="container my-8">
                    <h3 className="mb-4"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Azure Course Description
                    </h3>      

                <div className="box-shadow rounded">
                    {items.map((item) => (
                        <div key={item.id} className=" mb-0 bb1">
                            <div className=" b-0 bg-gray px-3 py-3  c-p" onClick={() => toggleItem(item.id)}>
                                {item.isOpen ? <Image src={remove} alt="remove" className="" width={30} height={30} /> : <Image src={add} alt="add" className="" width={30} height={30} /> }
                                <span className="f-18 fw-500">{item.title}</span>
                            </div>
                           
                            {item.isOpen && 
                            <div className="my-3 ms-4">{item.content}</div>}
                        </div>
                    ))}
                </div>

        </div>
    );
}