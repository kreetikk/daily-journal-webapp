import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import ListItem from '../../components/ListItem'
import Container from '../../components/Container'
import MonthYear from '../../components/MonthYear'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Alert from '../../components/Alert'

import { addJournal, getAllJournals } from '../../redux/actions/journal'

class Home extends React.Component {

  state = {
    title: '',
    content: '',
    error: '',
    success: ''
  }

  componentDidMount () {
    const { journals, getAllJournals } = this.props
    if(!journals.length){
      getAllJournals()
    }

  }

  titleChangeHandler = (e) => this.setState({title: e.target.value})
  contentChangeHandler = (e) => this.setState({content: e.target.value})
  resetSuccessErrorSoon = () => setTimeout(() => this.setState({ success: '', error: ''}), 8000)

  saveHandler = () => {
    const { addJournal } = this.props
    const { title, content } = this.state
    if (title && content) {
      addJournal(this.state)
      this.setState({success: 'Journal added successfully.'})
      this.resetSuccessErrorSoon()
    } else {
      this.setState({ error: 'Journal title and content is required.'})
      this.resetSuccessErrorSoon()
    }
  }

  render() {
    const { journals } = this.props
    const { error, success } = this.state
    console.log(journals)

    const data = (journals || []).sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5)
    return (
      <Container>
        <Header title="Daily Journals" />
        <TextInput
          label="Title"
          placeholder="Please input your title"
          onChange={this.titleChangeHandler}
        />
        <TextInput
          label="Content"
          rows="5"
          placeholder="Please write your journal here"
          onChange={this.contentChangeHandler}
        />
        <Button onClick={this.saveHandler}>Save</Button>
        {error && <Alert type="error">{error}</Alert>}
        {success && <Alert type="success">{success}</Alert>}
        <br />

        {data.map((item, i) => (
          <div key={item.id}>
            <MonthYear
              currentDate={item.createdAt}
              previousDate={i > 0 ? data[i - 1].createdAt : undefined}
            />

            <ListItem item={item} to={`/journals/${item.id}`} />
          </div>
        ))}

        <br />

        <Button to='/journals'>More »</Button>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllJournals: () => dispatch(getAllJournals()),
  addJournal: journal => dispatch(addJournal(journal))
})

const mapStateToProps = ({journalReducer: {journals, getAllJournalsLoading, getAllJournalsError}}) => ({
  journals, getAllJournalsLoading, getAllJournalsError
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
