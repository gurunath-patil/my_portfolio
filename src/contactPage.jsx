import React, { useState } from "react";
import "./style.css"
import moment from "moment";
import { redirect } from "react-router-dom";

export default function ContactPage() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [massage, setMassage] = useState()

    async function sendMassage(e) {
        e.preventDefault();
        const emailCondition = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
        let emailStatus = emailCondition.test(email)
        if (emailStatus) {
            try {
                let result = await fetch(`https://script.google.com/macros/s/AKfycbyh2bCzV8WOzyu5QUdC2319dkQ90SruuOVhFWQhsYonazxCaUmwT-SYVfBFg47j3yGD4A/exec?first=${name}&email=${email}&message=${massage}&date=${moment().format("DD/MM/YYYY, h:mm a")}`)
                let output = await result.text()
                if (typeof output == "string") {
                    alert('your details received successfully')
                    redirect('/contactform')
                }
            } catch (err) {
                alert('data not save succefully try again')
            }
        } else {
            alert("please enter valid email")
        }

    }

    return (
        <>
            <div className="w-100 min-vh-100 d-flex justify-contnet-center flex-wrap align-items-center border border-dark" id="contact-details-container">
                <div className="row container-fluid p-2">
                    {/* first part left side */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6" id="left-side-container">
                        <h1 className="display-4 text-capitalize text-light fw-bold">Les’t talk</h1>
                        <h1 className="display-4 text-capitalize text-light fw-bold">on something <span id="add-color-great">great</span></h1>
                        <h1 className="display-4 text-capitalize text-light fw-bold">together</h1>
                        <p className="mt-4 fs-4 text-light d-flex flrx-wrap"><i className="bi bi-envelope me-3 fs-4"></i>work.gurunathpatil@gmail.com</p>
                        <p className="fs-4 text-light d-flex flrx-wrap"><i className="bi bi-telephone me-3 fs-4"></i>+91 7378478383</p>
                        <p className="fs-4 text-light d-flex flrx-wrap"><i className="bi bi-geo-alt-fill me-3 fs-4"></i>At Post Chuye,Kolhapur,Maharashtra</p>
                        <div className="w-50 d-flex justify-content-around mt-5">
                            <a href="https://www.linkedin.com/in/gurunath-patil" target="_blank"><i className="bi bi-linkedin fs-1"></i></a>
                            <a href="https://www.instagram.com/gurunath_patil_?igsh=MXB3Y2I1cDFtbnEybg==" target="_blank"><i className="bi bi-instagram fs-1"></i></a>
                            <a href="https://github.com/gurunath-patil" target="_blank"><i className="bi bi-github fs-1"></i></a>
                        </div>
                    </div>

                    {/* right side part */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center" id="right-side-container">
                        <form action="" className="w-75">
                            <div className="row border border-dark p-3" id="form-container">
                                <div className="col-12 col-md-12 col-lg-12 mb-3 p-3">
                                    <h2 className="text-capitalize form-text-color">fill up this details</h2>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12">
                                    <label htmlFor="name" className="form-text-color">Your Name</label>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 mb-3">
                                    <input type="text" id="name" name="name" placeholder="enter your name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name} />
                                </div>
                                <div className="col-12 col-md-12 col-lg-12">
                                    <label htmlFor="emailid" className="form-text-color">Your Email</label>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 mb-3">
                                    <input type="email" id="emailid" name="emailid" placeholder="example@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email} />
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 mb-2">
                                    <label htmlFor="msg" className="form-text-color">Your Massage</label>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 mb-5">
                                    <textarea className="" name="msg" id="msg" cols="30" rows="3"
                                        onChange={(e) => setMassage(e.target.value)}
                                        value={massage}></textarea>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 mb-5">
                                    <button type="submit"
                                        onClick={sendMassage}
                                        className="w-100 btn form-btn-bg btn-outline-success p-2 text-capitalize">send message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}