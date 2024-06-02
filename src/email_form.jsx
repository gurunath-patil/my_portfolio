import React, { useEffect, useState } from "react";
import "./style.css"
function Email_form() {
    const [formdata, setFormdata] = useState({
        firstName: '',
        lastName: '',
        EMail: '',
        Message: ''
    })

    function sendData(res) {
        res.preventDefault()
        let flag = true
        for (let res in formdata) {
            if (formdata[res] == '') {
                flag = false
            }
        }
        if (flag) {
            try {
                fetch('http://localhost:3000/contactusdata', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        data: formdata
                    })
                }).then(res => res.json())
                    .then(res => {
                        if (res != undefined) {
                            alert('your data successfuly saved')
                            location.reload()
                        } else {
                            alert('somthing went wrong, data not saved')
                        }
                    })
            } catch (err) {
                alert('something went wrong')
                console.log(err);
            }
        } else {
            alert('please fill up properly')
        }

        // fetch('http://localhost:3000/check').then(res => res.json())
        //     .then(res => console.log(res))
    }

    return (
        <>
            <section id="main-container" className="vh-100 d-flex justify-content-center align-items-center">
                <div className="container border border-warning rounded shadow-lg w-50 p-5">
                    <form action="">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-uppercase text-danger fw-bold">Contact Us</h1>
                                <p className="text-capitalize">please fill this form</p>
                            </div>
                            <hr />
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 mb-2">
                                <label htmlFor="" className="fw-bold">Full Name</label>
                            </div>
                            <div className="col-6">
                                <input type="text" name="firstName" id="firstName" className="border border-dark rounded p-1"
                                    onChange={(e) => {
                                        setFormdata({ ...formdata, firstName: e.target.value })
                                    }}
                                    value={formdata.firstName} />
                                <br /><span>First Name</span>
                            </div>
                            <div className="col-6">
                                <input type="text" name="lastName" id="lastName" className="border border-dark rounded p-1"
                                    onChange={(e) => setFormdata({ ...formdata, lastName: e.target.value })} value={formdata.lastName} required />
                                <br /><span>Last Name</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2 mt-4">
                                <label htmlFor="email" className="fw-bold">E-Mail</label>
                            </div>
                            <div className="col-12">
                                <input className="w-100 border border-dark rounded p-1" type="email" name="EMail" id="email"
                                    onChange={(e) => setFormdata({ ...formdata, EMail: e.target.value })} value={formdata.EMail} required />
                                <br /><span>example@email.com</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2 mt-4">
                                <label htmlFor="msg" className="fw-bold">Message</label>
                            </div>
                            <div className="col-12" id="textarea-container">
                                <textarea className="w-100 border border-dark rounded p-1" name="Message" id="msg" cols="30" rows="10"
                                    onChange={(e) => setFormdata({ ...formdata, Message: e.target.value })} value={formdata.Message} required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-5 d-flex justify-content-center">
                                <button className="btn btn-success fw-bold"
                                    onClick={(e) => {
                                        sendData(e)
                                    }}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </>
    )
}

export default Email_form