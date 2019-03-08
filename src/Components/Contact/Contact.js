import React, {Component} from 'react'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
        
        }

    }

    handleSubmit(e){
        console.log(e)
    }
    render(){
        return(
            <section className="section-padding">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="heading-title">Contacter moi</h2>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-sm-6 mt-3 wow fadeInLeft">
                        <div>
                            <p>Vous pouvez me contacter via le formulaire ci-contre si vous avez une question à propos de mon travail, un projet que vous aimeriez réaliser ou autres n'hésitez pas. Je vous répondrai le plus vite possible.</p>
                            <div>
                                <p>30 cours Henri brunet</p>
                                <p>Bordeaux, France</p>
                                <p>33300</p>
                            </div>
                            <span>Email :</span> <a href="mailto:contact@quentingans.fr">contact@quentingans.fr</a>
                        </div>
                    </div>
    
                    <div className="col-md-6 col-sm-6 wow fadeInRight">
                        <div className="contact-form">
                            <div className="contact-box">
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input name="nom" type="text" className="form-control"/>
                                </div>
    
                                <div className="form-group">
                                    <label>Adresse mail</label>
                                    <input name="email" type="text" className="form-control"/>
                                </div>
    
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" className="form-control"></textarea>
                                </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <button name="btnContact"  onClick={(e) => this.handleSubmit(e)} className="btn btn-primary">Envoyer</button>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact