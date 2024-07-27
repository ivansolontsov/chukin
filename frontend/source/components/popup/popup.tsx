'use client'
import React, { useState } from "react";
import './popup.css';
import Image from "next/image";
import { on } from "events";

export const Popup = ({ isOpen, onClose }) => {

    return (
        <>
            {isOpen && (
                <div className="popup">
                    <div className="popup_wrapper">
                        <div className="popup_content">
                            <div className="top_button">
                        <button className="popup_close_button"
                                onClick={() => onClose()}>
                                <Image
                                    className=""
                                    src="/cross.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />

                            </button>
                            </div>
                            <div className="inputs">
                                <div className="input_item">
                                <label for="phone">Телефон</label>
                                <input type="text" id="phone" name="phone" required minlength="4" maxlength="8" size="10" className="input_pole"/>
                                </div>
                                <div className="input_item">
                                <label for="name">Ім'я</label>
                                <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" className="input_pole"/>
                                </div>
                                <div className="input_item">
                                <label for="coment">Коментар</label>
                                <input type="text" id="coment" name="coment" required minlength="4" maxlength="8" size="10" className="input_pole"/>
                                </div>
                            </div>
                            

                        </div>
                    </div>

                </div>
            )}
        </>



    )


}