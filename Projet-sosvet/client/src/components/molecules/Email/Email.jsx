import emailjs from "emailjs-com";
import React from 'react';
require('./_email.scss');
export default function Email(props) {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('nmgm30()', 'template_3jly6kg', e.target, 'user_K7SxzNy7MYynmulZ7KiLM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (

        <form id="modal" onSubmit={sendEmail}>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(5vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Contactez-nous</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>

                    <div className="form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Nom et Prenom" name="name" />
                    </div>
                    <div className="form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Objet" name="subject" />
                    </div>
                    <div className="form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Indiquez votre message" name="message"></textarea>
                    </div>
                    <div className="envoi-center">

                    </div>
                </div>
                <div className="modal-footer">
                    <input type="submit" className="btn btn-info" value="Envoyer"></input>
                </div>
            </div>
        </form>

    )
}


