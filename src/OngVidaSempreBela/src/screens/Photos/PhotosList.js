import react, { Component } from "react"
import { FlatList } from "react-native"
import Body from "../../common/components/Body"
import Container from "../../common/components/Container"
import Header from "../../common/components/Header"

initialState = {
    nomeProject: '',
    projectId: 0,
}
class PhotosList extends Component {

    state = {
        ...initialState
    }

    componentDidMount = () => {

        this.setState({
            projectId: this.props.route.params.projectId,
            nomeProject: this.props.route.params.nome
        })
    }

    render() {
        return (
            <Container>
                <Header title={this.state.nomeProject} goBack={() => this.props.navigation.goBack()}></Header>
                <Body>
                    <FlatList
                    
                    />
            </Body>
            </Container>
        )
    }
}

export default PhotosList