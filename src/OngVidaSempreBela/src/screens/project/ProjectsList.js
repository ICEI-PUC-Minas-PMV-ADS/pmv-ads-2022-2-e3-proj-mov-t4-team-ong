import React, { Component } from "react"

import Container from '../../components/common/Container'
import Header from '../../components/common/Header'
import Body from '../../components/common/Body'
import { FlatList, StyleSheet } from "react-native"
import axios from "axios"
import { server, showError } from "../../common/configuration/common"
import { Card } from "react-native-elements"
import { Button, Paragraph, Title } from "react-native-paper"
import Projects from '../../components/screen/Projects'

initialState = {
    projects: [],
    ongId: 1,
    nomeOng: 'Ong1'
}

class ProjectsList extends Component {

    state = {
        ...initialState
    }

    componentDidMount = () => {

        this.setState({
            ongId: this.props.route.params.ongId,
            nomeOng: this.props.route.params.nomeOng
        }, this.loadProjects)
    }

    loadProjects = async () => {
        
        try {
            const res = await axios.get(`${server}/projects/${this.state.ongId}`);
            this.setState({ projects: res.data })
            
        } catch (e) {
            showError(e)
        }
    }

    render() {

        return (

            <Container>
                <Header title={this.state.nomeOng} goBack={() => this.props.navigation.goBack()}></Header>

                <Body>
                    <FlatList
                        data={this.state.projects}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <Projects
                                {...item}
                                schema={this.props.schema}
                            />
                        }
                    />
                </Body>

            </Container>
        )
    }
}

export default ProjectsList