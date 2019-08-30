import React from 'react'
import { connect } from 'react-redux'

import Container from '../../components/Container'
import Header from '../../components/Header'
import ListItem from '../../components/ListItem'
import MonthYear from '../../components/MonthYear'
import Button from '../../components/Button'

import { addJournal } from '../../redux/actions/journal'

class JournalList extends React.Component {
  render () {
    const { journals, history } = this.props
    const data = journals.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    return (
      <Container>
        <Header title='Daily Journals' />
        <Button onClick={() => history.goBack()}>← Back</Button>

        <br />

        {data.map((item, i) => (
          <div key={item.id}>
            <MonthYear
              currentDate={item.createdAt}
              previousDate={i > 0 ? data[i - 1].createdAt : undefined}
            />
            <ListItem to={`/journals/${item.id}`} item={item} />
          </div>
        ))}
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addJournal: journal => dispatch(addJournal(journal))
})

const mapStateToProps = state => ({ journals: state.journalReducer.journals })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalList)