import React, { Component } from "react"

import { FlatList } from "react-native"

import axios from "axios"

import Body from '../../common/components/Body'
import Container from '../../common/components/Container'
import Header from '../../common/components/Header'
import Projects from '../../common/components/Projects'

import { server, showError } from "../../common/configuration/common"

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

        console.log('Projetos')
        return (

            <Container>
                <Header title={this.state.nomeOng} goBack={() => this.props.navigation.goBack()}></Header>

                <Body>
                    <FlatList
                        data={this.state.projects}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <Projects
                                {...this.props}
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