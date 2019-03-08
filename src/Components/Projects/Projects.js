import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl';

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
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >E-Commerce-Vg</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/E-Commerce-Vg" target="_blank">GitHub</Button>
              </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Flocasia</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/Flocasia" target="_blank">GitHub</Button>
              </CardActions>
            </Card>


            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Httpstatus</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > Sylab</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/QuentG/Sylab" target="_blank">GitHub</Button>
              </CardActions>
            </Card>
  
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >LaboSymfony</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Ask-me-something</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/QuentG/NodeJS_Project" target="_blank">GitHub</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Todolist</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Blogger</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </CardText>
                    <CardActions border>
                    <Button colored href="https://github.com/QuentG/Blogger" target="_blank">GitHub</Button>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >quentingans.fr</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
