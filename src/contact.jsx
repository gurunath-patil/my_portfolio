import React from "react";
import "./style.css";
import flag from "./ui_source/maps-flags_447031.png"
export default function Contact() {

    return (
        <>
            <div class="row bg-primary-subtle" id="contact">
                {/* <!-- title --> */}
                <div class="col-12 col-lg-12 mt-3 d-flex justify-content-center" id="contact-txt">
                    <h1 class="text-capitalize text-dark fw-bold d-flex align-items-center"><span class="material-icons">contact_mail</span>Contact</h1>
                </div>
                <div class="col-12 col--lg-12 mt-5">
                    <div class="row mb-5">
                        <div class="col-12 col-lg-4 d-flex flex-column align-items-center">
                            <img class="w-25" src={flag} alt="paris" />
                            <p class="text-capitalize mt-3 fw-semibold">Address</p>
                            <p class="text-capitalize fw-bold fs-5">Kolhapur, Maharashtra 416207</p>
                        </div>
                        <div class="col-12 col-lg-4 d-flex flex-column align-items-center">
                            <img class="w-25" src="src/ui_source/telephone_724664.png" alt="paris" />
                            <p class="text-capitalize mt-3 fw-semibold">phone</p>
                            <p class="text-capitalize fw-bold fs-5">+91 7378478383</p>
                        </div>
                        <div class="col-12 col-lg-4 d-flex flex-column align-items-center">
                            <img class="w-25" src="src/ui_source/email.png" alt="paris" />
                            <p class="text-capitalize mt-3 fw-semibold">Email</p>
                            <p class="fw-bold fs-5">work.gurunathpatil@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
