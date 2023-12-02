import React from 'react';

export default function ContactForm(props) {
    return (
      <div className="contact-form container">
            <form method="post">
               <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}}></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btn btn-primary" value="Send Message" />
                        </div>
                    </div>
                </div>
            </form>
      </div>
    );
  }