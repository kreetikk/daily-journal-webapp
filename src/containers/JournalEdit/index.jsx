import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Container from '../../components/Container'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import ButtonGroup from '../../components/ButtonGroup'
import Alert from '../../components/Alert'

import { getJournal } from '../../redux/actions/journal'

class JournalEdit extends React.Component {
  state = {}

  componentDidMount() {
    const { getJournal, match } = this.props
    getJournal(match.params.id)
  }

  deleteHandler = (e) => {
    const { history } = this.props
    if (window.confirm('Are you sure you want to delete this journal?')) {
      history.push('/journals')
    }
    e.preventDefault()
  }

  saveHandler = (e) => {
    const { history } = this.props
    if (
      window.confirm(
        'Your changes are not saved. Are you sure you want to go back?',
      )
    ) {
      history.goBack()
    }
    e.preventDefault()
  }

  formSubmitHandler = (e) => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    const { history, journal } = this.props
    const GoBack = () => (
      <Button onClick={() => history.goBack()}>← Back</Button>
    )

    if (!journal) {
      return (
        <Alert type="error">
          <GoBack /> Journal not found
        </Alert>
      )
    }

    return (
      <Container>
        <Header title={journal.title} />
        <ButtonGroup>
          <GoBack />
          <Button type="error" onClick={this.deleteHandler}>
            Delete
          </Button>
        </ButtonGroup>
        <br />
        <TextInput
          label="Title"
          defaultValue={journal.title}
          placeholder="Please input your title"
        />
        <TextInput
          label="Content"
          rows="5"
          defaultValue={journal.content}
          placeholder="Please write your journal here"
        />
        <br />
        <Button onClick={this.saveHandler}>Save</Button>
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
)(JournalEdit)
