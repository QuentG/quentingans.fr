import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        activeTab: 0 
    }
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
          <div className="row d-flex">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '180px', background: 'url() center / cover'}} >E-Commerce-Vg</CardTitle>
              <CardText>
                Description : Projet scolaire qui a permis de mettre en pratique les différentes technologies web apprissent au cours de ma première année.
                <br />
                <br />
                Technos utilisés : HTML, CSS, Bootstrap, JS, PHP, MySql.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/E-Commerce-Vg" target="_blank">GitHub</Button>
              </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '180px', background: 'url() center / cover'}} >Flocasia</CardTitle>
              <CardText>
                Description : Réalisation d'un site pour le projet de jeu vidéo Flocasia, avec l'intégration d'un forum réalisé avec PHP et Mysql.
                <br />
                <br />
                Technos utilisés : HTML, CSS, BOOTSTRAP, PHP, Mysql.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/Flocasia" target="_blank">GitHub</Button>
              </CardActions>
            </Card>


            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '180px', background: 'url() center / cover'}} >Httpstatus</CardTitle>
              <CardText>
                Description : Site de monitoring de sites web, avec une mise a jour automatique du statut des sites + conservation de l'historique.
                <br />
                <br />
                Technos utilisés : HTML, CSS, BOOTSTRAP, PHP, MariaDB, Supervisor.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/Httpstatus" target="_blank">GitHub</Button>
              </CardActions>
            </Card>
          </div>
      )
    } else if(this.state.activeTab === 1) {
        return (
          <div className="row d-flex">
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*nR9AG7V-YPWFd7A6GYRtEQ.png) center / cover'}} > Sylab</CardTitle>
              <CardText>
                Description : 
                <br />
                <br />
                Technos utilisés : HTML, CSS, Bootstrap, JQuery, PHP, Symfony 4.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/Sylab" target="_blank">GitHub</Button>
              </CardActions>
            </Card>
  
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*nR9AG7V-YPWFd7A6GYRtEQ.png) center / cover'}} >LaboSymfony</CardTitle>
              <CardText>
                Description : Projet de découverte du framework Symfony, sur la denière version actuelle de Symfony 4. 
                <br />
                <br />
                Technos utilisés : HTML, Bootstrap, PHP, Symfony 4.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/LaboSymfony" target="_blank">GitHub</Button>
              </CardActions>
            </Card>
          </div>
        )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="row d-flex">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://static.webpunks.co/uploads/2016/08/nodejs-modules-webentwicklung-webdevelopment-webpunks.jpg) center / cover'}} >Ask-me-something</CardTitle>
            <CardText>
              Description : Réalisation d'un quizz en CLI (Command Line Interface) qui récupére les questions/réponses depuis une Api.
              <br />
              <br />
              Technos utilisés : JS, NodeJS, API, Sqlite3.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/QuentG/NodeJS_Project" target="_blank">GitHub</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://static.webpunks.co/uploads/2016/08/nodejs-modules-webentwicklung-webdevelopment-webpunks.jpg) center / cover'}} >Todolist</CardTitle>
            <CardText>
              Description : Réalisation d'une todolist sous forme d'Api en utilisant le framework express.
              <br />
              <br />
              Technos utilisés : JS, NodeJS, ExpressJS, Handlebars, Sqlite3.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/ArnaudDauguen/NodeJs-TodoList" target="_blank">GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
        return (
            <div className="row d-flex">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/4445319/original/58b332866815381e7c758143f8bc8ece0de96edd/create-reusable-react-js-components.png) center / cover'}} >Blogger</CardTitle>
                    <CardText>
                      Decription : Réalisation d'un blog pour découvrire le framework ReactJS.
                      <br/>
                      <br/>
                      Technos utilisés : HTML, CSS, ReactJS, API.
                    </CardText>
                    <CardActions border>
                    <Button colored href="https://github.com/QuentG/Blogger" target="_blank">GitHub</Button>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/4445319/original/58b332866815381e7c758143f8bc8ece0de96edd/create-reusable-react-js-components.png) center / cover'}} >quentingans.fr</CardTitle>
                    <CardText>
                      Decription : Mon site vitrine développé avec le framework ReactJS.
                      <br/>
                      <br/>
                      Technos utilisés : HTML, CSS, Bootstrap, ReactJS, Firebase.
                    </CardText>
                    <CardActions border>
                    <Button colored href="https://github.com/QuentG/quentingans.fr" target="_blank">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>PHP</Tab>
          <Tab>Symfony</Tab>
          <Tab>NodeJs</Tab>
          <Tab>ReactJs</Tab>
        </Tabs>

        <Grid>
            <Cell col={12}>
                <div>{this.toggleCategories()}</div>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
