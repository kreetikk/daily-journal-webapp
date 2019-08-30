import React from 'react'
import * as timeago from 'timeago.js'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Container from '../../components/Container'
import Button from '../../components/Button'
import ButtonGroup from '../../components/ButtonGroup'
import Alert from '../../components/Alert'

import { getJournal } from '../../redux/actions/journal'

class JournalView extends React.Component {
  componentDidMount() {
    const { getJournal, match } = this.props

    getJournal(match.params.id)
  }

  render() {
    const { history, journal } = this.props
    
    const GoBack = () => <Button onClick={ () => history.goBack()}> ← Back</Button>

    if(!journal) {
      return (
        <Alert type='error'> <GoBack/> Journal not found</Alert>        
      )
    }

    const d = timeago.format(new Date(journal.createdAt))
    return (
      <Container>
        <Header title={journal.title} />
        <ButtonGroup>
          <GoBack/>
          <Button to={`${journal.id}/edit`}>Edit</Button>
        </ButtonGroup>
        <br />
        <h4>{d}</h4>
        <p>{journal.content}</p>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getJournal: (id) => dispatch(getJournal(id)),
})

const mapStateToProps = (state) => ({
  journal: state.journalReducer.journal,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalView)
